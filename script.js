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

// Assets Finales
const imgFinalPuntos = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/PUNTOS.png";
const imgEliminado = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/ELIMINADO.png";

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

// --- 2. BANCO DE PREGUNTAS (40 únicas) ---
const bancoPreguntas = [
    [ // Fase 1: Grupos
        { q:"¿Quién ganó el Mundial 2018?", a:"Francia", options:["Francia","Croacia","Brasil"], hintText:"Sucedió en Rusia.", exp:"Francia ganó 4-2 a Croacia.", link: "https://www.milenio.com/deportes/futbol/francia-campeon-del-mundial-rusia-2018" },
        { q:"¿Qué país tiene más Mundiales?", a:"Brasil", options:["Argentina","Brasil","Italia"], hintText:"Pentacampeones.", exp:"Brasil tiene 5 títulos.", link: "https://www.milenio.com/deportes/futbol/mundial-qatar-2022-que-pais-ha-ganado-mas-copas-del-mundo" },
        { q:"¿Quién ganó el Mundial 2010?", a:"España", options:["España","Países Bajos","Alemania"], hintText:"Gol de Iniesta.", exp:"España ganó 1-0.", link: "https://www.milenio.com/deportes/futbol/espana-campeon-del-mundo-en-sudafrica-2010" },
        { q:"¿Quién fue campeón en 2006?", a:"Italia", options:["Italia","Francia","Alemania"], hintText:"Final del cabezazo.", exp:"Italia ganó en penales.", link: "https://www.milenio.com/deportes/boxeo/mundial-2006-cuando-italia-se-corono-en-alemania" },
        { q:"¿Primer campeón (1930)?", a:"Uruguay", options:["Uruguay","Argentina","Italia"], hintText:"Anfitrión original.", exp:"Uruguay ganó la primera copa.", link: "https://www.milenio.com/deportes/futbol/mundial-1930-historia-primer-campeonato-mundo" },
        { q:"¿Sede del Mundial 2018?", a:"Rusia", options:["Rusia","Brasil","Qatar"], hintText:"Euro-Asiático.", exp:"Rusia fue el anfitrión.", link: "https://www.milenio.com/deportes/futbol/rusia-2018-el-mundial-que-conquisto-francia" },
        { q:"¿Campeón México 70?", a:"Brasil", options:["Italia","Alemania","Brasil"], hintText:"Pelé brilló.", exp:"Brasil venció a Italia.", link: "https://www.milenio.com/deportes/futbol/mexico-1970-el-mundial-de-pele-y-el-futbol-arte" },
        { q:"¿Campeón Alemania 74?", a:"Alemania Fed.", options:["Países Bajos","Alemania Fed.","Polonia"], hintText:"Contra Cruyff.", exp:"Alemania venció a la Naranja Mecánica.", link: "https://www.milenio.com/deportes/futbol/alemania-1974-el-mundial-del-futbol-total" }
    ],
    [ // Fase 2: Octavos
        { q:"¿Máximo goleador histórico?", a:"Klose", options:["Ronaldo","Klose","Messi"], hintText:"Alemán efectivo.", exp:"Miroslav Klose tiene 16 goles.", link: "https://www.milenio.com/deportes/futbol/miroslav-klose-maximo-goleador-mundiales" },
        { q:"¿Dónde fue el Mundial 1994?", a:"EE.UU.", options:["Francia","EE.UU.","Italia"], hintText:"Norteamérica.", exp:"Brasil ganó en tierras gringas.", link: "https://www.milenio.com/deportes/futbol/mundial-usa-1994-el-primer-mundial-sin-goles-en-la-final" },
        { q:"¿Quién ganó en 1998?", a:"Francia", options:["Brasil","Italia","Francia"], hintText:"Zidane anotó.", exp:"Francia ganó su primera copa en casa.", link: "https://www.milenio.com/deportes/futbol/francia-1998-el-mundial-de-zidane" },
        { q:"¿Apodo de Argentina?", a:"La Albiceleste", options:["La Roja","La Albiceleste","La Canarinha"], hintText:"Colores de bandera.", exp:"Referencia a sus colores azul y blanco.", link: "https://www.milenio.com/deportes/futbol/mundial-qatar-2022-por-que-le-dicen-albiceleste-a-la-seleccion-de-argentina" },
        { q:"¿Balón de Oro 2022?", a:"Messi", options:["Mbappé","Modric","Messi"], hintText:"El Capitán campeón.", exp:"Messi fue el mejor del torneo.", link: "https://www.milenio.com/deportes/futbol/lionel-messi-ganador-balon-de-oro-mundial-qatar-2022" },
        { q:"¿Campeón 1986?", a:"Argentina", options:["Alemania","Argentina","Bélgica"], hintText:"Mano de Dios.", exp:"Maradona levantó la copa en México.", link: "https://www.milenio.com/deportes/futbol/mexico-1986-el-mundial-de-diego-armando-maradona" },
        { q:"¿Sede del Mundial 2002?", a:"Corea-Japón", options:["Corea-Japón","China","Sudáfrica"], hintText:"Doble sede.", exp:"Primer mundial en Asia.", link: "https://www.milenio.com/deportes/futbol/corea-japon-2002-mundial-brasil-pentacampeon" },
        { q:"¿Color de Holanda?", a:"Naranja", options:["Rojo","Azul","Naranja"], hintText:"Fruta cítrica.", exp:"Conocidos como la Naranja Mecánica.", link: "https://www.milenio.com/deportes/futbol/seleccion-holanda-por-que-visten-de-naranja" }
    ],
    [ // Fase 3: Cuartos
        { q:"¿Quién ganó en 1966?", a:"Inglaterra", options:["Inglaterra","Alemania","Portugal"], hintText:"Inventores del fútbol.", exp:"Ganaron en su propia casa.", link: "https://www.milenio.com/deportes/futbol/inglaterra-1966-el-mundial-del-gol-fantasma" },
        { q:"¿Cuántos goles hizo Fontaine?", a:"13", options:["10","13","15"], hintText:"Récord en un solo mundial.", exp:"Just Fontaine en Suecia 1958.", link: "https://www.milenio.com/deportes/futbol/just-fontaine-maximo-goleador-en-un-solo-mundial" },
        { q:"¿Sede de 1954?", a:"Suiza", options:["Brasil","Suiza","Suecia"], hintText:"Relojes y chocolate.", exp:"Conocido como el Milagro de Berna.", link: "https://www.milenio.com/deportes/futbol/suiza-1954-el-milagro-de-berna" },
        { q:"¿Apodo de Pelé?", a:"O Rei", options:["El Pibe","O Rei","La Pulga"], hintText:"Monarquía.", exp:"Considerado el Rey del fútbol.", link: "https://www.milenio.com/deportes/futbol/pele-el-rey-del-futbol-sus-logros-y-mundiales" },
        { q:"¿Campeón 1958?", a:"Brasil", options:["Suecia","Brasil","Francia"], hintText:"Debut de Pelé.", exp:"Primer título brasileño.", link: "https://www.milenio.com/deportes/futbol/suecia-1958-el-nacimiento-de-la-leyenda-pele" },
        { q:"¿Quién ganó en 1962?", a:"Brasil", options:["Chile","Brasil","Checoslovaquia"], hintText:"Bicampeonato.", exp:"Ganaron en Chile.", link: "https://www.milenio.com/deportes/futbol/chile-1962-el-mundial-que-brasil-gano-sin-pele" },
        { q:"¿Cuántas sedes 2026?", a:"3", options:["1","2","3"], hintText:"Norteamérica unida.", exp:"México, Canadá y Estados Unidos.", link: "https://www.milenio.com/deportes/futbol/mundial-2026-que-paises-seran-sede-del-torneo" },
        { q:"¿Sede de 1934?", a:"Italia", options:["Francia","Italia","Uruguay"], hintText:"Europa fascista.", exp:"Italia ganó su primera copa.", link: "https://www.milenio.com/deportes/futbol/italia-1934-el-mundial-de-mussolini" }
    ],
    [ // Fase 4: Semis
        { q:"¿Balón de Oro 2010?", a:"Forlán", options:["Sneijder","Villa","Forlán"], hintText:"Uruguayo imparable.", exp:"Diego Forlán fue el mejor en Sudáfrica.", link: "https://www.milenio.com/deportes/futbol/diego-forlan-balon-de-oro-sudafrica-2010" },
        { q:"¿Campeón 1978?", a:"Argentina", options:["Países Bajos","Argentina","Brasil"], hintText:"Papelitos en el aire.", exp:"Vencieron a Holanda en la final.", link: "https://www.milenio.com/deportes/futbol/argentina-1978-el-primer-titulo-de-la-albiceleste" },
        { q:"¿Finalista en 2018?", a:"Croacia", options:["Inglaterra","Bélgica","Croacia"], hintText:"Modric capitán.", exp:"Francia les ganó la final.", link: "https://www.milenio.com/deportes/futbol/croacia-rusia-2018-la-generacion-que-hizo-historia" },
        { q:"¿Sede de 1938?", a:"Francia", options:["Francia","Brasil","Alemania"], hintText:"Antes de la guerra.", exp:"Italia repitió el título.", link: "https://www.milenio.com/deportes/futbol/francia-1938-el-mundial-antes-de-la-segunda-guerra-mundial" },
        { q:"¿Quién ganó en 1982?", a:"Italia", options:["Alemania","Brasil","Italia"], hintText:"Paolo Rossi.", exp:"Ganaron en España.", link: "https://www.milenio.com/deportes/futbol/espana-1982-el-mundial-de-naranjito" },
        { q:"¿Sede de 1990?", a:"Italia", options:["Alemania","Italia","México"], hintText:"Noches mágicas.", exp:"Alemania fue campeón.", link: "https://www.milenio.com/deportes/futbol/italia-1990-el-mundial-de-las-noches-magicas" },
        { q:"¿Campeón 1950?", a:"Uruguay", options:["Brasil","Uruguay","España"], hintText:"Maracanazo.", exp:"Uruguay venció a Brasil.", link: "https://www.milenio.com/deportes/futbol/maracanazo-el-dia-que-uruguay-silencio-a-todo-brasil" },
        { q:"¿Sede de 1958?", a:"Suecia", options:["Francia","Suecia","Brasil"], hintText:"Tierra escandinava.", exp:"Brasil ganó su primer mundial.", link: "https://www.milenio.com/deportes/futbol/suecia-1958-el-mundial-de-pele" }
    ],
    [ // Fase 5: Final
        { q:"¿Quién eliminó a México en 2014?", a:"Países Bajos", options:["Brasil","Países Bajos","Croacia"], hintText:"#NoEraPenal.", exp:"Robben y el polémico penal.", link: "https://www.milenio.com/deportes/futbol/mundial-2014-el-no-era-penal-de-robben" },
        { q:"¿Goleador de 2022?", a:"Mbappé", options:["Messi","Mbappé","Giroud"], hintText:"Hat-trick en la final.", exp:"Kylian Mbappé con 8 goles.", link: "https://www.milenio.com/deportes/futbol/kylian-mbappe-bota-de-oro-mundial-qatar-2022" },
        { q:"¿Única sede en África?", a:"Sudáfrica", options:["Egipto","Marruecos","Sudáfrica"], hintText:"Waka Waka.", exp:"Ocurrió en 2010.", link: "https://www.milenio.com/deportes/futbol/sudafrica-2010-el-primer-mundial-en-africa" },
        { q:"¿Campeón de 1990?", a:"Alemania", options:["Argentina","Italia","Alemania"], hintText:"Penal de Brehme.", exp:"Vencieron a Argentina 1-0.", link: "https://www.milenio.com/deportes/futbol/italia-1990-el-mundial-que-gano-la-alemania-de-matthaus" },
        { q:"¿Balón de Oro 2014?", a:"Messi", options:["Müller","Messi","James"], hintText:"Subcampeón triste.", exp:"Lionel Messi fue el MVP.", link: "https://www.milenio.com/deportes/futbol/lionel-messi-balon-de-oro-mundial-brasil-2014" },
        { q:"¿Sede de 2022?", a:"Qatar", options:["Emiratos","Qatar","Arabia"], hintText:"Mundial invernal.", exp:"Primero en medio oriente.", link: "https://www.milenio.com/deportes/futbol/qatar-2022-el-mundial-de-lionel-messi" },
        { q:"¿Quién ganó en 2002?", a:"Brasil", options:["Alemania","Brasil","Turquía"], hintText:"Ronaldo Fenómeno.", exp:"Pentacampeonato brasileño.", link: "https://www.milenio.com/deportes/futbol/corea-japon-2002-el-mundial-de-ronaldo" },
        { q:"¿Finalista en 2010?", a:"Países Bajos", options:["Alemania","Uruguay","Países Bajos"], hintText:"Perdieron 3 finales.", exp:"España les ganó con gol de Iniesta.", link: "https://www.milenio.com/deportes/futbol/espana-vs-holanda-final-mundial-sudafrica-2010" }
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
const modalInfo = document.getElementById('modal-info');
const modalCreditos = document.getElementById('modal-creditos');
const modalPista = document.getElementById('modal-pista');
const modalFeedback = document.getElementById('modal-feedback');
const modalPasaste = document.getElementById('modal-pasaste');
const modalPuntos = document.getElementById('modal-puntos');

function actualizarIconosMenu(estado) {
    const btnsInfo = document.querySelectorAll('.btn-info-trigger');
    const btnsCred = document.querySelectorAll('.btn-cred-trigger');
    btnsInfo.forEach(img => img.src = (estado === 'info' ? iconInfoActivo : iconInfoNormal));
    btnsCred.forEach(img => img.src = (estado === 'creditos' ? iconCredActivo : iconCredNormal));
}

document.querySelectorAll('.btn-info-trigger').forEach(btn => {
    btn.onclick = () => { modalCreditos.style.display = 'none'; modalInfo.style.display = 'flex'; actualizarIconosMenu('info'); };
});

document.querySelectorAll('.btn-cred-trigger').forEach(btn => {
    btn.onclick = () => { modalInfo.style.display = 'none'; modalCreditos.style.display = 'flex'; actualizarIconosMenu('creditos'); };
});

document.querySelectorAll('.btn-close-trigger, .close-modal, #btn-volver-juego').forEach(btn => {
    btn.onclick = () => { modalInfo.style.display = 'none'; modalCreditos.style.display = 'none'; modalPista.style.display = 'none'; actualizarIconosMenu('reset'); };
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
    const faseData = bancoPreguntas[faseActual];
    if (!faseData) return;
    const data = faseData[preguntaIndice];
    const portero = document.getElementById('portero');

    portero.src = porterosPorFase[faseActual].base;
    portero.className = ""; 
    portero.style.display = 'block'; 

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

    tiempo = 12 - faseActual; 
    document.getElementById('cronometro').innerText = tiempo;
    iniciarCronometro();
}

function iniciarCronometro() {
    clearInterval(crono);
    crono = setInterval(() => {
        tiempo--;
        document.getElementById('cronometro').innerText = tiempo;
        if(tiempo <= 0) { clearInterval(crono); manejarSeleccion("TIMEOUT"); }
    }, 1000);
}

function manejarSeleccion(opcion) {
    // Si ya no tiene vidas, no procesar más clics
    if (vidas <= 0) return; 

    clearInterval(crono);
    const data = bancoPreguntas[faseActual][preguntaIndice];
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
            setTimeout(() => { audioGol.play(); actualizarMarcador(true); mostrarModalResultado("GOL"); }, 500);
        } else {
            balon.style.transform = `translate(calc(-50% + ${ladoX}), -22vh)`;
            portero.classList.add(ladoX === "15vh" ? "portero-der" : "portero-izq");
            setTimeout(() => { audioFallo.play(); actualizarMarcador(false); mostrarModalResultado("ATAJADA"); }, 500);
        }
    }, 600);
}

