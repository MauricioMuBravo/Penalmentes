

/* ===========================================================
   1. BANCO DE PREGUNTAS (NIVELES 1 AL 5)
   =========================================================== */
const bancoPreguntas = [
  [ // Nivel 1: Fase de Grupos
    { q:"¿Quién ganó el Mundial 2018?", a:"Francia", options:["Francia","Croacia","Brasil"], hintText:"Mira los detalles de la final de Rusia 2018 aquí.", exp:"Francia ganó 4-2 a Croacia en la final.", link: "https://www.milenio.com/deportes/futbol/francia-campeon-del-mundial-rusia-2018" },
    { q:"¿Qué país tiene más Mundiales?", a:"Brasil", options:["Argentina","Brasil","Italia"], hintText:"Conoce la historia del 'Scratch du Oro'.", exp:"Brasil tiene 5 títulos mundiales.", link: "https://www.milenio.com/deportes/futbol/mundial-qatar-2022-que-pais-ha-ganado-mas-copas-del-mundo" },
    { q:"¿Quién ganó el Mundial 2010?", a:"España", options:["España","Países Bajos","Alemania"], hintText:"Recordemos el gol de Iniesta en Sudáfrica.", exp:"España ganó 1-0 con gol de Iniesta.", link: "https://www.milenio.com/deportes/futbol/espana-campeon-del-mundo-en-sudafrica-2010" },
    { q:"¿Quién fue campeón del Mundial 2006?", a:"Italia", options:["Italia","Francia","Alemania"], hintText:"La final del famoso cabezazo de Zidane.", exp:"Italia ganó 5-3 en penales a Francia.", link: "https://www.milenio.com/deportes/boxeo/mundial-2006-cuando-italia-se-corono-en-alemania" },
    { q:"¿Qué país ganó el primer Mundial (1930)?", a:"Uruguay", options:["Uruguay","Argentina","Italia"], hintText:"El inicio de la historia de las Copas del Mundo.", exp:"Uruguay fue el primer campeón en 1930.", link: "https://www.milenio.com/deportes/futbol/mundial-1930-historia-primer-campeonato-mundo" }
  ],
  [ // Nivel 2: 8vos de Final
    { q:"¿Qué país ganó el Mundial 1998?", a:"Francia", options:["Brasil","Francia","Croacia"], hintText:"Zidane brilló en su propia casa.", exp:"Francia ganó 3-0 a Brasil en la final.", link: "https://www.milenio.com/deportes/futbol/francia-1998-el-primer-titulo-de-les-bleus" },
    { q:"¿Quién ganó más Balones de Oro hasta 2022?", a:"Lionel Messi", options:["Cristiano Ronaldo","Lionel Messi","Ronaldinho"], hintText:"El astro argentino y su colección de trofeos.", exp:"Messi tiene 7 Balones de Oro (al cierre de 2022).", link: "https://www.milenio.com/deportes/futbol/lionel-messi-cuantos-balones-de-oro-tiene-el-argentino" },
    { q:"¿Qué país ganó el Mundial 1994?", a:"Brasil", options:["Italia","Brasil","Suecia"], hintText:"Una final decidida por el penal fallado de Baggio.", exp:"Brasil venció a Italia en penales.", link: "https://www.milenio.com/deportes/futbol/brasil-campeon-usa-1994-el-tetracampeonato" },
    { q:"¿Quién fue el goleador del Mundial 2002?", a:"Ronaldo", options:["Ronaldo","Miroslav Klose","Rivaldo"], hintText:"El 'Fenómeno' y su redención en Corea-Japón.", exp:"Ronaldo marcó 8 goles en 2002.", link: "https://www.milenio.com/deportes/futbol/ronaldo-nazario-el-goleador-de-corea-japon-2002" },
    { q:"¿Dónde se celebró el Mundial 2014?", a:"Brasil", options:["Brasil","Alemania","Argentina"], hintText:"El mundial del famoso 7-1 de Alemania.", exp:"Brasil fue el anfitrión en 2014.", link: "https://www.milenio.com/deportes/futbol/brasil-2014-el-mundial-que-paralizo-al-mundo" }
  ],
  [ // Nivel 3: 4tos de Final
    { q:"¿Qué selección ganó el Mundial 1978?", a:"Argentina", options:["Argentina","Holanda","Alemania"], hintText:"El primer título de la Albiceleste.", exp:"Argentina ganó 3-1 a Holanda en tiempo extra.", link: "https://www.milenio.com/deportes/futbol/argentina-1978-el-mundial-de-la-polemica" },
    { q:"¿Quién fue el máximo goleador de 1986?", a:"Gary Lineker", options:["Diego Maradona","Gary Lineker","Careca"], hintText:"El inglés que superó a los astros en México.", exp:"Lineker marcó 6 goles en 1986.", link: "https://www.milenio.com/deportes/futbol/mexico-1986-el-mundial-de-maradona" },
    { q:"¿Cuál fue la final del Mundial 2006?", a:"Italia vs Francia", options:["Italia vs Francia","Brasil vs Alemania","España vs Holanda"], hintText:"Un duelo europeo épico en Berlín.", exp:"Italia ganó 5-3 en penales.", link: "https://www.milenio.com/deportes/futbol/mundial-2006-la-final-entre-italia-y-francia" },
    { q:"¿Qué país ganó el Mundial 1934?", a:"Italia", options:["Italia","Checoslovaquia","Alemania"], hintText:"El primer mundial ganado por una selección europea.", exp:"Italia ganó su primer título en casa.", link: "https://www.milenio.com/deportes/futbol/italia-1934-el-segundo-mundial-de-la-historia" },
    { q:"¿Quién marcó el gol de la final 2010?", a:"Andrés Iniesta", options:["David Villa","Andrés Iniesta","Xavi Hernández"], hintText:"El gol más importante de la historia de España.", exp:"Iniesta marcó el gol del título en el minuto 116.", link: "https://www.milenio.com/deportes/futbol/el-gol-de-iniesta-en-sudafrica-2010" }
  ],
  [ // Nivel 4: Semifinal
    { q:"¿Cuál fue el primer Mundial televisado?", a:"1954", options:["1950","1954","1962"], hintText:"El mundial de Suiza cambió la forma de ver fútbol.", exp:"1954 fue el primero con retransmisión televisiva.", link: "https://www.milenio.com/deportes/futbol/suiza-1954-el-mundial-que-llego-a-la-tv" },
    { q:"¿Qué país ganó el Mundial 1938?", a:"Italia", options:["Italia","Hungría","Brasil"], hintText:"El bicampeonato italiano antes de la pausa por la guerra.", exp:"Italia ganó en Francia 1938.", link: "https://www.milenio.com/deportes/futbol/francia-1938-el-bicampeonato-de-italia" },
    { q:"¿Quién fue goleador en 1974?", a:"Grzegorz Lato", options:["Johan Cruyff","Grzegorz Lato","Gerd Müller"], hintText:"El polaco que sorprendió al mundo en Alemania.", exp:"Lato anotó 7 goles en 1974.", link: "https://www.milenio.com/deportes/futbol/alemania-1974-el-mundial-del-futbol-total" },
    { q:"¿Quién ganó el Mundial 1990?", a:"Alemania Occidental", options:["Alemania Occidental","Argentina","Italia"], hintText:"La revancha de Alemania frente a la Argentina de Maradona.", exp:"Alemania ganó 1-0 a Argentina.", link: "https://www.milenio.com/deportes/futbol/italia-1990-el-tercer-titulo-de-alemania" },
    { q:"¿Qué país ganó el Mundial 1966?", a:"Inglaterra", options:["Inglaterra","Alemania","Brasil"], hintText:"El único título de los inventores del fútbol.", exp:"Inglaterra ganó 4-2 a Alemania en casa.", link: "https://www.milenio.com/deportes/futbol/inglaterra-1966-el-mundial-del-gol-fantasma" }
  ],
  [ // Nivel 5: Final
    { q:"¿Quién marcó el gol más rápido en un Mundial?", a:"Hakan Şükür", options:["Hakan Şükür","Pelé","Klose"], hintText:"Ocurrió apenas sonó el silbatazo inicial en 2002.", exp:"Marcó a los 11 segundos contra Corea del Sur.", link: "https://www.milenio.com/deportes/futbol/corea-japon-2002-el-mundial-de-las-sorpresas" },
    { q:"¿Qué país organizó el Mundial 2006?", a:"Alemania", options:["Alemania","Japón","Sudáfrica"], hintText:"Un torneo recordado por su gran organización y estadios.", exp:"Alemania fue el anfitrión en 2006.", link: "https://www.milenio.com/deportes/futbol/alemania-2006-el-mundial-de-la-despedida-de-zidane" },
    { q:"¿Quién ganó el Mundial 1982?", a:"Italia", options:["Italia","Alemania","Francia"], hintText:"España 82 y el renacer de la selección italiana.", exp:"Italia venció a Alemania 3-1 en la final.", link: "https://www.milenio.com/deportes/futbol/espana-1982-el-mundial-del-naranjito" },
    { q:"¿Quién ganó el Mundial 1994?", a:"Brasil", options:["Brasil","Italia","Suecia"], hintText:"El regreso del juego bonito a la cima.", exp:"Brasil ganó tras una final sin goles en tiempo regular.", link: "https://www.milenio.com/deportes/futbol/usa-1994-el-mundial-que-cambio-el-futbol" },
    { q:"¿Cuál fue el máximo goleador de 2006?", a:"Miroslav Klose", options:["Ronaldo","Miroslav Klose","Thierry Henry"], hintText:"El inicio de la leyenda del máximo goleador histórico.", exp:"Klose marcó 5 goles en ese torneo.", link: "https://www.milenio.com/deportes/futbol/miroslav-klose-el-maximo-goleador-de-los-mundiales" }
  ]
];
let countdown; // Aquí guardaremos el intervalo
let tiempoRestante = 15;
/* --- CONFIGURACIÓN DE PORTEROS POR NIVEL --- */
const porterosPorNivel = {
    1: { // Memo Ochoa
        normal: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/memoochoa.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/memoochoaalegre.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/memoochoaenojado.png"
    },
    2: { // Jorge Campos
        normal: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/campos.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/camposalegre.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/camposenojado.png"
    },
    3: { // Buffon
        normal: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/buffon.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/buffonalegre.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/buffonenojado.png"
    },
    4: { // Oliver
        normal: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/oliver.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/oliveralegre.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/oliverenojado.png"
    },
    5: {  // Yashin
        normal: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/Yashin.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/Yashin.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/Yashinenojado.png"
    }
};

