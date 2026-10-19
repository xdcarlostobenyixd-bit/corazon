const universo = document.getElementById('universo');
const musica = document.getElementById('musica-fondo');
let musicaIniciada = false;

const mensajes = [
    "✨ Me encantas!",
    "❤️ Eres una persona increíble",
    "🌟 Eres increible",
    "💫 Me encanta tu voz",
    "🌸 Tu sonrisa cambia el día",
    "🚀 Eres hermosa",
    "🍀 Quiero verte sonreír",
    "🌷 Eres única",
    "💖 Me haces feliz",
    "estas en mi corazón",
    "💌 Eres especial para mí",
    "que lindo es tenerte en mi vida",
    "💞 Eres mi inspiración",
    "🌈 Me haces sentir vivo",
];

// ... (El inicio de tu archivo script.js se mantiene exactamente igual) ...

document.addEventListener('click', (e) => {
    // TRUCO: Iniciar la música de fondo únicamente en el primer clic
    if (!musicaIniciada) {
        // Define el segundo exacto de inicio
        musica.currentTime = 45; 
        
        // NUEVO: Baja el volumen al 30% para que suene suave de fondo
        musica.volume = 0.3; 
        
        musica.play().catch(error => console.log("El navegador bloqueó el audio inicial:", error));
        musicaIniciada = true;
    }

    // ... (El resto del código de los destellos y textos sigue exactamente igual) ...


    // 1. Crear el destello visual de la estrella estrella-clic
    const estrella = document.createElement('div');
    estrella.classList.add('estrella-clic');
    estrella.style.left = `${e.clientX}px`;
    estrella.style.top = `${e.clientY}px`;
    universo.appendChild(estrella);

    // 2. Crear el texto flotante aleatorio
    const texto = document.createElement('div');
    texto.classList.add('texto-flotante');
    texto.style.left = `${e.clientX}px`;
    texto.style.top = `${e.clientY}px`;
    
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    texto.innerText = mensajeAleatorio;
    universo.appendChild(texto);

    // 3. Limpiar elementos al terminar la animación
    setTimeout(() => {
        estrella.remove();
        texto.remove();
    }, 2200);
});
