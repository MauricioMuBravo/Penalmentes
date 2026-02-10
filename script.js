/* ===========================================================
   1. VARIABLES DE ESTADO Y DATOS
   =========================================================== */
let nivel = 1;
let goles = 0;
let tirosRonda = 0; 
let vidas = 3;
let bloqueado = false;
let preguntaActual = null;
let preguntasRestantes = [];

const bancoPreguntas = [
  [ // Nivel 1: Fase de Grupos
    { q:"¿Quién ganó el Mundial 2018?", a:"Francia", options:["Francia","Croacia","Brasil"], hintText:"El campeón de 2018 es europeo y ganó su segundo Mundial.", exp:"Francia ganó 4-2 a Croacia en la final." },
    { q:"¿Qué país tiene más Mundiales?", a:"Brasil", options:["Argentina","Brasil","Italia"], hintText:"El país sudamericano con más Copas del Mundo.", exp:"Brasil tiene 5 títulos." },
    { q:"¿Quién ganó el Mundial 2010?", a:"España", options:["España","Países Bajos","Alemania"], hintText:"Ganó su primer Mundial con un gol icónico en tiempos extras.", exp:"España ganó 1-0 con gol de Iniesta." },
    { q:"¿Quién fue campeón del Mundial 2006?", a:"Italia", options:["Italia","Francia","Alemania"], hintText:"Venció en penales a Francia tras un empate 1-1.", exp:"Italia ganó 5-3 en penales a Francia." },
    { q:"¿Qué país ganó el primer Mundial (1930)?", a:"Uruguay", options:["Uruguay","Argentina","Italia"], hintText:"País sudamericano que fue el primer anfitrión y campeón.", exp:"Uruguay fue el primer campeón en 1930." }
  ],
  [ // Nivel 2: 8vos de Final
    { q:"¿Qué país ganó el Mundial 1998?", a:"Francia", options:["Brasil","Francia","Croacia"], hintText:"Ganó su primer Mundial en casa como anfitrión.", exp:"Francia ganó 3-0 a Brasil en la final." },
    { q:"¿Quién ganó más Balones de Oro hasta 2022?", a:"Lionel Messi", options:["Cristiano Ronaldo","Lionel Messi","Ronaldinho"], hintText:"Jugador argentino que recientemente ganó el Mundial.", exp:"Messi tiene 7 Balones de Oro (al 2022)." },
    { q:"¿Qué país ganó el Mundial 1994?", a:"Brasil", options:["Italia","Brasil","Suecia"], hintText:"País sudamericano que ganó la primera final decidida en penales.", exp:"Brasil venció a Italia en penales." },
    { q:"¿Quién fue el goleador del Mundial 2002?", a:"Ronaldo", options:["Ronaldo","Miroslav Klose","Rivaldo"], hintText:"El 'Fenómeno' brasileño con un peinado muy peculiar.", exp:"Ronaldo marcó 8 goles en 2002." },
    { q:"¿Dónde se celebró el Mundial 2014?", a:"Brasil", options:["Brasil","Alemania","Argentina"], hintText:"País sudamericano que sufrió el 'Mineirazo'.", exp:"Brasil fue anfitrión en 2014." }
  ],
  [ // Nivel 3: 4tos de Final
    { q:"¿Qué selección ganó el Mundial 1978?", a:"Argentina", options:["Argentina","Holanda","Alemania"], hintText:"Ganó su primer título como local ante Holanda.", exp:"Argentina ganó 3-1 a Holanda en tiempo extra." },
    { q:"¿Quién fue el máximo goleador de 1986?", a:"Gary Lineker", options:["Diego Maradona","Gary Lineker","Careca"], hintText:"Delantero inglés, hoy comentarista famoso.", exp:"Lineker marcó 6 goles en 1986." },
    { q:"¿Cuál fue la final del Mundial 2006?", a:"Italia vs Francia", options:["Italia vs Francia","Brasil vs Alemania","España vs Holanda"], hintText:"Duelo europeo marcado por la despedida de Zidane.", exp:"Italia ganó 5-3 en penales a Francia." },
    { q:"¿Qué país ganó el Mundial 1934?", a:"Italia", options:["Italia","Checoslovaquia","Alemania"], hintText:"Fue el primer campeón europeo.", exp:"Italia ganó in 1934." },
    { q:"¿Quién marcó el gol de la final 2010?", a:"Andrés Iniesta", options:["David Villa","Andrés Iniesta","Xavi Hernández"], hintText:"'El Caballero Pálido' del FC Barcelona.", exp:"Iniesta marcó el gol del título en 2010." }
  ],
  [ // Nivel 4: Semifinal
    { q:"¿Cuál fue el primer Mundial televisado?", a:"1954", options:["1950","1954","1962"], hintText:"Ocurrió en Suiza durante los años 50.", exp:"1954 fue el primero con retransmisión televisiva." },
    { q:"¿Qué país ganó el Mundial 1938?", a:"Italia", options:["Italia","Hungría","Brasil"], hintText:"Lograron el bicampeonato antes de la Segunda Guerra Mundial.", exp:"Italia ganó en Francia 1938." },
    { q:"¿Quién fue goleador en 1974?", a:"Grzegorz Lato", options:["Johan Cruyff","Grzegorz Lato","Gerd Müller"], hintText:"Leyenda del fútbol polaco.", exp:"Lato anotó 7 goles en 1974." },
    { q:"¿Quién ganó el Mundial 1990?", a:"Alemania Occidental", options:["Alemania Occidental","Argentina","Italia"], hintText:"Venció a la Argentina de Maradona con un penal.", exp:"Alemania ganó 1-0 a Argentina en 1990." },
    { q:"¿Qué país ganó el Mundial 1966?", a:"Inglaterra", options:["Inglaterra","Alemania","Brasil"], hintText:"Ganaron su único título en el estadio de Wembley.", exp:"Inglaterra ganó 4-2 a Alemania en 1966." }
  ],
  [ // Nivel 5: Final
    { q:"¿Quién marcó el gol más rápido en un Mundial?", a:"Hakan Şükür", options:["Hakan Şükür","Pelé","Klose"], hintText:"Fue un jugador turco en el Mundial de 2002.", exp:"Hakan Şükür marcó a los 11 segundos." },
    { q:"¿Qué país organizó el Mundial 2006?", a:"Alemania", options:["Alemania","Japón","Sudáfrica"], hintText:"'Un cuento de verano' en el corazón de Europa.", exp:"Alemania fue anfitrión en 2006." },
    { q:"¿Quién ganó el Mundial 1982?", a:"Italia", options:["Italia","Alemania","Francia"], hintText:"La selección de Paolo Rossi en España 82.", exp:"Italia venció a Alemania 3-1." },
    { q:"¿Quién ganó el Mundial 1994?", a:"Brasil", options:["Brasil","Italia","Suecia"], hintText:"Romário y Bebeto fueron sus estrellas.", exp:"Brasil ganó en penales a Italia." },
    { q:"¿Cuál fue el máximo goleador de 2006?", a:"Miroslav Klose", options:["Ronaldo","Miroslav Klose","Thierry Henry"], hintText:"Alemán, máximo goleador histórico de los mundiales.", exp:"Klose marcó 5 goles en 2006." }
  ]
];