// Estas variables deben ir FUERA del objeto porterosPorNivel
let KEEPER_NORMAL, KEEPER_ALEGRE, KEEPER_ENOJADO;
/* ===========================================================
   2. CONFIGURACIÓN DE AUDIOS
   =========================================================== */
let mute = false;
const audioMenu = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Intro.mp3");
const audioEstadio = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/gente.mp3");
const audioTiro = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/tiro.mp3");
const audioFallo = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/fallo.mp3");
const audioGol = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Gool.mp3");
const audioSilbato = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/silbato.mp3");

audioMenu.loop = true; audioEstadio.loop = true;

/* ===========================================================
   3. VARIABLES DE JUEGO
   =========================================================== */
let nivel = 1, goles = 0, vidas = 3, bloqueado = false;
let preguntaActual = null, preguntasRestantes = [], tiroRealizado = false;

/* ===========================================================
   4. EFECTOS ESPECIALES
   =========================================================== */
function lanzarCelebracionGol() {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 3000 };
    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: 0.2, y: 0.6 } });
        confetti({ ...defaults, particleCount, origin: { x: 0.8, y: 0.6 } });
    }, 250);
}

function lanzarFuegosArtificiales() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        confetti({ particleCount: 80, startVelocity: 40, spread: 90, origin: { x: Math.random(), y: Math.random() - 0.2 }, zIndex: 3000 });
    }, 400);
}

