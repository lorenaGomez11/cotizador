import { Fragment } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'/*aca importa los datos del index de carpeta constantes para los select pero yo tendria que crear un jason e importarlo reemplazando esta parte. */
import useCotizador from '../hooks/useCotizador'
import Error from './Error'

export default function Formulario() {

    const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador() 

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')
        cotizarSeguro()
        
    }

    return (
        <>
            {error && <Error />}

            <form
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label className="block mb-3 font-bold
                    text-gray-400 uppercase">
                        Marca
                    </label>
                    <select
                        name="marca"
                        className="w-full p-3 bg-white border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.marca}
                    >
                        <option value="">-- Selecione Marca --</option>
                        {MARCAS.map(marca =>(
                            <option
                                key={marca.id}
                                value={marca.id}
                            >
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold
                    text-gray-400 uppercase">
                        Año
                    </label>
                    <select
                        name="year"
                        className="w-full p-3 bg-white border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.year}
                    >
                        <option value="">-- Selecione Año --</option>
                        {YEARS.map(year =>(
                            <option
                                key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold
                    text-gray-400 uppercase">
                        Plan
                    </label>
                    <select
                        name="plan"
                        className="w-full p-3 bg-white border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.plan}
                    >
                        <option value="">-- Selecione Plan --</option>
                        {PLANES.map(plan =>(
                            <option
                                key={plan.id}
                                value={plan.id}
                            >
                                {plan.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                
                <input
                    type="submit"
                    className='w-full bg-pink-200 hover:bg-pink-300 transition-colors text-white
                    cursor-pointer p-3 uppercase font-bold'
                    value="Cotizar"
                />
            </form>
        </>
  )
}
