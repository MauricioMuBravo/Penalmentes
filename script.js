// --- 1. CONFIGURACIÓN Y ASSETS ---
const audio = document.getElementById('bg-music');
const modalInfo = document.getElementById('modal-info');
const modalCreditos = document.getElementById('modal-creditos');
const btnJugar = document.getElementById('btn-jugar');

const iconInfoNormal = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/INFO.png";
const iconInfoActivo = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/INFONEG.png";
const iconCredNormal = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CRED.png";
const iconCredActivo = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CREDNEG.png";
const imgConVol = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CONVOL.png";
const imgSinVol = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/SINVOL.png";

// Audios
const audioIntro = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Intro.mp3");
const audioEstadio = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/gente1.mp3");
const audioTiro = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/tiro.mp3");
const audioFallo = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/fallo.mp3");
const audioGol = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Gool.mp3");
const audioSilbato = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/silbato.mp3");

audioIntro.loop = true;
audioEstadio.loop = true;

// SOLUCIÓN AUDIO AUTOMÁTICO: Escucha cualquier interacción inicial
const iniciarAudioIntro = () => {
    if (audioIntro.paused) {
        audioIntro.play().catch(e => console.log("Audio bloqueado por el navegador"));
    }
    // Removemos los listeners una vez que arranca
    window.removeEventListener('click', iniciarAudioIntro);
    window.removeEventListener('touchstart', iniciarAudioIntro);
    window.removeEventListener('keydown', iniciarAudioIntro);
};

window.addEventListener('click', iniciarAudioIntro);
window.addEventListener('touchstart', iniciarAudioIntro);
window.addEventListener('keydown', iniciarAudioIntro);