/* ===========================================================
    5. LÓGICA DE INICIO Y MODALES
   =========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const ball = document.getElementById('ball');
    const keeper = document.getElementById('keeper');
    const qContainer = document.getElementById('question-container');
    const hintTextEl = document.getElementById('hint-text');

   const activarAudiosGlobal = () => {
        // 1. Intentamos arrancar el audio del menú
        if (audioMenu.paused && !mute) {
            audioMenu.play()
                .then(() => console.log("Audio Menú: ON"))
                .catch(e => console.log("Audio esperando interacción clara..."));
        }

        // 2. "DESBLOQUEO": Reproducimos y pausamos rápidamente todos los audios.
        // Esto le dice al navegador que el usuario autoriza estos sonidos.
        [audioEstadio, audioTiro, audioFallo, audioGol, audioSilbato].forEach(aud => {
            aud.play().then(() => {
                aud.pause();
                aud.currentTime = 0;
            }).catch(() => {});
        });

        // 3. Limpiamos los eventos para que solo ocurra una vez
        ['click', 'touchstart', 'mousedown'].forEach(evt => 
            window.removeEventListener(evt, activarAudiosGlobal)
        );
    };

    // Escuchamos en toda la ventana el primer toque del usuario
    ['click', 'touchstart', 'mousedown'].forEach(evt => 
        window.addEventListener(evt, activarAudiosGlobal)
    );

    // Modales Info/Créditos
   const modInst = document.getElementById('modal-instrucciones');
const modCred = document.getElementById('modal-creditos');
const btnJugarPrincipal = document.querySelector('.btn-jugar');
const btnInfoPrincipal = document.getElementById('btn-info');

// 1. Al picar el botón de Información (el de la "i")
btnInfoPrincipal.onclick = () => { 
    modInst.classList.add('active'); 
    // DESAPARECEN los botones principales
    btnJugarPrincipal.classList.add('ocultar-temporal');
    btnInfoPrincipal.classList.add('ocultar-temporal');
};

// 2. Al picar el botón de Créditos dentro de info
document.getElementById('btn-open-creditos').onclick = () => { 
    modInst.classList.remove('active'); 
    modCred.classList.add('active'); 
};

// 3. Al picar Regresar a Info desde Créditos
document.getElementById('btn-regresar-info').onclick = () => { 
    modCred.classList.remove('active'); 
    modInst.classList.add('active'); 
};

// 4. AL DAR CLIC A LA FLECHA "ATRÁS" (IMPORTANTE)
document.querySelectorAll('.btn-back-main').forEach(btn => {
    btn.onclick = () => { 
        modInst.classList.remove('active'); 
        modCred.classList.remove('active'); 
        
        // REAPARECEN los botones principales al volver al menú raíz
        btnJugarPrincipal.classList.remove('ocultar-temporal');
        btnInfoPrincipal.classList.remove('ocultar-temporal');
    };
});

    document.getElementById('btn-volumen').onclick = (e) => {
        mute = !mute;
        [audioMenu, audioEstadio, audioTiro, audioFallo, audioGol, audioSilbato].forEach(a => a.muted = mute);
        e.target.src = mute ? "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/boton_mute.png" : "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/boton_vol.png";
    };

document.querySelector('.btn-jugar').onclick = () => {
    // 1. Buscamos el balón que ya está en el menú
    const elBalon = document.querySelector('.balon');
    
    // 2. Le agregamos la clase de la animación
    elBalon.classList.add('disparo-inicial');
    
    // 3. Ocultamos el resto del menú suavemente
    document.querySelector('.overlay').style.opacity = '0';
    document.querySelector('.titulo-container').style.opacity = '0';
    document.querySelector('.main-buttons-container').style.opacity = '0';
    
    // 4. Sonidos
    audioMenu.pause(); 
    if (!mute) audioEstadio.play().catch(() => {});
    
    // 5. Esperamos a que el balón termine de volar para cambiar de pantalla
    setTimeout(() => {
        document.querySelector('.menu').style.display = 'none';
        document.getElementById('game-ui').style.display = 'block';
        document.getElementById('question-container').style.display = 'block'; 
        document.getElementById('ball').style.display = 'block'; 
        document.getElementById('keeper').style.display = 'block';
        
        iniciarJuego(); 
    }, 700); // Duración de la animación
};
    function iniciarJuego() { nivel = 1; goles = 0; vidas = 3; cargarNivel(); }

    function cargarNivel() {
    if (nivel > 5) return mostrarFinJuego("🏆 ¡CAMPEÓN!", true);
    
    // Asignamos el portero según el nivel actual
    const p = porterosPorNivel[nivel];
    KEEPER_NORMAL = p.normal;
    KEEPER_ALEGRE = p.alegre;
    KEEPER_ENOJADO = p.enojado;
    
    // Actualizamos la imagen del portero en pantalla de inmediato
    const keeper = document.getElementById('keeper');
    keeper.src = KEEPER_NORMAL;

    preguntasRestantes = [...bancoPreguntas[nivel - 1]].sort(() => Math.random() - 0.5);
    actualizarMarcador(); 
    nuevaPregunta();
}

    function nuevaPregunta() {
       if (vidas <= 0) return;
        
        resetEscena();
        
        preguntaActual = preguntasRestantes.pop();
        document.getElementById('question').textContent = preguntaActual.q;
        hintTextEl.style.display = 'none';
        
        document.getElementById('btn-pista').onclick = () => {
            hintTextEl.style.display = 'block';
            hintTextEl.innerHTML = `<p style="margin-bottom:10px;">${preguntaActual.hintText}</p>
                <div style="display:flex; gap:10px; justify-content:center;">
                    <button id="p-link" style="padding:5px 10px; background:#1c5d2b; color:white; border:none; border-radius:8px; cursor:pointer; font-family:'Arial Black'; font-size:10px;">LEER MÁS</button>
                    <button id="p-back" style="padding:5px 10px; background:#cc0000; color:white; border:none; border-radius:8px; cursor:pointer; font-family:'Arial Black'; font-size:10px;">ATRÁS</button>
                </div>`;
            document.getElementById('p-link').onclick = () => window.open(preguntaActual.link, '_blank');
            document.getElementById('p-back').onclick = () => hintTextEl.style.display = 'none';
        };

      const botones = document.querySelectorAll('.option');
        const opciones = [...preguntaActual.options].sort(() => Math.random() - 0.5);
        opciones.forEach((opt, i) => { 
            botones[i].textContent = opt; 
            botones[i].onclick = () => procesarTiro(opt === preguntaActual.a, i); 
        });

        bloqueado = false; 
        tiroRealizado = false; // Reset de variable
        actualizarMarcador();  // <--- AGREGA ESTO AQUÍ para limpiar el gris al iniciar la pregunta
        qContainer.style.opacity = "1";
    iniciarCronometro(); // <--- AGREGAR AQUÍ
    }
    
    
    /* ===========================================================
      CRONOMETRO
       =========================================================== */
    function iniciarCronometro() {
    tiempoRestante = 15;
    const timerDisplay = document.getElementById('timer-val');
    const timerBox = document.getElementById('timer-box');
    
    timerDisplay.textContent = tiempoRestante;
    timerDisplay.style.color = "#ffeb3b"; // Reset a amarillo
    
    clearInterval(countdown);

    countdown = setInterval(() => {
        tiempoRestante--;
        timerDisplay.textContent = tiempoRestante;

        // Efecto visual de urgencia
        if (tiempoRestante <= 5) {
            timerDisplay.style.color = "#ff4444"; // Cambia a rojo
        }

        if (tiempoRestante <= 0) {
            clearInterval(countdown);
            // Si se acaba el tiempo, forzamos el tiro fallido
            procesarTiro(false, 1); 
        }
    }, 1000);
}

    /* ===========================================================
       6. LÓGICA DE TIRO Y ANIMACIÓN (CON MEMO OCHOA)
       =========================================================== */
 function procesarTiro(esCorrecto, i) {
    if (bloqueado) return;
    bloqueado = true;

    clearInterval(countdown); // <--- AGREGAR AQUÍ: Detiene el reloj al responder

    audioEstadio.pause();
    audioSilbato.currentTime = 0; 
    audioSilbato.play();
    
    qContainer.style.opacity = "0";
    setTimeout(() => ejecutarAnimacionTiro(esCorrecto, i), 600);
}

  function ejecutarAnimacionTiro(esCorrecto, i) {
    tiroRealizado = true; 
    actualizarMarcador();
    
    audioTiro.currentTime = 0; 
    audioTiro.play();

    const offset = [-160, 0, 160];
    let destinoX = offset[i];
    let finalBallX = destinoX;
    let finalBallY = -310;

    if (!esCorrecto) {
        if (destinoX === 0) { 
            finalBallY = -240;
            finalBallX = (Math.random() - 0.5) * 40; 
        } else { 
            finalBallX = destinoX * 1.2; 
        }
    }

    // EL TIRO: El balón sale
    ball.style.transition = "transform 0.5s ease-in";
    ball.style.transform = `translate(calc(-50% + ${finalBallX}px), ${finalBallY}px) rotate(720deg)`;

    // EL PORTERO SE LANZA Y SE QUEDA AHÍ
    keeper.style.transition = "transform 0.4s ease-out";
    if (esCorrecto) {
        let porteroX = (destinoX === 0 ? 120 : -destinoX * 0.5);
        keeper.style.transform = `translateX(calc(-50% + ${porteroX}px)) rotate(${destinoX === 0 ? 20 : -destinoX/5}deg)`;
    } else {
        // Se estira hacia el balón y ahí se mantiene
        keeper.style.transform = `translateX(calc(-50% + ${destinoX}px)) rotate(${destinoX > 0 ? 30 : -30}deg)`;
    }

    // Esperamos un momento para que el usuario vea el resultado antes de mostrar el modal
    setTimeout(() => {
        finalizarAccion(esCorrecto);
    }, 900); // 800ms permite ver el balón llegar y al portero estirado
}

