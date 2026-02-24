

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
let nivel = 1, goles = 0, tirosRonda = 0, vidas = 3, bloqueado = false;
let preguntaActual = null, preguntasRestantes = [], tiroRealizado = false;

/* ===========================================================
   4. EFECTOS ESPECIALES (CONFÉTI Y FUEGOS)
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

    window.addEventListener('click', () => audioMenu.play().catch(() => {}), { once: true });

    // Modales Info/Créditos
    const modInst = document.getElementById('modal-instrucciones');
    const modCred = document.getElementById('modal-creditos');
    document.getElementById('btn-info').onclick = () => modInst.classList.add('active');
    document.getElementById('btn-open-creditos').onclick = () => { modInst.classList.remove('active'); modCred.classList.add('active'); };
    document.querySelectorAll('.btn-back-main').forEach(btn => {
        btn.onclick = () => { modInst.classList.remove('active'); modCred.classList.remove('active'); };
    });

    document.getElementById('btn-volumen').onclick = (e) => {
        mute = !mute;
        [audioMenu, audioEstadio, audioTiro, audioFallo, audioGol, audioSilbato].forEach(a => a.muted = mute);
        e.target.src = mute ? "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/boton_mute.png" : "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/boton_vol.png";
    };

    document.querySelector('.btn-jugar').onclick = () => {
        const startBall = document.createElement("div");
        startBall.id = "start-ball"; document.body.appendChild(startBall);
        setTimeout(() => startBall.classList.add("shoot"), 50);
        audioMenu.pause(); audioEstadio.play().catch(() => {});
        document.querySelector('.logo-mundial-global').classList.add('oculto');
        setTimeout(() => {
            document.querySelector('.menu').style.display = 'none';
            document.getElementById('game-ui').style.display = 'block';
            qContainer.style.display = 'block'; ball.style.display = 'block'; keeper.style.display = 'block';
            iniciarJuego(); startBall.remove();
        }, 600);
    };

    function iniciarJuego() { nivel = 1; goles = 0; vidas = 3; cargarNivel(); }

    function cargarNivel() {
        if (nivel > 5) return mostrarFinJuego("🏆 ¡CAMPEÓN!", true);
        preguntasRestantes = [...bancoPreguntas[nivel - 1]].sort(() => Math.random() - 0.5);
        tirosRonda = 0; actualizarMarcador(); nuevaPregunta();
    }

    function nuevaPregunta() {
        if (vidas <= 0) return;
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
        opciones.forEach((opt, i) => { botones[i].textContent = opt; botones[i].onclick = () => procesarTiro(opt === preguntaActual.a, i); });
        bloqueado = false; tiroRealizado = false; qContainer.style.opacity = "1";
    }

    function procesarTiro(esCorrecto, i) {
        if (bloqueado) return;
        bloqueado = true;
        
        // --- EFECTO DE TENSIÓN: EL PÚBLICO SE QUEDA MUDO ---
        audioEstadio.pause(); 
        audioEstadio.currentTime = 0; // Opcional: para que al volver empiece de cero
        
        audioSilbato.currentTime = 0; 
        audioSilbato.play();
        
        // Ocultamos la pregunta
        document.getElementById('question-container').style.opacity = "0";

        // El pequeño delay del silbato antes de la animación
        setTimeout(() => {
            ejecutarAnimacionTiro(esCorrecto, i);
        }, 600);
    }

    function ejecutarAnimacionTiro(esCorrecto, i) {
        tiroRealizado = true;
        audioTiro.currentTime = 0; 
        audioTiro.play();

        const offset = [-160, 0, 160]; // Izquierda, Centro, Derecha
        let destinoX = offset[i];
        let finalBallX = destinoX;
        let finalBallY = -310;

        // Si falla, el balón hace una trayectoria distinta
        if (!esCorrecto) {
            if (destinoX === 0) { 
                finalBallY = -240; // Se estrella en el portero
                finalBallX = (Math.random() - 0.5) * 40; 
            } else { 
                finalBallX = destinoX * 1.5; // Se va fuera
                finalBallY = -360; 
            }
        }

        // Animación del Balón
        const ball = document.getElementById('ball');
        ball.style.transition = "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)";
        ball.style.transform = `translate(calc(-50% + ${finalBallX}px), ${finalBallY}px) rotate(720deg) scale(1)`;

        // Animación del Portero
        const keeper = document.getElementById('keeper');
        let porteroX = esCorrecto ? (destinoX === 0 ? 120 : -destinoX * 0.4) : destinoX;
        let rotacion = esCorrecto ? (destinoX === 0 ? 20 : -destinoX / 5) : (destinoX / 6);
        
        keeper.style.transition = "transform 0.35s ease-out";
        keeper.style.transform = `translateX(calc(-50% + ${porteroX}px)) rotate(${rotacion}deg)`;

        // Si falla, el balón rebota o sigue de largo
        if (!esCorrecto) {
            setTimeout(() => {
                ball.style.transition = "transform 0.5s ease-in";
                ball.style.transform = `translate(calc(-50% + ${finalBallX * 1.1}px), 0px) scale(0.8) rotate(850deg)`;
            }, 600);
        }

        // Llamamos al resultado final tras la animación
        setTimeout(() => {
            audioEstadio.volume = 1;
            finalizarAccion(esCorrecto);
        }, 1200);
    }

 function finalizarAccion(esCorrecto) {
    const modalExp = document.getElementById('explanation');
    const txtExp = document.getElementById('explanation-text');
    
    // Limpiamos el contenido previo para evitar duplicados
    txtExp.innerHTML = "";

    // 1. Título y Sonidos
    if (esCorrecto) {
        goles++; 
        audioGol.play(); 
        lanzarCelebracionGol();
        txtExp.innerHTML = `<h2 style="color:#1c5d2b; font-size: 2rem; margin-bottom:10px;">¡GOOOL!</h2>`;
    } else {
        vidas--; 
        audioFallo.play();
        txtExp.innerHTML = `<h2 style="color:#d32f2f; font-size: 2rem; margin-bottom:10px;">¡ATAJADA!</h2>`;
    }

    // 2. Texto de la explicación (Lo que se tenía anteriormente)
    txtExp.innerHTML += `<p style="margin:15px 0; font-family: sans-serif; line-height:1.4; color:#333;">${preguntaActual.exp}</p>`;

    // 3. Crear el contenedor de botones dinámicos
    const btnCont = document.createElement('div');
    btnCont.style.cssText = "display:flex; gap:10px; justify-content:center; margin-top:20px;";
    
    // Botón Leer Más
    const btnMilenio = document.createElement('button');
    btnMilenio.textContent = "LEER MÁS";
    btnMilenio.style.cssText = "padding:10px 20px; background:#1c5d2b; color:white; border:none; border-radius:8px; cursor:pointer; font-family:'Arial Black'; font-size:12px;";
    btnMilenio.onclick = () => window.open(preguntaActual.link, '_blank');

    // Botón Siguiente (El que reemplaza al de "Continuar")
    const btnNext = document.createElement('button');
    btnNext.textContent = "SIGUIENTE";
    btnNext.style.cssText = "padding:10px 20px; background:#333; color:white; border:none; border-radius:8px; cursor:pointer; font-family:'Arial Black'; font-size:12px;";
    
    btnNext.onclick = () => {
        modalExp.classList.remove('active');
        resetEscena();
        
        if (vidas <= 0) {
            return mostrarFinJuego("GAME OVER", false);
        }

        audioEstadio.play().catch(() => {});

        if (preguntasRestantes.length === 0) {
            nivel++;
            let rondas = ["", "Fase de Grupos", "Octavos de Final", "Cuartos de Final", "Semifinal", "la Gran Final"];
            
            if (nivel <= 5) {
                txtExp.innerHTML = `
                    <h2 style="color:#1c5d2b">¡AVANZAS!</h2>
                    <p style="margin:20px 0;">Felicidades, estás en <b>${rondas[nivel]}</b></p>
                    <button id="btn-go" style="padding:12px 25px; background:#1c5d2b; color:white; border:none; border-radius:10px; cursor:pointer; font-family:'Arial Black'; width:100%;">¡VAMOS!</button>`;
                modalExp.classList.add('active');
                document.getElementById('btn-go').onclick = () => {
                    modalExp.classList.remove('active');
                    cargarNivel();
                };
            } else {
                mostrarFinJuego("🏆 ¡CAMPEÓN DEL MUNDO!", true);
            }
        } else {
            nuevaPregunta();
            // Mostramos de nuevo el contenedor de preguntas
            document.getElementById('question-container').style.opacity = "1";
        }
    };

    btnCont.appendChild(btnMilenio);
    btnCont.appendChild(btnNext);
    txtExp.appendChild(btnCont);

    // 4. Actualizar marcador y mostrar modal
    actualizarMarcador();
    modalExp.classList.add('active');
}

    function actualizarMarcador() {
        document.getElementById('nivel-val').textContent = nivel;
        document.getElementById('goles-val').textContent = goles;
        const tCont = document.getElementById('tiros-icons'); tCont.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const img = document.createElement('img'); img.src = "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/balon.png";
            img.style.width = "14px"; img.style.margin = "2px";
            if (i < (5 - (preguntasRestantes.length + (tiroRealizado ? 0 : 1)))) img.style.opacity = "0.3";
            tCont.appendChild(img);
        }
        const vCont = document.getElementById('vidas-icons'); vCont.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const img = document.createElement('img'); img.src = "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/vida.png";
            img.style.width = "16px"; img.style.margin = "2px";
            if (i >= vidas) img.style.filter = "grayscale(1) opacity(0.3)";
            vCont.appendChild(img);
        }
    }

    function resetEscena() {
        ball.style.transition = "none"; ball.style.transform = "translateX(-50%)";
        keeper.style.transition = "none"; keeper.style.transform = "translateX(-50%) rotate(0deg)";
    }

    function mostrarFinJuego(msg, win) {
        if (win) lanzarFuegosArtificiales();
        document.getElementById('explanation-text').innerHTML = `<h2 style="color: #1c5d2b; margin-bottom: 10px;">${msg}</h2>
            <p style="margin-bottom: 20px;">Marcaste <strong>${goles}</strong> goles.</p>
            <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
                <button onclick="location.reload()" style="padding: 12px 25px; background: #1c5d2b; color: white; border:none; border-radius:10px; cursor:pointer; font-family: 'Arial Black'; width: 200px;">REINTENTAR</button>
                <button onclick="window.open('https://www.milenio.com/deportes', '_blank')" style="padding: 12px 25px; background: #cc0000; color: white; border:none; border-radius:10px; cursor:pointer; font-family: 'Arial Black'; width: 200px;">SALIR</button>
            </div>`;
        document.getElementById('explanation').classList.add('active');
    }
});