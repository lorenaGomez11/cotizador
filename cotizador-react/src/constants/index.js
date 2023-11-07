export const MARCAS = [
    {id: 1, nombre: 'BMW'},
    {id: 2, nombre: 'Tesla'},
    {id: 3, nombre: 'Audi'},
    {id: 4, nombre: 'Ford'},
]

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from( new Array(20), (valor, index) => YEARMAX - index);

export const PLANES = [
    {id: 1, nombre: 'Básico'},
    {id: 2, nombre: 'Completo'},
    {id: 3, nombre: 'Ahorro'}
]



/*este archivo index seria mi JSON . Tengo que reemplazar este index con el jason. */