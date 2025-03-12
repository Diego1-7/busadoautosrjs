export function cargarFiltros(datos) {
const marcaSelect = document.getElementById('marca');
const añoSelect = document.getElementById('año');
const colorSelect = document.getElementById('color');
const puertasSelect = document.getElementById('puertas');

const marcas = [...new Set(datos.map(auto => auto.marca))];
const años = [...new Set(datos.map(auto => auto.año.toString()))];
const colores = [...new Set(datos.map(auto => auto.color))];
const puertas = [...new Set(datos.map(auto => auto.puertas.toString()))];

marcas.forEach(marca => {
    const option = document.createElement('option');
    option.value = marca;
    option.textContent = marca;
    marcaSelect.appendChild(option);
});

años.forEach(año => {
    const option = document.createElement('option');
    option.value = año;
    option.textContent = año;
    añoSelect.appendChild(option);
});

colores.forEach(color => {
    const option = document.createElement('option');
    option.value = color;
    option.textContent = color;
    colorSelect.appendChild(option);
    });

    puertas.forEach(puerta => {
        const option = document.createElement('option');
        option.value = puerta;
        option.textContent = puerta;
        puertasSelect.appendChild(option);
    });
}