function finalizarAccion(esCorrecto) {
    const modalExp = document.getElementById('explanation');
    const txtExp = document.getElementById('explanation-text');
    txtExp.innerHTML = "";

    // 1. ELIMINAMOS EL BALÓN DE LA VISTA
    // Esto evita que se vea el balón "encimado" cuando el portero vuelve al centro
    ball.style.display = 'none'; 

    // 2. El portero vuelve al centro suavemente
    keeper.style.transition = "transform 0.7s ease-in-out";
    keeper.style.transform = "translateX(-50%) rotate(0deg)"; 
    
    if (esCorrecto) {
        goles++; 
        audioGol.play(); 
        lanzarCelebracionGol();
        keeper.src = KEEPER_ENOJADO; // El portero se enoja en el centro
        txtExp.innerHTML = `<h2 style="color:#1c5d2b">¡GOOOL!</h2>`;
    } else {
        vidas--; 
        audioFallo.play();
        keeper.src = KEEPER_ALEGRE; // El portero celebra la atajada
        txtExp.innerHTML = `<h2 style="color:#d32f2f">¡ATAJADA!</h2>`;
    }

    // --- Lógica de contenido del modal ---
    audioEstadio.play().catch(() => {});
    txtExp.innerHTML += `<p style="margin:15px 0; line-height:1.4;">${preguntaActual.exp}</p>`;

    const btnCont = document.createElement('div');
    btnCont.style.cssText = "display:flex; gap:10px; justify-content:center; margin-top:15px;";
    btnCont.innerHTML = `
        <button id="btn-milenio-din" style="padding:10px 15px; background:#1c5d2b; color:white; border:none; border-radius:8px; cursor:pointer; font-family:'Arial Black'; font-size:11px;">LEER MÁS</button>
        <button id="btn-next-din" style="padding:10px 15px; background:#333; color:white; border:none; border-radius:8px; cursor:pointer; font-family:'Arial Black'; font-size:11px;">SIGUIENTE</button>`;
    txtExp.appendChild(btnCont);

    document.getElementById('btn-milenio-din').onclick = () => window.open(preguntaActual.link, '_blank');
    
    document.getElementById('btn-next-din').onclick = () => {
        modalExp.classList.remove('active');
        
        // IMPORTANTE: Aquí restauramos el balón para la siguiente ronda
        ball.style.display = "block"; 
        ball.style.transition = "none";
        ball.style.transform = "translateX(-50%)";
        
        keeper.src = KEEPER_NORMAL;
        
        if (vidas <= 0) {
            mostrarFinJuego("GAME OVER", false);
        } else if (preguntasRestantes.length === 0) {
            nivel++;
            nivel <= 5 ? mostrarAnuncioNivel() : mostrarFinJuego("🏆 ¡CAMPEÓN DEL MUNDO!", true);
        } else {
            nuevaPregunta();
        }
    };

    actualizarMarcador();
    modalExp.classList.add('active');
}

    function mostrarAnuncioNivel() {
        const modalExp = document.getElementById('explanation');
        const txtExp = document.getElementById('explanation-text');
        let rondas = ["", "Fase de Grupos", "Octavos de Final", "Cuartos de Final", "Semifinal", "la Gran Final"];
        
        txtExp.innerHTML = `
            <h2 style="color:#1c5d2b">¡AVANZAS!</h2>
            <p style="margin:20px 0;">Felicidades, estás en <b>${rondas[nivel]}</b></p>
            <button id="btn-go-din" style="padding:12px 25px; background:#1c5d2b; color:white; border:none; border-radius:10px; cursor:pointer; font-family:'Arial Black'; width:100%;">¡VAMOS!</button>`;
        modalExp.classList.add('active');
        document.getElementById('btn-go-din').onclick = () => {
            modalExp.classList.remove('active');
            cargarNivel();
        };
    }

   function actualizarMarcador() {
    document.getElementById('nivel-val').textContent = nivel;
    document.getElementById('goles-val').textContent = goles;
    
    const tCont = document.getElementById('tiros-icons'); 
    tCont.innerHTML = '';
    
    // IMPORTANTE: 
    // Si quedan 4 preguntas en el banco y tiroRealizado es false, 
    // significa que estamos en el primer tiro (índice 0).
    let indiceBalonActual = 5 - (preguntasRestantes.length + 1);

    for (let i = 0; i < 5; i++) {
        const img = document.createElement('img'); 
        img.src = "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/balon.png";
        img.style.width = "14px"; 
        img.style.margin = "2px";
        
        // REGLA:
        // Se pone gris si:
        // 1. El índice es menor al que estamos jugando (tiros pasados)
        // 2. Es el índice actual Y ya se realizó el tiro.
        if (i < indiceBalonActual || (i === indiceBalonActual && tiroRealizado)) {
            img.style.filter = "grayscale(1) opacity(0.3)"; 
        }
        
        tCont.appendChild(img);
    }

    // --- SECCIÓN DE VIDAS ---
    const vCont = document.getElementById('vidas-icons'); 
    vCont.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const img = document.createElement('img'); 
        img.src = "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/vida.png";
        img.style.width = "16px"; 
        img.style.margin = "2px";
        if (i >= vidas) img.style.filter = "grayscale(1) opacity(0.3)";
        vCont.appendChild(img);
    }
}

    function resetEscena() {
        ball.style.display = 'block';
        ball.style.transition = "none"; 
        ball.style.transform = "translateX(-50%)";
        keeper.src = KEEPER_NORMAL;
        keeper.style.transition = "none"; 
        keeper.style.transform = "translateX(-50%) rotate(0deg)";
    }

    function mostrarFinJuego(msg, win) {
        if (win) lanzarFuegosArtificiales();
        document.getElementById('explanation-text').innerHTML = `
            <h2 style="color: #1c5d2b; margin-bottom: 10px;">${msg}</h2>
            <p style="margin-bottom: 20px;">Marcaste <strong>${goles}</strong> goles.</p>
            <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
                <button onclick="location.reload()" style="padding: 12px 25px; background: #1c5d2b; color: white; border:none; border-radius:10px; cursor:pointer; font-family: 'Arial Black'; width: 200px;">REINTENTAR</button>
                <button onclick="window.open('https://www.milenio.com/deportes', '_blank')" style="padding: 12px 25px; background: #cc0000; color: white; border:none; border-radius:10px; cursor:pointer; font-family: 'Arial Black'; width: 200px;">IR A SITIO WEB</button>
            </div>`;
        document.getElementById('explanation').classList.add('active');
    }

});