// --- 2. BANCO DE PREGUNTAS ---
const bancoPreguntas = [
  [ // Nivel 1: Fase de Grupos
    { q:"¿Quién ganó el Mundial 2018?", a:"Francia", options:["Francia","Croacia","Brasil"], hintText:"Mira los detalles de la final de Rusia 2018 aquí.", exp:"Francia ganó 4-2 a Croacia en la final.", link: "https://www.milenio.com/deportes/futbol/francia-campeon-del-mundial-rusia-2018" },
    { q:"¿Qué país tiene más Mundiales?", a:"Brasil", options:["Argentina","Brasil","Italia"], hintText:"Conoce la historia del 'Scratch du Oro'.", exp:"Brasil tiene 5 títulos mundiales.", link: "https://www.milenio.com/deportes/futbol/mundial-qatar-2022-que-pais-ha-ganado-mas-copas-del-mundo" },
    { q:"¿Quién ganó el Mundial 2010?", a:"España", options:["España","Países Bajos","Alemania"], hintText:"Recordemos el gol de Iniesta en Sudáfrica.", exp:"España ganó 1-0 con gol de Iniesta.", link: "https://www.milenio.com/deportes/futbol/espana-campeon-del-mundo-en-sudafrica-2010" },
    { q:"¿Quién fue campeón del Mundial 2006?", a:"Italia", options:["Italia","Francia","Alemania"], hintText:"La final del famoso cabezazo de Zidane.", exp:"Italia ganó 5-3 en penales a Francia.", link: "https://www.milenio.com/deportes/boxeo/mundial-2006-cuando-italia-se-corono-en-alemania" },
    { q:"¿Qué país ganó el primer Mundial (1930)?", a:"Uruguay", options:["Uruguay","Argentina","Italia"], hintText:"El inicio de la historia de las Copas del Mundo.", exp:"Uruguay fue el primer campeón en 1930.", link: "https://www.milenio.com/deportes/futbol/mundial-1930-historia-primer-campeonato-mundo" },
    { q:"¿En qué país se jugó el Mundial 2018?", a:"Rusia", options:["Rusia","Brasil","Qatar"], hintText:"El mundial donde Francia bordó su segunda estrella.", exp:"Rusia fue el anfitrión de la Copa del Mundo 2018.", link: "https://www.milenio.com/deportes/futbol/rusia-2018-el-mundial-que-conquisto-francia" },
    { q:"¿Qué selección ganó el Mundial de México 1970?", a:"Brasil", options:["Italia","Alemania","Brasil"], hintText:"La consagración definitiva de Pelé.", exp:"Brasil obtuvo el tricampeonato tras vencer 4-1 a Italia.", link: "https://www.milenio.com/deportes/futbol/mexico-1970-el-mundial-de-pele-y-el-futbol-arte" },
    { q:"¿Quién ganó el Mundial de Alemania 1974?", a:"Alemania Federal", options:["Países Bajos","Alemania Federal","Polonia"], hintText:"El torneo del famoso 'Fútbol Total' de Cruyff.", exp:"Alemania venció a la Naranja Mecánica 2-1 en la final.", link: "https://www.milenio.com/deportes/futbol/alemania-1974-el-mundial-del-futbol-total" }
  ],
  [ // Nivel 2: 8vos de Final
    { q:"¿Qué país ganó el Mundial 1998?", a:"Francia", options:["Brasil","Francia","Croacia"], hintText:"Zidane brilló en su propia casa.", exp:"Francia ganó 3-0 a Brasil en la final.", link: "https://www.milenio.com/deportes/futbol/francia-1998-el-primer-titulo-de-les-bleus" },
    { q:"¿Quién ganó más Balones de Oro hasta 2022?", a:"Lionel Messi", options:["Cristiano Ronaldo","Lionel Messi","Ronaldinho"], hintText:"El astro argentino y su colección de trofeos.", exp:"Messi tiene 7 Balones de Oro (al cierre de 2022).", link: "https://www.milenio.com/deportes/futbol/lionel-messi-cuantos-balones-de-oro-tiene-el-argentino" },
    { q:"¿Qué país ganó el Mundial 1994?", a:"Brasil", options:["Italia","Brasil","Suecia"], hintText:"Una final decidida por el penal fallado de Baggio.", exp:"Brasil venció a Italia en penales.", link: "https://www.milenio.com/deportes/futbol/brasil-campeon-usa-1994-el-tetracampeonato" },
    { q:"¿Quién fue el goleador del Mundial 2002?", a:"Ronaldo", options:["Ronaldo","Miroslav Klose","Rivaldo"], hintText:"El 'Fenómeno' y su redención en Corea-Japón.", exp:"Ronaldo marcó 8 goles en 2002.", link: "https://www.milenio.com/deportes/futbol/ronaldo-nazario-el-goleador-de-corea-japon-2002" },
    { q:"¿Dónde se celebró el Mundial 2014?", a:"Brasil", options:["Brasil","Alemania","Argentina"], hintText:"El mundial del famoso 7-1 de Alemania.", exp:"Brasil fue el anfitrión en 2014.", link: "https://www.milenio.com/deportes/futbol/brasil-2014-el-mundial-que-paralizo-al-mundo" },
    { q:"¿Quién fue el campeón en Chile 1962?", a:"Brasil", options:["Brasil","Checoslovaquia","Chile"], hintText:"Garrincha tomó el relevo de un Pelé lesionado.", exp:"Brasil logró el bicampeonato tras vencer 3-1 en la final.", link: "https://www.milenio.com/deportes/futbol/chile-1962-el-mundial-de-garrincha-y-el-bicampeonato" },
    { q:"¿Qué selección ganó el Mundial de Argentina 1978?", a:"Argentina", options:["Brasil","Argentina","Holanda"], hintText:"El primer título de la Albiceleste en casa.", exp:"Argentina derrotó 3-1 a Holanda en tiempo extra.", link: "https://www.milenio.com/deportes/futbol/argentina-1978-el-primer-titulo-de-la-albiceleste" },
    { q:"¿Quién ganó la Bota de Oro en Rusia 2018?", a:"Harry Kane", options:["Kylian Mbappé","Harry Kane","Cristiano Ronaldo"], hintText:"El delantero inglés que fue letal en Rusia.", exp:"Harry Kane terminó como goleador con 6 anotaciones.", link: "https://www.milenio.com/deportes/futbol/harry-kane-el-goleador-del-mundial-rusia-2018" }
  ],
  [ // Nivel 3: 4tos de Final
    { q:"¿Qué selección ganó el Mundial 1978?", a:"Argentina", options:["Argentina","Holanda","Alemania"], hintText:"El primer título de la Albiceleste.", exp:"Argentina ganó 3-1 a Holanda en tiempo extra.", link: "https://www.milenio.com/deportes/futbol/argentina-1978-el-mundial-de-la-polemica" },
    { q:"¿Quién fue el máximo goleador de 1986?", a:"Gary Lineker", options:["Diego Maradona","Gary Lineker","Careca"], hintText:"El inglés que superó a los astros en México.", exp:"Lineker marcó 6 goles en 1986.", link: "https://www.milenio.com/deportes/futbol/mexico-1986-el-mundial-de-maradona" },
    { q:"¿Cuál fue la final del Mundial 2006?", a:"Italia vs Francia", options:["Italia vs Francia","Brasil vs Alemania","España vs Holanda"], hintText:"Un duelo europeo épico en Berlín.", exp:"Italia ganó 5-3 en penales.", link: "https://www.milenio.com/deportes/futbol/mundial-2006-la-final-entre-italia-y-francia" },
    { q:"¿Qué país ganó el Mundial 1934?", a:"Italia", options:["Italia","Checoslovaquia","Alemania"], hintText:"El primer mundial ganado por una selección europea.", exp:"Italia ganó su primer título en casa.", link: "https://www.milenio.com/deportes/futbol/italia-1934-el-segundo-mundial-de-la-historia" },
    { q:"¿Quién marcó el gol de la final 2010?", a:"Andrés Iniesta", options:["David Villa","Andrés Iniesta","Xavi Hernández"], hintText:"El gol más importante de la historia de España.", exp:"Iniesta marcó el gol del título en el minuto 116.", link: "https://www.milenio.com/deportes/futbol/el-gol-de-iniesta-en-sudafrica-2010" },
    { q:"¿Qué país ganó el Mundial de Suecia 1958?", a:"Brasil", options:["Suecia","Francia","Brasil"], hintText:"El debut de un joven de 17 años llamado Pelé.", exp:"Brasil ganó su primer mundial goleando 5-2 al anfitrión.", link: "https://www.milenio.com/deportes/futbol/suecia-1958-el-nacimiento-de-la-leyenda-de-pele" },
    { q:"¿Quién fue el campeón en Suiza 1954?", a:"Alemania Federal", options:["Hungría","Alemania Federal","Austria"], hintText:"Se le conoce como 'El Milagro de Berna'.", exp:"Alemania venció a la poderosa Hungría de Puskás.", link: "https://www.milenio.com/deportes/futbol/suiza-1954-el-milagro-de-berna-y-el-titulo-aleman" },
    { q:"¿Qué selección ganó el Mundial de México 1986?", a:"Argentina", options:["Alemania","Argentina","Bélgica"], hintText:"El mundial de 'La Mano de Dios' y el 'Gol del Siglo'.", exp:"Maradona lideró a Argentina a su segundo título mundial.", link: "https://www.milenio.com/deportes/futbol/mexico-1986-el-mundial-de-diego-armando-maradona" }
  ],
  [ // Nivel 4: Semifinal
    { q:"¿Cuál fue el primer Mundial televisado?", a:"1954", options:["1950","1954","1962"], hintText:"El mundial de Suiza cambió la forma de ver fútbol.", exp:"1954 fue el primero con retransmisión televisiva.", link: "https://www.milenio.com/deportes/futbol/suiza-1954-el-mundial-que-llego-a-la-tv" },
    { q:"¿Qué país ganó el Mundial 1938?", a:"Italia", options:["Italia","Hungría","Brasil"], hintText:"El bicampeonato italiano antes de la pausa por la guerra.", exp:"Italia ganó en Francia 1938.", link: "https://www.milenio.com/deportes/futbol/francia-1938-el-bicampeonato-de-italia" },
    { q:"¿Quién fue goleador en 1974?", a:"Grzegorz Lato", options:["Johan Cruyff","Grzegorz Lato","Gerd Müller"], hintText:"El polaco que sorprendió al mundo en Alemania.", exp:"Lato anotó 7 goles en 1974.", link: "https://www.milenio.com/deportes/futbol/alemania-1974-el-mundial-del-futbol-total" },
    { q:"¿Quién ganó el Mundial 1990?", a:"Alemania Occidental", options:["Alemania Occidental","Argentina","Italia"], hintText:"La revancha de Alemania frente a la Argentina de Maradona.", exp:"Alemania ganó 1-0 a Argentina.", link: "https://www.milenio.com/deportes/futbol/italia-1990-el-tercer-titulo-de-alemania" },
    { q:"¿Qué país ganó el Mundial 1966?", a:"Inglaterra", options:["Inglaterra","Alemania","Brasil"], hintText:"El único título de los inventores del fútbol.", exp:"Inglaterra ganó 4-2 a Alemania en casa.", link: "https://www.milenio.com/deportes/futbol/inglaterra-1966-el-mundial-del-gol-fantasma" },
    { q:"¿Cuál es el máximo goleador histórico de los Mundiales?", a:"Miroslav Klose", options:["Ronaldo","Miroslav Klose","Pelé"], hintText:"Superó el récord del 'Fenómeno' en Brasil 2014.", exp:"Miroslav Klose tiene el récord con 16 goles totales.", link: "https://www.milenio.com/deportes/futbol/miroslav-klose-el-maximo-goleador-en-la-historia-de-los-mundiales" },
    { q:"¿Quién ganó el Balón de Oro en el Mundial 2014?", a:"Lionel Messi", options:["Thomas Müller","Lionel Messi","James Rodríguez"], hintText:"A pesar de perder la final, fue el mejor del torneo.", exp:"Messi recibió el premio al mejor jugador de Brasil 2014.", link: "https://www.milenio.com/deportes/futbol/lionel-messi-el-mejor-jugador-del-mundial-brasil-2014" },
    { q:"¿Qué país organizó el primer Mundial en África?", a:"Sudáfrica", options:["Egipto","Marruecos","Sudáfrica"], hintText:"El mundial de las vuvuzelas y el Waka Waka.", exp:"Sudáfrica 2010 fue la primera edición en suelo africano.", link: "https://www.milenio.com/deportes/futbol/sudafrica-2010-el-primer-mundial-en-el-continente-africano" }
  ],
  [ // Nivel 5: Final
    { q:"¿Quién marcó el gol más rápido en un Mundial?", a:"Hakan Şükür", options:["Hakan Şükür","Pelé","Klose"], hintText:"Ocurrió apenas sonó el silbatazo inicial en 2002.", exp:"Marcó a los 11 segundos contra Corea del Sur.", link: "https://www.milenio.com/deportes/futbol/corea-japon-2002-el-mundial-de-las-sorpresas" },
    { q:"¿Qué país organizó el Mundial 2006?", a:"Alemania", options:["Alemania","Japón","Sudáfrica"], hintText:"Un torneo recordado por su gran organización y estadios.", exp:"Alemania fue el anfitrión en 2006.", link: "https://www.milenio.com/deportes/futbol/alemania-2006-el-mundial-de-la-despedida-de-zidane" },
    { q:"¿Quién ganó el Mundial 1982?", a:"Italia", options:["Italia","Alemania","Francia"], hintText:"España 82 y el renacer de la selección italiana.", exp:"Italia venció a Alemania 3-1 en la final.", link: "https://www.milenio.com/deportes/futbol/espana-1982-el-mundial-del-naranjito" },
    { q:"¿Quién ganó el Mundial 1994?", a:"Brasil", options:["Brasil","Italia","Suecia"], hintText:"El regreso del juego bonito a la cima.", exp:"Brasil ganó tras una final sin goles en tiempo regular.", link: "https://www.milenio.com/deportes/futbol/usa-1994-el-mundial-que-cambio-el-futbol" },
    { q:"¿Cuál fue el máximo goleador de 2006?", a:"Miroslav Klose", options:["Ronaldo","Miroslav Klose","Thierry Henry"], hintText:"El inicio de la leyenda del máximo goleador histórico.", exp:"Klose marcó 5 goles en ese torneo.", link: "https://www.milenio.com/deportes/futbol/miroslav-klose-el-maximo-goleador-de-los-mundiales" },
    { q:"¿Quién ganó el Mundial de Qatar 2022?", a:"Argentina", options:["Francia","Argentina","Croacia"], hintText:"La final más emocionante de la historia reciente.", exp:"Argentina venció a Francia en una tanda de penales épica.", link: "https://www.milenio.com/deportes/futbol/argentina-campeon-del-mundo-qatar-2022-messi-levanta-la-copa" },
    { q:"¿Qué selección tiene el récord de más finales jugadas?", a:"Alemania", options:["Brasil","Alemania","Italia"], hintText:"Un equipo conocido por su constancia y disciplina.", exp:"Alemania ha disputado 8 finales de la Copa del Mundo.", link: "https://www.milenio.com/deportes/futbol/que-selecciones-han-jugado-mas-finales-de-mundial" },
    { q:"¿Quién fue el goleador del Mundial de Francia 1998?", a:"Davor Šuker", options:["Ronaldo","Gabriel Batistuta","Davor Šuker"], hintText:"Llevó a Croacia a un histórico tercer lugar.", exp:"Šuker anotó 6 goles, ganando la Bota de Oro.", link: "https://www.milenio.com/deportes/futbol/francia-1998-el-mundial-donde-brillo-davor-suker" }
  ]
];