/* ===========================================================
   2. CONFIGURACIÓN DE AUDIOS
   =========================================================== */
const audioMenu = document.getElementById('musica-fondo');
const audioEstadio = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/gente.mp3");
audioEstadio.loop = true;

const audioTiro = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/tiro.mp3");
const audioFallo = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/fallo.mp3");
const audioGol = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Gool.mp3");

// Desbloqueo automático al primer clic
window.addEventListener('click', () => {
    if (audioMenu.paused && document.querySelector('.menu').style.display !== 'none') {
        audioMenu.play().catch(e => console.log("Audio bloqueado"));
    }
}, { once: true });

/* ===========================================================
   3. ELEMENTOS DEL DOM
   =========================================================== */
const ball = document.getElementById('ball');
const keeper = document.getElementById('keeper');
const qContainer = document.getElementById('question-container');

/* ===========================================================
   4. NAVEGACIÓN Y MENÚS
   =========================================================== */
document.querySelector('.btn-jugar').onclick = () => {
    const startBall = document.createElement("div");
    startBall.id = "start-ball";
    document.body.appendChild(startBall);

    setTimeout(() => startBall.classList.add("shoot"), 60);

    // Ajuste de Audios al iniciar
    audioMenu.pause();
    audioMenu.currentTime = 0;
    audioEstadio.play().catch(() => {});

    setTimeout(() => {
        document.querySelector('.menu').style.display = 'none';
        document.getElementById('game-ui').style.display = 'block';
        qContainer.style.display = 'block';
        ball.style.display = 'block';
        keeper.style.display = 'block';
        
        iniciarJuego();
        setTimeout(() => startBall.remove(), 1000);
    }, 600); 
};

