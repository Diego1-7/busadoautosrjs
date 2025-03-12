import { mostrarResultados } from "./mostrarResultados.js";

export function buscar(datos) {
    const marcaSelect = document.getElementById('marca');
    const añoSelect = document.getElementById('año');
    const colorSelect = document.getElementById('color');
    const precioMinInput = document.getElementById('precioMin');
    const precioMaxInput = document.getElementById('precioMax');
    const puertasSelect = document.getElementById('puertas');
    const transmisionSelect = document.getElementById('transmision');

    const filtrados = datos.filter(auto => {
        return (!marcaSelect.value || auto.marca === marcaSelect.value) &&
            (!añoSelect.value || auto.año === parseInt(añoSelect.value)) &&
            (!colorSelect.value || auto.color === colorSelect.value) &&
            (!precioMinInput.value || auto.precio >= parseFloat(precioMinInput.value)) &&
            (!precioMaxInput.value || auto.precio <= parseFloat(precioMaxInput.value)) &&
            (!puertasSelect.value || auto.puertas === parseInt(puertasSelect.value)) &&
            (!transmisionSelect.value || auto.transmision === transmisionSelect.value);
            });

            mostrarResultados(filtrados);
}

export function configurarBusquedaAutomatica(datos) {
    const filtros = [
        document.getElementById('marca'),
        document.getElementById('año'),
        document.getElementById('color'),
        document.getElementById('precioMin'),
        document.getElementById('precioMax'),
        document.getElementById('puertas'),
        document.getElementById('transmision')
    ];


    filtros.forEach(filtro => {
        filtro.addEventListener('input', () => buscar(datos));
        filtro.addEventListener('change', () => buscar(datos));
    });

    buscar(datos);
}
