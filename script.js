// --- 1. CONFIGURACIÓN Y ASSETS ---
const audioIntro = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Intro.mp3");
const audioEstadio = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/gente1.mp3");
const audioTiro = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/tiro.mp3");
const audioFallo = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/fallo.mp3");
const audioGol = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Gool.mp3");
const audioSilbato = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/silbato.mp3");

audioIntro.loop = true;
audioEstadio.loop = true;

const iconInfoNormal = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/INFO.png";
const iconInfoActivo = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/INFONEG.png";
const iconCredNormal = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CRED.png";
const iconCredActivo = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CREDNEG.png";
const imgConVol = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CONVOL.png";
const imgSinVol = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/SINVOL.png";

const porterosPorFase = {
    0: { 
        nombre: "Ochoa", 
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/memoochoa.png", 
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/memoochoaalegre.png", 
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/memoochoaenojado.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/frases/ochoa_gana.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/frases/ochoa_pierde.png"
    },
    1: { 
        nombre: "Buffon", 
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/buffon.png", 
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/buffonalegre.png", 
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/buffonenojado.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/frases/Buffon_gana.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/frases/Buffon_pierde.png"
    },
    2: { 
        nombre: "Jorge Campos", 
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/camposenojado.png", 
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/camposenojado.png", 
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/campos.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/frases/JorgeCampos_gana.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/frases/JorgeCampos_pierde.png"
    },
    3: { 
        nombre: "Oliver Kahn", 
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/oliver.png", 
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/oliveralegre.png", 
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/oliverenojado.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/frases/OliverKahn_Gana.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/frases/OliverKahn_Pierde.png"
    },
    4: { 
        nombre: "Lev Yashin", 
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/Yashin.png", 
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/Yashin.png", 
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/Yashinenojado.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/frases/LevYashin_gana.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/frases/LevYashin_pierde.png"
    }
};

// --- 2. BANCO DE PREGUNTAS ---
const bancoPreguntas = [
    [ // Nivel 1
        { q:"¿Quién ganó el Mundial 2018?", a:"Francia", options:["Francia","Croacia","Brasil"], hintText:"Mira los detalles de la final de Rusia 2018 aquí.", exp:"Francia ganó 4-2 a Croacia en la final.", link: "https://www.milenio.com/deportes/futbol/francia-campeon-del-mundial-rusia-2018" },
        { q:"¿Qué país tiene más Mundiales?", a:"Brasil", options:["Argentina","Brasil","Italia"], hintText:"Conoce la historia del 'Scratch du Oro'.", exp:"Brasil tiene 5 títulos mundiales.", link: "https://www.milenio.com/deportes/futbol/mundial-qatar-2022-que-pais-ha-ganado-mas-copas-del-mundo" },
        { q:"¿Quién ganó el Mundial 2010?", a:"España", options:["España","Países Bajos","Alemania"], hintText:"Recordemos el gol de Iniesta en Sudáfrica.", exp:"España ganó 1-0 con gol de Iniesta.", link: "https://www.milenio.com/deportes/futbol/espana-campeon-del-mundo-en-sudafrica-2010" },
        { q:"¿Quién fue campeón del Mundial 2006?", a:"Italia", options:["Italia","Francia","Alemania"], hintText:"La final del famoso cabezazo de Zidane.", exp:"Italia ganó 5-3 en penales a Francia.", link: "https://www.milenio.com/deportes/boxeo/mundial-2006-cuando-italia-se-corono-en-alemania" },
        { q:"¿Qué país ganó el primer Mundial (1930)?", a:"Uruguay", options:["Uruguay","Argentina","Italia"], hintText:"El inicio de la historia de las Copas del Mundo.", exp:"Uruguay fue el primer campeón en 1930.", link: "https://www.milenio.com/deportes/futbol/mundial-1930-historia-primer-campeonato-mundo" },
        { q:"¿En qué país se jugó el Mundial 2018?", a:"Rusia", options:["Rusia","Brasil","Qatar"], hintText:"El mundial donde Francia bordó su segunda estrella.", exp:"Rusia fue el anfitrión de la Copa del Mundo 2018.", link: "https://www.milenio.com/deportes/futbol/rusia-2018-el-mundial-que-conquisto-francia" },
        { q:"¿Qué selección ganó el Mundial de México 1970?", a:"Brasil", options:["Italia","Alemania","Brasil"], hintText:"La consagración definitiva de Pelé.", exp:"Brasil obtuvo el tricampeonato tras vencer 4-1 a Italia.", link: "https://www.milenio.com/deportes/futbol/mexico-1970-el-mundial-de-pele-y-el-futbol-arte" },
        { q:"¿Quién ganó el Mundial de Alemania 1974?", a:"Alemania Federal", options:["Países Bajos","Alemania Federal","Polonia"], hintText:"El torneo del famoso 'Fútbol Total' de Cruyff.", exp:"Alemania venció a la Naranja Mecánica 2-1 en la final.", link: "https://www.milenio.com/deportes/futbol/alemania-1974-el-mundial-del-futbol-total" }
    ],
    // ... [Aquí irían el resto de niveles que ya tienes] ...
];