function actualizarMarcador(fueGol) {
    if(fueGol) {
        goles++;
        document.getElementById('goles-count').innerText = goles;
    } else {
        vidas--;
        // Actualizar corazones
        const heartContainer = document.querySelector('.heart-icon');
        if (heartContainer) {
            heartContainer.innerText = "❤".repeat(Math.max(0, vidas)) + "🖤".repeat(Math.max(0, 3 - vidas));
        }
    }
    
    const dots = document.querySelectorAll('.dot');
    if(dots[preguntaIndice]) { 
        dots[preguntaIndice].classList.add(fueGol ? 'green' : 'red'); 
    }

    // --- CORRECCIÓN AQUÍ ---
    if(vidas <= 0) {
        clearInterval(crono); // Detenemos el tiempo de inmediato
        // Deshabilitamos botones para que no sigan clickeando mientras sale el modal
        document.querySelectorAll('.btn-respuesta').forEach(b => b.style.pointerEvents = 'none');
        
        setTimeout(() => { 
            mostrarPantallaFinal(false); 
        }, 1200);
    }
}

function mostrarModalResultado(tipo) {
    const data = bancoPreguntas[faseActual][preguntaIndice];
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

    balon.style.transition = "none";
    balon.style.transform = "translateX(-50%)";
    portero.className = "";
    
    preguntaIndice++;
    
    if(preguntaIndice < 8) {
        cargarPregunta();
    } else {
        if(vidas > 0) { 
            mostrarModalPasaste(); 
        } else { 
            mostrarPantallaFinal(false); 
        }
    }
};

