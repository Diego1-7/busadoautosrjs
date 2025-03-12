import { cargarFiltros } from './cargarFiltros.js';
import { mostrarResultados } from './mostrarResultados.js';
import { buscar, configurarBusquedaAutomatica } from './buscar.js';
import { limpiarFiltros } from './limpiarFiltros.js';

document.addEventListener('DOMContentLoaded', async function() {
    const datos = await fetch('./data/datos.json').then(response => response.json());

    cargarFiltros(datos);
    mostrarResultados(datos);

    configurarBusquedaAutomatica(datos);
    
    document.getElementById('limpiar').addEventListener('click', () => limpiarFiltros(datos));
    });