// Modales
document.getElementById('btn-info').onclick = () => document.getElementById('modal-instrucciones').classList.add('active');
document.getElementById('btn-open-creditos').onclick = () => {
    document.getElementById('modal-instrucciones').classList.remove('active');
    document.getElementById('modal-creditos').classList.add('active');
};
document.getElementById('btn-regresar-info').onclick = () => {
    document.getElementById('modal-creditos').classList.remove('active');
    document.getElementById('modal-instrucciones').classList.add('active');
};
document.querySelectorAll('.btn-back-main').forEach(btn => {
    btn.onclick = () => {
        document.getElementById('modal-instrucciones').classList.remove('active');
        document.getElementById('modal-creditos').classList.remove('active');
    };
});

// Control de Volumen Global
let mute = false;
document.getElementById('btn-volumen').onclick = (e) => {
    mute = !mute;
    const allAudios = [audioMenu, audioEstadio, audioTiro, audioFallo, audioGol];
    allAudios.forEach(a => a.muted = mute);
    
    e.target.src = mute 
        ? "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/boton_mute.png"
        : "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/boton_vol.png";
};

/* ===========================================================
   5. LÓGICA DEL JUEGO
   =========================================================== */
function iniciarJuego() {
    nivel = 1; goles = 0; vidas = 3; 
    cargarNivel();
}

function cargarNivel() {
    if (nivel > bancoPreguntas.length) {
        mostrarFinJuego("🏆 ¡ERES CAMPEÓN MUNDIAL!", true);
        return;
    }
    preguntasRestantes = [...bancoPreguntas[nivel - 1]].sort(() => Math.random() - 0.5);
    tirosRonda = 0;
    actualizarMarcador();
    nuevaPregunta();
}

function nuevaPregunta() {
    if (vidas <= 0) return;

    preguntaActual = preguntasRestantes.pop();
    document.getElementById('question').textContent = preguntaActual.q;
    
    const hintTextEl = document.getElementById('hint-text');
    hintTextEl.style.display = 'none';
    hintTextEl.textContent = preguntaActual.hintText;

    document.getElementById('btn-pista').onclick = () => {
        hintTextEl.style.display = 'block';
    };

    const botones = document.querySelectorAll('.option');
    const opciones = [...preguntaActual.options].sort(() => Math.random() - 0.5);
    
    opciones.forEach((opt, i) => {
        botones[i].textContent = opt;
        botones[i].onclick = () => procesarRespuesta(opt === preguntaActual.a, i);
    });
    
    bloqueado = false;
    qContainer.style.opacity = "1";
    qContainer.style.pointerEvents = "auto";
}

function procesarRespuesta(esCorrecto, i) {
    if (bloqueado) return;
    bloqueado = true;
    tirosRonda++;

    audioTiro.currentTime = 0;
    audioTiro.play();

    qContainer.style.opacity = "0";
    qContainer.style.pointerEvents = "none";

    const offset = [ -160, 0, 160 ];
    const destinoX = offset[i];
    
    ball.style.transition = "transform 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
    ball.style.transform = `translate(calc(-50% + ${destinoX}px), -380px) scale(0.4) rotate(720deg)`;

    const velocidadPortero = 0.5 - (nivel * 0.05); 
    let porteroX = esCorrecto ? (destinoX === 0 ? 120 : -120) : destinoX;
    keeper.style.transition = `transform ${velocidadPortero}s ease-out`;
    keeper.style.transform = `translateX(calc(-50% + ${porteroX}px)) rotate(${porteroX / 5}deg)`;

    setTimeout(() => finalizarTiro(esCorrecto), 850);
}