// --- 3. ESTADO DEL JUEGO ---
let faseActual = 0; 
let preguntaIndice = 0; 
let vidas = 3;
let goles = 0;
let tiempo = 12;
let crono;

// --- 4. FUNCIONES DE INTERFAZ ---
const modalInfo = document.getElementById('modal-info');
const modalCreditos = document.getElementById('modal-creditos');
const modalPista = document.getElementById('modal-pista');
const modalFeedback = document.getElementById('modal-feedback');
const modalFase = document.getElementById('modal-fase');
const modalPuntos = document.getElementById('modal-puntos');

function actualizarIconosMenu(estado) {
    const btnsInfo = document.querySelectorAll('.btn-info-trigger');
    const btnsCred = document.querySelectorAll('.btn-cred-trigger');
    btnsInfo.forEach(img => img.src = (estado === 'info' ? iconInfoActivo : iconInfoNormal));
    btnsCred.forEach(img => img.src = (estado === 'creditos' ? iconCredActivo : iconCredNormal));
}

document.querySelectorAll('.btn-info-trigger').forEach(btn => {
    btn.onclick = () => {
        modalCreditos.style.display = 'none';
        modalInfo.style.display = 'flex';
        actualizarIconosMenu('info');
    };
});

document.querySelectorAll('.btn-cred-trigger').forEach(btn => {
    btn.onclick = () => {
        modalInfo.style.display = 'none';
        modalCreditos.style.display = 'flex';
        actualizarIconosMenu('creditos');
    };
});

document.querySelectorAll('.btn-close-trigger, .close-modal, #btn-volver-juego').forEach(btn => {
    btn.onclick = () => {
        modalInfo.style.display = 'none';
        modalCreditos.style.display = 'none';
        modalPista.style.display = 'none';
        actualizarIconosMenu('reset');
    };
});

document.getElementById('btn-audio-main').onclick = function() {
    const estaMuteado = !audioIntro.muted;
    [audioIntro, audioEstadio, audioTiro, audioFallo, audioGol, audioSilbato].forEach(a => a.muted = estaMuteado);
    this.src = estaMuteado ? imgSinVol : imgConVol;
};

// --- 5. LÓGICA DEL JUEGO ---
document.getElementById('btn-jugar').onclick = () => {
    audioIntro.pause();
    audioEstadio.play();
    document.getElementById('game-container').classList.add('game-on');
    document.getElementById('menu-inicio').style.display = 'none';
    document.getElementById('campo-juego').style.display = 'flex';
    cargarPregunta();
};

function cargarPregunta() {
    const faseData = bancoPreguntas[faseActual] || bancoPreguntas[0];
    const data = faseData[preguntaIndice];
    const portero = document.getElementById('portero');

    // 1. Cargar la imagen base del portero de la fase actual
    portero.src = porterosPorFase[faseActual].base;
    
    // 2. Limpiar animaciones de atajada del tiro anterior
    portero.className = ""; 
    // Si usas un contenedor para el portero, asegúrate de que sea visible
    portero.style.display = 'block'; 

    // 3. Actualizar textos
    document.getElementById('pregunta-texto').innerText = data.q;
    document.getElementById('label-fase').innerText = `Fase ${faseActual + 1}`;

    const botones = document.querySelectorAll('.btn-respuesta');
    botones.forEach((btn, i) => {
        btn.innerText = data.options[i];
        btn.style.pointerEvents = 'auto';
        btn.onclick = () => manejarSeleccion(data.options[i]);
    });

    const btnPista = document.getElementById('btn-pista');
    btnPista.style.opacity = "1";
    btnPista.style.pointerEvents = "auto";
    btnPista.onclick = () => {
        document.getElementById('pista-texto-contenido').innerText = data.hintText;
        document.getElementById('btn-ver-nota').href = data.link;
        modalPista.style.display = 'flex';
        btnPista.style.opacity = "0.5";
        btnPista.style.pointerEvents = "none";
    };

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
            manejarSeleccion("TIMEOUT");
        }
    }, 1000);
}

function manejarSeleccion(opcion) {
    clearInterval(crono);
    const faseData = bancoPreguntas[faseActual] || bancoPreguntas[0];
    const data = faseData[preguntaIndice];
    const esCorrecto = (opcion === data.a);
    document.querySelectorAll('.btn-respuesta').forEach(b => b.style.pointerEvents = 'none');
    ejecutarPenal(esCorrecto);
}

