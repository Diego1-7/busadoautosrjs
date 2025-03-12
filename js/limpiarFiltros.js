import { mostrarResultados } from "./mostrarResultados.js";
export function limpiarFiltros(datos) {
    document.getElementById('marca').value = '';
    document.getElementById('año').value = '';
    document.getElementById('color').value = '';
    document.getElementById('precioMin').value = '';
    document.getElementById('precioMax').value = '';
    document.getElementById('puertas').value = '';
    document.getElementById('transmision').value = '';
    mostrarResultados(datos);
}