function mostrarModalPasaste() {
    console.log("Entrando a mostrarModalPasaste...");
    
    if (faseActual >= 4) { // Si ya pasó la Fase 5 (índice 4)
    mostrarPantallaCampeon();
    return;
    }

    const modalPasaste = document.getElementById('modal-pasaste');
    const assetTitulo = document.getElementById('asset-titulo-ronda');
    const porteroPasaste = document.getElementById('portero-pasaste-fase');
    
    const assetsRonda = [
        "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/PASASAOCTAVOS.png",
        "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/PASASACUARTOS.png",
        "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/PASASASEMI.png",
        "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/PASASAFINAL.png"
    ];
    
    assetTitulo.src = assetsRonda[faseActual];
    document.getElementById('texto-marcastes-ganador').innerText = `MARCASTE: ${goles} GOLES`;
    document.getElementById('texto-ganaste-ganador').innerText = `GANASTE: ${goles * 10} PUNTOS`;

    const pData = porterosPorFase[faseActual];
    if(porteroPasaste) porteroPasaste.src = pData.finalPierde;
    
    // Mostramos el modal
    modalPasaste.style.display = 'flex';

    // ASIGNACIÓN AL NUEVO ID QUE PUSISTE EN EL HTML
    const btnAvanza = document.getElementById('btn-avanzar-ronda'); 
    
    if (btnAvanza) {
        btnAvanza.onclick = function() {
            modalPasaste.style.display = 'none';
            
            // 1. Avanzamos de fase y reseteamos índice de pregunta
            faseActual++;
            preguntaIndice = 0;
            
            // 2. Limpiamos las clases 'green' y 'red' de las bolitas del HUD
            document.querySelectorAll('.dot').forEach(dot => {
                dot.classList.remove('green', 'red');
            });

            // 3. Resetear el texto de vidas (opcional, por si quieres dar 3 vidas nuevas por fase)
            // vidas = 3; 
            // document.querySelector('.heart-icon').innerText = "❤❤❤";

            console.log("Iniciando Fase: " + (faseActual + 1));
            cargarPregunta();
        };
    } else {
        console.error("No se encontró el botón con ID: btn-avanzar-ronda");
    }
    function mostrarPantallaCampeon() {
    const modalPuntos = document.getElementById('modal-puntos');
    const imgTitulo = document.getElementById('puntos-titulo-img');
    const imgCopa = document.getElementById('portero-final-img');
    const audioVictoria = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Gool.mp3");

    // Cambiamos los assets a modo "Campeón"
    imgTitulo.src = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/GANASTELMUNDIALITO.png";
    imgCopa.src = "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Juego_vectores/copa.png";
    
    document.getElementById('final-goles-count').innerText = goles;
    document.getElementById('final-puntos-count').innerText = goles * 10;
    document.getElementById('btn-puntos-reintentar').innerText = "¡JUGAR OTRA VEZ!";

    // Disparamos el audio y el confeti
    audioVictoria.play();
    dispararConfeti();

    modalPuntos.style.display = 'flex';
}

function dispararConfeti() {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10001 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // Confeti desde los lados
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}
}