// --- 3. ESTADO DEL JUEGO ---
let faseActual = 0; 
let preguntaIndice = 0; 
let vidas = 3;
let goles = 0;
let tiempo = 12;
let crono;

// --- 4. FUNCIONES DE INTERFAZ ---
function actualizarIconosMenu(estado) {
    const btnsInfo = document.querySelectorAll('.btn-info-trigger');
    const btnsCred = document.querySelectorAll('.btn-cred-trigger');
    btnsInfo.forEach(img => img.src = (estado === 'info' ? iconInfoActivo : iconInfoNormal));
    btnsCred.forEach(img => img.src = (estado === 'creditos' ? iconCredActivo : iconCredNormal));
}

document.querySelectorAll('.btn-info-trigger').forEach(btn => {
    btn.onclick = () => {
        iniciarAudioIntro(); // Asegurar audio
        modalCreditos.style.display = 'none';
        modalInfo.style.display = 'flex';
        actualizarIconosMenu('info');
    };
});

document.querySelectorAll('.btn-cred-trigger').forEach(btn => {
    btn.onclick = () => {
        iniciarAudioIntro(); // Asegurar audio
        modalInfo.style.display = 'none';
        modalCreditos.style.display = 'flex';
        actualizarIconosMenu('creditos');
    };
});

