
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
audioMenu.loop = true;

const audioEstadio = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/gente.mp3");
audioEstadio.loop = true;

const audioTiro = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/tiro.mp3");
const audioFallo = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/fallo.mp3");
const audioGol = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Gool.mp3");
const audioSilbato = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/silbato.mp3");

/* ===========================================================
   3. VARIABLES DE JUEGO
   =========================================================== */
let nivel = 1, goles = 0, tirosRonda = 0, vidas = 3, bloqueado = false;
let preguntaActual = null, preguntasRestantes = [];
let tiroRealizado = false;

/* ===========================================================
   4. INICIALIZACIÓN (DOMContentLoaded)
   =========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    
    const ball = document.getElementById('ball');
    const keeper = document.getElementById('keeper');
    const qContainer = document.getElementById('question-container');
    const hintTextEl = document.getElementById('hint-text');

    // Activar audio intro al primer clic
    document.body.addEventListener('click', () => {
        if(audioMenu.paused && document.querySelector('.menu').style.display !== 'none') {
            audioMenu.play().catch(() => {});
        }
    }, {once: true});

    // --- MANEJO DE MODALES ---
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

    // --- BOTÓN JUGAR ---
   document.querySelector('.btn-jugar').onclick = () => {
        const startBall = document.createElement("div");
        startBall.id = "start-ball";
        document.body.appendChild(startBall);
        setTimeout(() => startBall.classList.add("shoot"), 50);
        
        audioMenu.pause();
        audioEstadio.play().catch(() => {});
        // Esto busca el logo verde y le pone la clase para ocultarlo
        document.querySelector('.logo-mundial-global').classList.add('oculto');

        setTimeout(() => {
            document.querySelector('.menu').style.display = 'none';
            document.getElementById('game-ui').style.display = 'block';
            qContainer.style.display = 'block';
            ball.style.display = 'block';
            keeper.style.display = 'block';
            iniciarJuego();
            startBall.remove();
        }, 600);
    };

    // Volumen
    document.getElementById('btn-volumen').onclick = (e) => {
        mute = !mute;
        [audioMenu, audioEstadio, audioTiro, audioFallo, audioGol, audioSilbato].forEach(a => a.muted = mute);
        e.target.src = mute 
            ? "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/boton_mute.png"
            : "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/boton_vol.png";
    };

    function iniciarJuego() {
        nivel = 1; goles = 0; vidas = 3;
        cargarNivel();
    }

    function cargarNivel() {
        if (nivel > bancoPreguntas.length) {
            mostrarFinJuego("🏆 ¡CAMPEÓN MUNDIAL!", true);
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
        hintTextEl.style.display = 'none';

        // --- LÓGICA DE PISTA (Restaurada) ---
        document.getElementById('btn-pista').onclick = () => {
            hintTextEl.style.display = 'block';
            hintTextEl.innerHTML = `
                <p style="margin-bottom:10px;">${preguntaActual.hintText}</p>
                <div style="display:flex; gap:10px; justify-content:center;">
                    <button id="p-link" style="padding:5px 10px; background:#1c5d2b; color:white; border:none; border-radius:8px; cursor:pointer;">LEER</button>
                    <button id="p-back" style="padding:5px 10px; background:#cc0000; color:white; border:none; border-radius:8px; cursor:pointer;">ATRÁS</button>
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
        tiroRealizado = false;
        qContainer.style.opacity = "1";
        qContainer.style.pointerEvents = "auto";
    }

    function procesarTiro(esCorrecto, i) {
        if (bloqueado) return;
        bloqueado = true; 
        tirosRonda++;

        audioEstadio.pause();
        audioSilbato.currentTime = 0;
        audioSilbato.play();

        qContainer.style.opacity = "0";
        qContainer.style.pointerEvents = "none";

        audioSilbato.onended = () => {
            if (!tiroRealizado) ejecutarAnimacionTiro(esCorrecto, i);
        };
        setTimeout(() => {
            if (!tiroRealizado) ejecutarAnimacionTiro(esCorrecto, i);
        }, 1200);
    }

    function ejecutarAnimacionTiro(esCorrecto, i) {
        tiroRealizado = true;
        audioTiro.currentTime = 0;
        audioTiro.play();

        const offset = [-160, 0, 160];
        let destinoX = offset[i];

        ball.style.transition = "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)";
        ball.style.transform = `translate(calc(-50% + ${destinoX}px), -310px) rotate(720deg)`;

        let porteroX = esCorrecto ? (destinoX === 0 ? 120 : -destinoX) : destinoX;
        let rot = esCorrecto ? (destinoX < 0 ? -25 : (destinoX > 0 ? 25 : 0)) : (destinoX < 0 ? -25 : (destinoX > 0 ? 25 : 0));
        keeper.style.transition = "transform 0.4s ease-out";
        keeper.style.transform = `translateX(calc(-50% + ${porteroX}px)) rotate(${rot}deg)`;

        if (!esCorrecto) setTimeout(() => ball.style.zIndex = "10", 300);
        setTimeout(() => finalizarAccion(esCorrecto), 800);
    }

    function finalizarAccion(esCorrecto) {
        const modalExp = document.getElementById('explanation');
        const txtExp = document.getElementById('explanation-text');
        
        if (esCorrecto) {
            goles++; 
            audioGol.currentTime = 0;
            audioGol.play();
            if (window.confetti) confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
            txtExp.innerHTML = `<h2 style="color:#1c5d2b">¡GOOOL!</h2><p>${preguntaActual.exp}</p>`;
        } else {
            vidas--; 
            audioFallo.currentTime = 0;
            audioFallo.play();
            txtExp.innerHTML = `<h2 style="color:#d32f2f">¡ATAJADA!</h2><p>${preguntaActual.exp}</p>`;
        }

        actualizarMarcador();
        modalExp.style.display = "flex";
        modalExp.classList.add('active');

        document.getElementById('continueBtn').onclick = () => {
            modalExp.style.display = "none";
            modalExp.classList.remove('active');
            
            if (vidas <= 0) {
                mostrarFinJuego("GAME OVER", false);
            } else {
                audioEstadio.play().catch(() => {});
                resetEscena();
                if (preguntasRestantes.length === 0) { nivel++; cargarNivel(); }
                else nuevaPregunta();
            }
        };
    }

    function actualizarMarcador() {
        document.getElementById('nivel-val').textContent = nivel;
        document.getElementById('goles-val').textContent = goles;
        
        const tCont = document.getElementById('tiros-icons');
        tCont.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const img = document.createElement('img');
            img.src = "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/balon.png";
            img.className = "icon-mini-ball";
            if (i < tirosRonda) img.style.opacity = "0.3";
            tCont.appendChild(img);
        }

        const vCont = document.getElementById('vidas-icons');
        vCont.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const img = document.createElement('img');
            img.src = "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/vida.png";
            img.className = "icon-mini-vida";
            if (i >= vidas) img.style.filter = "grayscale(1) opacity(0.3)";
            vCont.appendChild(img);
        }
    }

    function resetEscena() {
        ball.style.transition = "none";
        ball.style.zIndex = "20";
        ball.style.transform = "translateX(-50%)";
        keeper.style.transition = "none";
        keeper.style.transform = "translateX(-50%) rotate(0deg)";
    }

    function mostrarFinJuego(msg, win) {
        document.getElementById('explanation-text').innerHTML = `
            <h2>${msg}</h2>
            <p>Marcaste ${goles} goles.</p>
            <button onclick="location.reload()" style="padding:10px 20px; background:#1c5d2b; color:white; border:none; border-radius:10px; cursor:pointer; margin-top:15px;">REINTENTAR</button>
        `;
        document.getElementById('continueBtn').style.display = "none";
        document.getElementById('explanation').style.display = "flex";
    }
});