function ejecutarPenal(esCorrecto) {
    const balon = document.getElementById('balon');
    const portero = document.getElementById('portero');
    
    audioSilbato.play();
    setTimeout(() => {
        audioTiro.play();
        const ladoX = Math.random() > 0.5 ? "15vh" : "-15vh";
        balon.style.transition = "transform 0.5s ease-out";

        if(esCorrecto) {
            balon.style.transform = `translate(calc(-50% + ${ladoX}), -28vh)`;
            portero.classList.add(ladoX === "15vh" ? "portero-izq" : "portero-der");
            setTimeout(() => {
                audioGol.play();
                actualizarMarcador(true);
                mostrarModalResultado("GOL");
            }, 500);
        } else {
            balon.style.transform = `translate(calc(-50% + ${ladoX}), -22vh)`;
            portero.classList.add(ladoX === "15vh" ? "portero-der" : "portero-izq");
            setTimeout(() => {
                audioFallo.play();
                actualizarMarcador(false);
                mostrarModalResultado("ATAJADA");
            }, 500);
        }
    }, 600);
}

function actualizarMarcador(fueGol) {
    if(fueGol) {
        goles++;
        document.getElementById('goles-count').innerText = goles;
    } else {
        vidas--;
        document.querySelector('.heart-icon').innerText = "❤".repeat(vidas) + "🖤".repeat(3-vidas);
    }
    
    const dots = document.querySelectorAll('.dot');
    if(dots[preguntaIndice]) {
        dots[preguntaIndice].classList.add(fueGol ? 'green' : 'red');
    }

    if(vidas <= 0) {
        clearInterval(crono);
        setTimeout(() => { mostrarPantallaFinal(false); }, 1200);
    }
}

function mostrarModalResultado(tipo) {
    const faseData = bancoPreguntas[faseActual] || bancoPreguntas[0];
    const data = faseData[preguntaIndice];
    const pData = porterosPorFase[faseActual];

    document.getElementById('feedback-texto').innerText = data.exp;
    document.getElementById('btn-saber-mas').onclick = () => window.open(data.link, '_blank');
    
    if(tipo === "GOL") {
        document.getElementById('feedback-titulo').src = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/GOL.png";
        document.getElementById('portero-reaccion').src = pData.enojado;
    } else {
        document.getElementById('feedback-titulo').src = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/ATAJADA.png";
        document.getElementById('portero-reaccion').src = pData.alegre;
    }
    modalFeedback.style.display = 'flex';
}

document.getElementById('btn-siguiente').onclick = () => {
    modalFeedback.style.display = 'none';
    
    const balon = document.getElementById('balon');
    const portero = document.getElementById('portero');

    // Resetear balón
    balon.style.transition = "none";
    balon.style.transform = "translateX(-50%)";
    
    // IMPORTANTE: Resetear portero a su imagen base y quitar clases de salto
    portero.className = "";
    portero.src = porterosPorFase[faseActual].base;
    
    preguntaIndice++;
    if(preguntaIndice < 8) {
        cargarPregunta();
    } else {
        if(faseActual < 4) {
            modalFase.style.display = 'flex';
            document.getElementById('fase-texto-contenido').innerText = `¡BIENVENIDO A LA FASE ${faseActual + 2}!`;
        } else {
            mostrarPantallaFinal(true);
        }
    }
};

function mostrarPantallaFinal(ganoMundial) {
    // Usamos las variables globales de tu script
    document.getElementById('final-goles-count').innerText = goles;
    document.getElementById('final-puntos-count').innerText = goles * 10;
    
    const titulo = document.getElementById('puntos-titulo-final');
    const imgPortero = document.getElementById('portero-final-img');

    if(ganoMundial) {
        titulo.innerText = "¡CAMPEÓN!";
        titulo.className = "titulo-final-verde";
        // Aquí pon la URL del portero celebrando
        imgPortero.src = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/frases/ochoa_pierde.png"; 
    } else {
        titulo.innerText = "ELIMINADO";
        titulo.className = "titulo-final-rojo";
        // Aquí la URL del portero que te pasé en la captura (con el texto en el guante)
        imgPortero.src = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/frases/ochoa_gana.png"; 
    }

    // MOSTRAR EL MODAL (Esto faltaba)
    document.getElementById('modal-puntos').style.display = 'flex';
}
// --- 6. EVENTOS DE BOTONES FINALES ---
document.getElementById('btn-puntos-reintentar').onclick = () => location.reload();

document.getElementById('btn-puntos-compartir').onclick = () => {
    const texto = `¡Metí ${goles} goles en el Mundialito Milenio 2026! ⚽ ¿Puedes superarme?`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}&url=${encodeURIComponent(url)}`, '_blank');
};

document.getElementById('btn-puntos-copa').onclick = () => {
    window.location.href = "https://www.milenio.com/especiales/mundial-2026"; // O la acción que prefieras
};

document.getElementById('btn-continuar-fase').onclick = () => {
    modalFase.style.display = 'none';
    faseActual++;
    preguntaIndice = 0;
    document.querySelectorAll('.dot').forEach(d => d.className = 'dot');
    cargarPregunta();
};