document.querySelectorAll('.btn-close-trigger, .close-modal, #btn-volver-juego').forEach(btn => {
    btn.onclick = () => {
        modalInfo.style.display = 'none';
        modalCreditos.style.display = 'none';
        const modalPista = document.getElementById('modal-pista');
        if(modalPista) modalPista.style.display = 'none';
        actualizarIconosMenu('reset');
    };
});

const btnPista = document.getElementById('btn-pista');
if(btnPista) {
    btnPista.onclick = () => {
        if (btnPista.classList.contains('disabled')) return;
        const data = bancoPreguntas[faseActual][preguntaIndice];
        document.getElementById('pista-texto-contenido').innerText = data.hintText;
        document.getElementById('btn-ver-nota').href = data.link;
        document.getElementById('modal-pista').style.display = 'flex';
        btnPista.classList.add('disabled');
        btnPista.style.opacity = "0.5";
    };
}

function toggleAudio() {
    const todosLosAudios = [audioIntro, audioEstadio, audioTiro, audioFallo, audioGol, audioSilbato];
    const estaMuteado = !audioIntro.muted;
    todosLosAudios.forEach(a => a.muted = estaMuteado);
    
    const currentSprite = estaMuteado ? imgSinVol : imgConVol;
    const btnAudioMain = document.getElementById('btn-audio-main');
    if(btnAudioMain) btnAudioMain.src = currentSprite;
    document.querySelectorAll('.btn-audio-sync').forEach(btn => btn.src = currentSprite);
}
const btnAudio = document.getElementById('btn-audio-main');
if(btnAudio) btnAudio.onclick = toggleAudio;