function mostrarPantallaFinal(ganoMundial) {
    modalPasaste.style.display = 'none';
    modalFeedback.style.display = 'none';

    const imgTitulo = document.getElementById('puntos-titulo-img');
    const imgPortero = document.getElementById('portero-final-img');
    const pData = porterosPorFase[faseActual] || porterosPorFase[0];

    document.getElementById('final-goles-count').innerText = goles;
    document.getElementById('final-puntos-count').innerText = goles * 10;

    if(ganoMundial) {
        imgTitulo.src = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/PUNTOS.png"; 
        imgPortero.src = pData.finalPierde;
        document.getElementById('btn-puntos-reintentar').innerText = "¡OTRA VEZ!";
    } else {
        imgTitulo.src = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/ELIMINADO.png";
        imgPortero.src = pData.finalGana;
        document.getElementById('btn-puntos-reintentar').innerText = "REINTENTAR";
    }
    modalPuntos.style.display = 'flex';
}

document.getElementById('btn-puntos-reintentar').onclick = () => location.reload();

window.irACopa = () => { window.location.href = "https://www.milenio.com/especiales/mundial-2026"; };
window.compartir = () => {
    const texto = `¡Metí ${goles} goles en el Mundialito Milenio! ⚽ ¿Puedes superarme?`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}`, '_blank');
};
