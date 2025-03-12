export function mostrarResultados(datos) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';
    datos.forEach(auto => {
        const autoDiv = document.createElement('div');
        autoDiv.className = 'resultado';
        autoDiv.textContent = `${auto.marca} ${auto.modelo} - ${auto.año} - ${auto.puertas} Puertas - Transmisión ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}`;
        resultadosDiv.appendChild(autoDiv);
    });
}