// --- 5. LÓGICA DEL JUEGO ---
if(btnJugar) {
    btnJugar.onclick = () => {
        audioIntro.pause(); 
        audioIntro.currentTime = 0; // Reset para no traslapar
        audioEstadio.play(); 
        
        document.getElementById('game-container').classList.add('game-on');
        document.getElementById('menu-inicio').style.display = 'none';
        document.getElementById('campo-juego').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('trivia-container').style.display = 'flex';
            cargarPregunta();
        }, 800);
    };
}

function cargarPregunta() {
    const data = bancoPreguntas[faseActual][preguntaIndice];
    document.getElementById('pregunta-texto').innerText = data.q;
    
    const btnLupa = document.getElementById('btn-pista');
    if(btnLupa) {
        btnLupa.classList.remove('disabled');
        btnLupa.style.opacity = "1";
    }

    const botones = document.querySelectorAll('.btn-respuesta');
    botones.forEach((btn, i) => {
        btn.innerText = data.options[i];
        btn.style.pointerEvents = 'auto';
        btn.onclick = () => manejarSeleccion(data.options[i]);
    });

    tiempo = 12;
    document.getElementById('cronometro').innerText = tiempo;
    iniciarCronometro();
}

function iniciarCronometro() {
    clearInterval(crono);
    crono = setInterval(() => {
        tiempo--;
        document.getElementById('cronometro').innerText = tiempo;
        if(tiempo <= 0) {
            clearInterval(crono);
            manejarSeleccion("TIEMPO_AGOTADO");
        }
    }, 1000);
}