function finalizarTiro(esCorrecto) {
    const modalExp = document.getElementById('explanation');
    const txtExp = document.getElementById('explanation-text');
    const btnCont = document.getElementById('continueBtn');
    btnCont.style.display = "inline-block";

    if (esCorrecto) {
        goles++;
        audioGol.play();
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        txtExp.innerHTML = `<h2 style="color:#1c5d2b">¡GOOOOL!</h2><br>${preguntaActual.exp}`;
    } else {
        vidas--;
        audioFallo.play();
        txtExp.innerHTML = `<h2 style="color:#d32f2f">¡ATAJADA!</h2><br>${preguntaActual.exp}`;
    }

    actualizarMarcador();
    modalExp.style.display = "flex";
    modalExp.classList.add('active');

    btnCont.onclick = () => {
        modalExp.style.display = "none";
        modalExp.classList.remove('active');
        
        if (vidas <= 0) {
            mostrarFinJuego("SIN VIDAS - GAME OVER", false);
        } else {
            resetEscena();
            if (preguntasRestantes.length === 0) {
                nivel++;
                cargarNivel();
            } else {
                nuevaPregunta();
            }
        }
    };
}

function mostrarFinJuego(titulo, victoria) {
    const modalExp = document.getElementById('explanation');
    const txtExp = document.getElementById('explanation-text');
    const btnCont = document.getElementById('continueBtn');

    txtExp.innerHTML = `
        <h2 style="color:${victoria ? '#1c5d2b' : '#d32f2f'}">${titulo}</h2>
        <p style="margin: 15px 0;">Goles anotados: ${goles}</p>
        <div style="display:flex; gap:10px; justify-content:center; margin-top:20px;">
            <button onclick="location.reload()" style="padding:10px 20px; background:#1c5d2b; color:white; border:none; border-radius:10px; cursor:pointer; font-weight:bold;">Reintentar</button>
            <button onclick="window.location.href='https://www.milenio.com'" style="padding:10px 20px; background:#333; color:white; border:none; border-radius:10px; cursor:pointer; font-weight:bold;">Salir</button>
        </div>
    `;
    btnCont.style.display = "none";
    modalExp.style.display = "flex";
    modalExp.classList.add('active');
}

function actualizarMarcador() {
    document.getElementById('nivel-val').textContent = nivel;
    document.getElementById('goles-val').textContent = goles;

    const tirosCont = document.getElementById('tiros-icons');
    tirosCont.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const img = document.createElement('img');
        img.src = "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/balon.png";
        img.className = "icon-mini-ball";
        if (i < tirosRonda) img.style.opacity = "0.3";
        tirosCont.appendChild(img);
    }

    const vidasCont = document.getElementById('vidas-icons');
    vidasCont.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const img = document.createElement('img');
        img.src = "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/vida.png";
        img.className = "icon-mini-vida";
        if (i >= vidas) img.style.filter = "grayscale(1) opacity(0.3)";
        vidasCont.appendChild(img);
    }
}

function resetEscena() {
    ball.style.transition = "none";
    ball.style.transform = "translateX(-50%) scale(1) rotate(0deg)";
    keeper.style.transition = "none";
    keeper.style.transform = "translateX(-50%) rotate(0deg)";
}
window.addEventListener('DOMContentLoaded', () => {
    const musica = document.getElementById('musica-fondo');

    // Intentar reproducir automáticamente (puede fallar por políticas del navegador)
    const playPromise = musica.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Autoplay bloqueado. Esperando interacción del usuario.");
            
            // Si el autoplay falla, se reproduce al primer clic en cualquier parte del documento
            const reproducirAlInteractuar = () => {
                musica.play();
                // Eliminamos el evento para que no se ejecute cada vez que haga clic
                document.removeEventListener('click', reproducirAlInteractuar);
                document.removeEventListener('touchstart', reproducirAlInteractuar);
            };

            document.addEventListener('click', reproducirAlInteractuar);
            document.addEventListener('touchstart', reproducirAlInteractuar);
        });
    }
});