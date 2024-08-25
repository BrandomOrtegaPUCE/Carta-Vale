function openEnvelope() {
    // Cambia la imagen del sobre cerrado por una del sobre abierto
    document.getElementById('envelope-image').src = 'envelope-open.png';

    // Muestra la carta después de un pequeño retraso para la animación
    setTimeout(function() {
        document.getElementById('envelope').style.display = 'none';
        document.getElementById('letter').style.display = 'block';
    }, 1000); // Espera 1 segundo antes de mostrar la carta
}