function manejarSeleccion(opcion) {
    const data = bancoPreguntas[faseActual][preguntaIndice];
    const esCorrecto = (opcion === data.a);
    clearInterval(crono);
    document.querySelectorAll('.btn-respuesta').forEach(b => b.style.pointerEvents = 'none');
    ejecutarPenal(esCorrecto);
}

// --- 6. ANIMACIÓN DE PENALES ---
function ejecutarPenal(esCorrecto) {
    const balon = document.getElementById('balon');
    const portero = document.getElementById('portero');
    
    audioSilbato.play();

    setTimeout(() => {
        audioTiro.play();
        // Trayectoria horizontal
        const ladoX = Math.random() > 0.5 ? "15vh" : "-15vh";

        if (esCorrecto) {
            balon.style.transition = "transform 0.5s ease-out";
            // Sube hasta la portería (aproximadamente 25% de la altura de la escena)
            balon.style.transform = `translate(calc(-50% + ${ladoX}), -28vh)`;

            setTimeout(() => {
                if (ladoX.includes("-")) portero.classList.add('portero-der');
                else portero.classList.add('portero-izq');
                audioGol.play();
            }, 100);
            actualizarMarcador(true);
        } else {
            balon.style.transition = "transform 0.4s ease-out";
            // Sube directo hacia el portero
            balon.style.transform = `translate(calc(-50% + ${ladoX}), -26vh)`;

            setTimeout(() => {
                if (ladoX.includes("-")) portero.classList.add('portero-izq');
                else portero.classList.add('portero-der');
                audioFallo.play();
            }, 50);
            actualizarMarcador(false);
        }

        setTimeout(() => {
            balon.style.transition = "none";
            balon.style.transform = "translateX(-50%)";
            portero.classList.remove('portero-izq', 'portero-der', 'portero-centro');
            proximaPregunta();
        }, 2500);
    }, 600);
}

function actualizarMarcador(fueGol) {
    if (fueGol) {
        goles++;
        document.getElementById('goles-count').innerText = goles;
    } else {
        vidas--;
        actualizarVidasUI();
    }
    const dots = document.querySelectorAll('.dot');
    if (dots[preguntaIndice]) dots[preguntaIndice].classList.add(fueGol ? 'green' : 'red');
}

function actualizarVidasUI() {
    const heartIcon = document.querySelector('.heart-icon');
    if(heartIcon) heartIcon.innerText = "❤".repeat(vidas) + "🖤".repeat(3 - vidas);
    if (vidas <= 0) {
        setTimeout(() => { alert("¡GAME OVER!"); location.reload(); }, 1500);
    }
}

function proximaPregunta() {
    preguntaIndice++;
    if (preguntaIndice < 8) {
        cargarPregunta();
    } else {
        if (faseActual < 4) {
            alert("¡Felicidades! Pasas a la siguiente fase.");
            faseActual++;
            preguntaIndice = 0;
            document.querySelectorAll('.dot').forEach(d => d.className = 'dot');
            cargarPregunta();
        } else {
            alert("¡ERES EL CAMPEÓN DEL MUNDO!");
            location.reload();
        }
    }
}