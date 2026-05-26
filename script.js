document.addEventListener('DOMContentLoaded', function() {

// --- 1. CONFIGURACIÓN Y ASSETS ---
const audioIntro    = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Intro.mp3");
audioIntro.loop     = true;

// preload="auto": el browser descarga el audio completo de inmediato,
// listo para reproducirse sin latencia cuando el usuario interactúe.
const audioEstadio  = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/gente1.mp3");
audioEstadio.preload = "auto";
audioEstadio.loop   = true;

const audioTiro     = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/tiro.mp3");
audioTiro.preload   = "auto";

const audioFallo    = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/fallo.mp3");
audioFallo.preload  = "auto";

const audioGol      = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Gool.mp3");
audioGol.preload    = "auto";

const audioSilbato  = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/silbato.mp3");
audioSilbato.preload = "auto";

document.addEventListener('click', function() {
    if (audioIntro.paused && document.getElementById('menu-inicio').style.display !== 'none') {
        audioIntro.play().catch(function(e) {});
    }
}, { once: true });

const iconInfoNormal = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/INFO.png";
const iconInfoActivo = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/INFONEG.png";
const iconCredNormal = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CRED.png";
const iconCredActivo = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CREDNEG.png";
const imgConVol      = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CONVOL.png";
const imgSinVol      = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/SINVOL.png";

const imgFinalPuntos = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/PUNTOS.png";
const imgEliminado   = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/ELIMINADO.png";

// ─── PRECARGA DE IMÁGENES VÍA JS ────────────────────────────────────────────
// Las imágenes del juego (GOL, ATAJADA, iconos de estado) se asignan
// dinámicamente por JS y el browser no las descubre por sí solo hasta
// que ya se necesitan. Se precargan aquí con HTMLLinkElement, siguiendo
// la misma técnica que describe MDN en rel="preload" > Scripting and preloads.
function precargarImagen(url) {
    const link = document.createElement('link');
    link.rel  = 'preload';
    link.as   = 'image';
    link.href = url;
    document.head.appendChild(link);
}

// Imágenes críticas del juego que el HTML no puede precargar
// porque solo se conocen en tiempo de ejecución
const imagenesCriticas = [
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/GOL.png",
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/ATAJADA.png",
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/ELIMINADO.png",
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/GANASTEELFUTBOLITO.png",
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/Interactivo/copa.png",
    // Íconos que cambian de estado (activo/silencio): el browser no los
    // conoce hasta que el usuario los activa por primera vez
    iconInfoActivo,
    iconCredActivo,
    imgSinVol,
    // Pantallas de avance de fase
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/PASASAOCTAVOS.png",
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CUARTOS.png",
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/SEMIFINALES.png",
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/GFINAL.png"
];
imagenesCriticas.forEach(precargarImagen);

// ─── PRECARGA DE PORTEROS DE SIGUIENTE FASE ─────────────────────────────────
// Se llama cada vez que el usuario avanza de ronda para que las
// imágenes del siguiente portero estén listas antes de usarse.
function precargarPorterosFase(fase) {
    const p = porterosPorFase[fase];
    if (!p) return;
    const assetsAPrecargar = [p.base, p.alegre, p.enojado, p.finalGana, p.finalPierde];
    
    if (p.spritesDerecha) {
        p.spritesDerecha.forEach(function(url) { assetsAPrecargar.push(url); });
    }
    if (p.spritesIzquierda) {
        p.spritesIzquierda.forEach(function(url) { assetsAPrecargar.push(url); });
    }
    
    assetsAPrecargar.forEach(precargarImagen);
}

const porterosPorFase = {
    0: {
        nombre: "Ochoa",
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%282%29.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%287%29.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%2815%29.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorterosMon/Portero1Al.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorterosMon/Portero1En.png",
        
      spritesDerecha: [
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%282%29.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/2.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/3.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/4.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/4.1.png", // Nueva
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/5.png"  // Nueva
        ],
        spritesIzquierda: [
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%282%29.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/2.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/3.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/4.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/4.1.png", // Nueva
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/5.png"  // Nueva
        ]
    },
    1: {
        nombre: "Buffon",
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%285%29.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%289%29.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%288%29.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorterosMon/Portero2Al.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorterosMon/Portero2En.png",
        spritesDerecha: [
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%282%29.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/2.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/3.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/4.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/4.1.png", // Nueva
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/5.png"  // Nueva
        ],
        spritesIzquierda: [
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%282%29.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/2.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/3.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/4.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/4.1.png", // Nueva
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/5.png"  // Nueva

        ]
        
    },
    2: {
        nombre: "Jorge Campos",
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%286%29.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%2811%29.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%2810%29.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorterosMon/Portero3Al.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorterosMon/Portero3En.png",
        spritesDerecha: [
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%286%29.png",
           "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/2.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/3.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/4.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/4.1.png", // Nueva
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/5.png"  // Nueva
            
        ],
        spritesIzquierda: [
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%286%29.png",
             "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/2.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/3.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/4.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/4.1.png", // Nueva
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/5.png"  // Nueva
        ]
    },
    3: {
        nombre: "Oliver Kahn",
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%283%29.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%2813%29.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%2812%29.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorterosMon/Portero4Al.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorterosMon/Portero4En.png",
       spritesDerecha: [
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%283%29.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/2.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/3.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/4.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/4.1.png", // Nueva
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/5.png"  // Nueva
        ],
        spritesIzquierda: [
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%283%29.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/2.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/3.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/4.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/4.1.png", // Nueva
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/5.png"  // Nueva
        ]
    },
    4: {
        nombre: "Lev Yashin",
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%284%29.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%281%29.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%2814%29.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorterosMon/Portero5Al.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorterosMon/Portero5En.png",
       spritesDerecha: [
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%284%29.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/2.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/3.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/4.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/4.1.png", // Nueva
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Derecha/5.png"  // Nueva
        ],
        spritesIzquierda: [
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/PORTEROS/PORTERO_COLORES/XUXIN%20%284%29.png",
             "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/2.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/3.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/4.png",
            "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/4.1.png", // Nueva
    "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/Sprites/Izquierda/5.png"  // Nueva
        ]
    }
};

// Precarga el portero de fase 0 (ya está en HTML) y del siguiente (fase 1)
// para que esté listo cuando el usuario pase de ronda por primera vez
precargarPorterosFase(0);
precargarPorterosFase(1);
    
    

const bancoPreguntas = [
    [ // Fase 1: Grupos
        { q:"¿En qué país se celebró la edición de 2014 del gran torneo de selecciones?", a:"Brasil", options:["Sudáfrica","Brasil","Alemania"], hintText:"Allí ocurrió el famoso 7-1 en semifinales.", exp:"La edición de 2014 se jugó en Brasil, donde Alemania derrotó 7-1 a Brasil en semifinales.", link:"https://www.milenio.com/deportes/futbol-internacional/a-8-anos-brasil-1-7-alemania-copa-del-mundo-de-2014" },
        { q:"¿Qué jugador es conocido como 'La Pulga'?", a:"Lionel Messi", options:["Lionel Messi","Luka Modrić","Neymar"], hintText:"fue campeón con Argentina en 2022.", exp:"Lionel Messi, capitán de Argentina, es apodado 'La Pulga' y fue campeón con Argentina en 2022.", link:"https://www.milenio.com/deportes/futbol-internacional/lio-o-leo-cual-es-el-verdadero-apodo-de-messi" },
        { q:"¿Qué jugador marcó el famoso 'Gol del Siglo' en 1986?", a:"Diego Maradona", options:["Ronaldo Nazário","Pelé","Diego Maradona"], hintText:"También anotó 'La Mano de Dios' en ese partido.", exp:"Maradona marcó el 'Gol del Siglo' ante Inglaterra en México 1986.", link:"https://www.milenio.com/deportes/futbol-internacional/diego-armando-maradona-36-anos-mano-dios-gol-siglo" },
        { q:"¿Qué selección africana fue la primera en llegar a semifinales del máximo torneo de selecciones?", a:"Marruecos", options:["Nigeria","Camerún","Marruecos"], hintText:"Lo logró en Qatar 2022.", exp:"Marruecos hizo historia en 2022 al convertirse en la primera selección africana en alcanzar semifinales.", link:"https://www.milenio.com/deportes/africa-orgullosa-avance-marruecos-qatar-2022" },
        { q:"¿Qué jugador portugués es el máximo goleador histórico de su selección?", a:"Cristiano Ronaldo", options:["Luís Figo","Eusébio","Cristiano Ronaldo"], hintText:"Ha disputado cinco ediciones del máximo torneo de selecciones y ganó la Eurocopa 2016.", exp:"Cristiano Ronaldo es el máximo goleador histórico de Portugal.", link:"https://www.milenio.com/deportes/extra-cancha/cristiano-ronaldo-ya-es-el-maximo-goleador-de-portugal" },
        { q:"¿Qué selección goleó a España en fase de grupos de Brasil 2014?", a:"Países Bajos", options:["Países Bajos","Chile","Croacia"], hintText:"La derrotó 5-1 en su debut.", exp:"Países Bajos goleó 5-1 a España en Brasil 2014, en una revancha de la final de 2010.", link:"https://www.milenio.com/deportes/extra-cancha/humillacion-prensa-espanola-sobre-goleada-de-holanda" },
        { q:"¿Qué jugador colombiano ganó la Bota de Oro en Brasil 2014?", a:"James Rodríguez", options:["Radamel Falcao","Juan Cuadrado","James Rodríguez"], hintText:"Su gol a Uruguay fue uno de los mejores del torneo.", exp:"James Rodríguez fue el máximo goleador de Brasil 2014 con seis goles.", link:"https://www.milenio.com/deportes/extra-cancha/james-recibio-la-bota-de-oro" },
        { q:"¿Qué selección fue anfitriona de la primera edición del gran torneo de selecciones en 1930?", a:"Uruguay", options:["Argentina","Uruguay","Brasil"], hintText:"También fue el primer campeón.", exp:"Uruguay organizó y ganó la primera edición del máximo torneo de selecciones en 1930.", link:"https://www.milenio.com/futbol-internacional/mundial/mundial-historia-copa-mundo-uruguay-1930" },
  { q:"¿Contra qué selección anotó Andrés Escobar el autogol que marcó a Colombia en 1994?", a:"Estados Unidos", options:["Estados Unidos","Rumania","Suiza"], hintText:"Fue el país anfitrión de la edición de 1994.", exp:"Escobar anotó un autogol ante Estados Unidos, en un partido clave para la eliminación de Colombia.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Contra qué selección Luis Suárez evitó un gol con la mano en Sudáfrica 2010?", a:"Ghana", options:["Camerún","Ghana","Nigeria"], hintText:"Fue en cuartos de final y el rival era una selección africana.", exp:"Suárez evitó con la mano un gol de Ghana en el último minuto del tiempo extra.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
         { q:"¿Qué jugador falló el penal cobrado por la mano de Luis Suárez en 2010?", a:"Asamoah Gyan", options:["Sulley Muntari","Kevin-Prince Boateng","Asamoah Gyan"], hintText:"Jugaba en el Stade Rennais de Francia", exp:"Asamoah Gyan se convirtió en villano al fallar un penal de último minuto contra Uruguay", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Qué selección campeona vigente quedó eliminada en fase de grupos en Sudáfrica 2010?", a:"Italia", options:["Italia","Francia","Brasil"], hintText:"Había sido campeona en 2006.", exp:"Italia llegó como campeona defensora, pero quedó fuera en fase de grupos en Sudáfrica 2010.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Qué selección campeona vigente fue eliminada en fase de grupos en Rusia 2018?", a:"Alemania", options:["Bélgica","Alemania","Inglaterra"], hintText:"Es uno de los máximos ganadores del torneo", exp:"Alemania, campeona en 2014, quedó eliminada en fase de grupos en Rusia 2018.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
         { q:"¿Contra qué selección Argentina usó las famosas playeras de Tepito en México 1986?", a:"Inglaterra", options:["Bélgica","Inglaterra","Alemania Federal"], hintText:" En ese partido se anotó el llamado “Gol del Siglo”.", exp:"Argentina usó esas playeras en el histórico partido de cuartos de final contra Inglaterra.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
         { q:"¿Qué selección es famosa por su camiseta naranja en los grandes torneos de selecciones?", a:"Países Bajos", options:["Países Bajos","Alemania","Croacia"], hintText:"Su apodo es la “Naranja Mecánica”.", exp:"Países Bajos es reconocida en todo el futbol por su tradicional camiseta naranja.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
         { q:"¿Qué selección usó una camiseta sin mangas en el torneo de 2002?", a:"Camerún", options:["Nigeria","Camerún","Senegal"], hintText:"El organismo rector les obligó a usar camisetas con mangas abajo.", exp:"Este uniforme quedó grabado como una rareza que aún se comenta entre risas y desconcierto", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
         { q:"¿Qué selección usó una camiseta con diseño de mezclilla en Estados Unidos 1994?", a:"Estados Unidos", options:["Estados Unidos","Bulgaria","Irlanda"], hintText:"Fue uno de los uniformes más recordados por su estilo extraño", exp:" Estados Unidos usó una camiseta con efecto de mezclilla en la edición de 1994.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" }
    ],
    [ // Fase 2: Octavos
        { q:"¿Quién fue el máximo goleador de Alemania 2006?", a:"Miroslav Klose", options:["Miroslav Klose","Lukas Podolski","Thomas Müller"], hintText:"Anotó cinco goles y marcó su camino para ser el máximo goleador histórico.", exp:"Miroslav Klose tiene 16 goles en el máximo torneo de selecciones.", link:"https://www.milenio.com/deportes/extra-cancha/klose-rompe-marca-de-goles-en-mundiales" },
        { q:"¿Qué selección sorprendió al llegar a semifinales en Rusia 2018?", a:"Croacia", options:["Bélgica","Dinamarca","Croacia"], hintText:"Eliminó a Rusia en penales en cuartos.", exp:"Croacia llegó hasta la final en 2018, sorprendiendo al mundo.", link:"https://www.milenio.com/deportes/rusia-2018/croacia-avanza-semifinales-termina-sueno-rusia" },
        { q:"¿Qué jugador anotó el gol del título en Brasil 2014?", a:"Mario Götze", options:["Thomas Müller","Mario Götze","Mesut Özil"], hintText:"Entró como suplente en la final.", exp:"Götze marcó en tiempo extra el gol que dio el título a Alemania ante Argentina.", link:"https://www.milenio.com/deportes/extra-cancha/el-analisis-del-alemania-argentina" },
        { q:"¿Qué selección fue campeona en 1954 tras vencer a Hungría en la final?", a:"Alemania Occidental", options:["Alemania Occidental","Italia","Uruguay"], hintText:"Se le conoce como el 'Milagro de Berna'.", exp:"Alemania Occidental ganó la edición de 1954 venciendo a la poderosa Hungría.", link:"https://www.milenio.com/futbol-internacional/mundial/alemania-y-milagro-de-berna-con-el-que-gano-mundial-de-suiza-1954" },
        { q:"¿Qué selección eliminó a Alemania en fase de grupos de Rusia 2018?", a:"Corea del Sur", options:["Japón","México","Corea del Sur"], hintText:"Fue una victoria histórica en el último minuto.", exp:"Corea del Sur venció 2-0 a Alemania, eliminando al campeón defensor.", link:"https://www.milenio.com/deportes/rusia-2018/corea-derrota-alemania-echa-manita-mexico" },
        { q:"¿Qué país perdió la final de Argentina 1978?", a:"Países Bajos", options:["Países Bajos","Brasil","Italia"], hintText:"El torneo estuvo lleno de polémica.", exp:"Argentina ganó su primer título global en 1978 como local, venciendo a Países Bajos en la final.", link:"https://www.milenio.com/deportes/extra-cancha/el-derrumbe-de-la-naranja-mecanica" },
        { q:"¿Qué jugador ganó el Balón de Oro de Rusia 2018?", a:"Luka Modrić", options:["Kylian Mbappé","Luka Modrić","Antoine Griezmann"], hintText:"Fue clave en el subcampeonato de su selección.", exp:"Modrić fue el mejor jugador del torneo en Rusia 2018.", link:"https://www.milenio.com/deportes/rusia-2018/luka-modric-gana-balon-oro-mundial-rusia-2018" },
        { q:"¿En qué estadio se jugó la final de Francia 1998?", a:"Stade de France", options:["Parque de los Príncipes","Stade de France","Vélodrome"], hintText:"Está ubicado en Saint-Denis.", exp:"La final Francia vs Brasil de 1998 se disputó en el Stade de France.", link:"https://www.milenio.com/futbol-internacional/mundial/francia-1998-ultimo-mundial-del-siglo-xx-que-vio-titulo-local" },
        { q:"¿Cuántos goles de penal marcó Messi en Qatar 2022?", a:"4", options:["5","2","4"], hintText:"Fueron clave para conseguir el título ese año", exp:"Messi anotó cuatro penales durante los partidos de Qatar 2022 y falló uno ante Polonia.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Qué partido de México 1986 tuvo “La Mano de Dios”?", a:"Argentina vs Inglaterra", options:["Argentina vs Inglaterra","Argentina vs Bélgica","Argentina vs Uruguay"], hintText:"Maradona anotó dos goles históricos ese día", exp:"En Argentina vs Inglaterra, Maradona anotó con la mano y después marcó el llamado “Gol del Siglo”.",link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Qué jugador anotó el cobro penal del famoso “No era penal”?", a:"Klaas-Jan Huntelaar", options:["Arjen Robben","Klaas-Jan Huntelaar","Wesley Sneijder"], hintText:"Con este gol, Países Bajos eliminó a México en Brasil 2014",exp:"Huntelaar convirtió el penal que puso el 2-1 definitivo ante México.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Qué selección recibió reconocimiento internacional por limpiar su vestidor tras partidos en Rusia 2018?", a:"Japón", options:["Corea del Sur","Australia","Japón"], hintText:"También dejó una nota de agradecimiento en ruso.",exp:"Japón fue reconocido por dejar limpio su vestidor tras su eliminación en Rusia 2018.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Qué selección ha ganado más veces la máxima competencia de selecciones?", a:"Brasil", options:["Brasil","Alemania","Italia"], hintText:"Es la única que ha participado en todas las ediciones del torneo.", exp:"Brasil es la selección más ganadora de la historia, con cinco títulos.",link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Qué selección es la única que ha participado en todas las ediciones del máximo torneo de selecciones?", a:"Brasil", options:["Argentina","Alemania","Brasil"], hintText:"También es la máxima campeona del torneo.", exp:"Brasil ha participado en todas las ediciones del torneo.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
         { q:"¿Qué selección europea está entre las que más veces han participado y más títulos ha ganado?", a:"Alemania", options:["Italia","Alemania","Francia"], hintText:"Es famosa por su disciplina y eficiencia.",exp:"Alemania es una de las selecciones con más participaciones y ha sido campeona cuatro veces.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" }
        
    ],
    [ // Fase 3: Cuartos
        { q:"¿Quién marcó el gol de la victoria en la final de Sudáfrica 2010?", a:"Andrés Iniesta", options:["David Villa","Andrés Iniesta","Xavi Hernández"], hintText:"El tanto llegó en el minuto 116.", exp:"Iniesta marcó el gol del título ante Países Bajos en tiempo extra.", link:"https://www.milenio.com/deportes/futbol-internacional/andres-iniesta-el-discreto-autor-del-gol-mas-importante-de-espana" },
        { q:"¿Qué jugador fue expulsado a los pocos segundos de iniciar un partido en México 1986?", a:"José Batista", options:["José Batista","Diego Maradona","Hugo Sánchez"], hintText:"Fue en 1986.", exp:"Batista fue expulsado a los pocos segundos en México 1986.", link:"https://www.milenio.com/futbol-internacional/mundial/batista-y-la-expulsion-mas-rapida-en-la-historia-del-mundial" },
        { q:"¿Qué jugador fue expulsado por un cabezazo en la final de Alemania 2006?", a:"Zinedine Zidane", options:["Zinedine Zidane","Thierry Henry","Fabio Cannavaro"], hintText:"Fue su último partido profesional.", exp:"Zidane fue expulsado por el cabezazo a Materazzi en la prórroga de la final de 2006.", link:"https://www.milenio.com/futbol-internacional/mundial/mundial-de-alemania-2006-la-triste-final-de-zinedine-zidane" },
        { q:"¿Qué jugador anotó un hat-trick en la final de 2022?", a:"Kylian Mbappé", options:["Lionel Messi","Kylian Mbappé","Ángel Di María"], hintText:"A pesar de eso, no ganó el título.", exp:"Mbappé marcó tres goles en la final, pero Francia perdió en penales ante Argentina.", link:"https://www.milenio.com/futbol-internacional/mundial/mbappe-campeon-goleo-qatar-heredero-messi-cristiano" },
        { q:"¿Qué selección eliminó a México en 1994 en penales?", a:"Bulgaria", options:["Bulgaria","Alemania","Argentina"], hintText:"El partido fue 1-1.", exp:"Bulgaria eliminó a México en penales en Estados Unidos 1994.", link:"https://www.milenio.com/futbol/seleccion-mexicana/jorge-campos-culpa-luis-garcia-eliminacion-tri-mundial-eu" },
        { q:"¿Qué selección eliminó a Argentina en Corea-Japón 2002 en fase de grupos?", a:"Suecia", options:["Suecia","Inglaterra","Nigeria"], hintText:"Fue un empate clave el que selló su eliminación.", exp:"Argentina no pudo vencer a Suecia y quedó fuera en fase de grupos.", link:"https://www.milenio.com/futbol-internacional/mundial/argentina-2002-el-empate-con-suecia-que-los-elimino" },
        { q:"¿Qué objeto fue robado antes de Inglaterra 1966 y recuperado por un perro llamado Pickles?", a:"La Copa Jules Rimet", options:["El balón oficial","La Copa Jules Rimet","La bandera de Inglaterra"], hintText:"Era el trofeo original del torneo.", exp:"El trofeo Jules Rimet fue robado meses antes de Inglaterra 1966 y apareció gracias a Pickles.", link:"https://www.milenio.com/deportes/futbol-internacional/pickles-perro-rescato-jules-rimet-mundial-1966" },
        { q:"¿Quién anotó el primer gol en la historia del máximo torneo de selecciones?", a:"Lucien Laurent", options:["Lucien Laurent","Raymond Kopa","Just Fontaine"], hintText:"Fue Francia vs México en 1930.", exp:"Lucien Laurent marcó el primer gol en la historia de este torneo.", link:"https://www.milenio.com/deportes/extra-cancha/once-goles-historicos-en-el-mundial" },
        { q:"¿Por qué México no participó en Italia 1990?", a:"Sanción del organismo rector internacional", options:["Protestas de los jugadores","Sanción del organismo rector internacional","Falta de recursos"], hintText:"No se trató de una eliminación en el campo",exp:"México fue sancionado por alinear jugadores mayores de edad en torneos juveniles.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
         { q:"¿Qué cantidad de atajadas clave logró Memo Ochoa contra Brasil en 2014?", a:"4", options:["6","4","7"], hintText:"Ochoa fue clave para evitar goles.",exp:"México y Brasil empataron 0-0 gracias a esta actuación memorable de Guillermo Ochoa.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
         { q:"¿Qué jugador anotó el ‘gol de honra’ para Brasil en el 1- 7 contra Alemania en 2014?", a:"Oscar", options:["Oscar","Fred","Neymar Jr"], hintText:"Lo hizo en un mano a mano contra Manuel Neuer",exp:"Aunque sirvió de poco, este gol ayudó a los brasileños a levantar la cara ante el desastre", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Qué le dijo Joachim Löw a sus jugadores al medio tiempo entre Brasil y Alemania en 2014?", a:"Prohibido burlarse del rival", options:["“El partido está ganado”","“Vamos por otros 5”","“Prohibido burlarse del rival”"], hintText:"Fue revelado por Sami Khedira en 2022",exp:"Löw los amenazó con sacarlos del campo y no jugar la final, si se burlaban del rival por la goleada", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
         { q:"¿Cuántos goles anotó Miroslav Klose en la máxima competencia de selecciones?", a:"16", options:["17","16","15"], hintText:"Es un gol más que Ronaldo Nazário.",exp:"Klose anotó 16 goles entre las ediciones de 2002 y 2014.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Qué selección es la más goleadora en la historia del máximo torneo de selecciones?", a:"Brasil", options:["Brasil","Alemania","Argentina"], hintText:"También es la única que ha jugado todas las ediciones del torneo.",exp:"Brasil lidera el ranking histórico de goles anotados en el máximo torneo de selecciones.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Qué dos selecciones superan los 200 goles en la historia del máximo torneo de selecciones?", a:"Brasil y Alemania", options:["Argentina y Francia","Italia y Argentina","Brasil y Alemania"], hintText:"Son dos potencias históricas del futbol.",exp:"Brasil y Alemania son las únicas selecciones que han superado los 200 goles en este torneo.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
         { q:"¿Cuál fue la mascota de México 1986?", a:"Pique", options:["Chilín","Pique","Naranjito"], hintText:"Buscaba representar la identidad y folklore mexicano",exp:"Pique fue la mascota oficial de México 1986.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" }
    ],
    [ // Fase 4: Semis
        { q:"¿Quién anotó el gol más rápido en la historia del máximo torneo de selecciones?", a:"Hakan Şükür", options:["Clint Dempsey","Hakan Şükür","Miroslav Klose"], hintText:"Ocurrió a los 11 segundos.", exp:"Hakan Şükür marcó a los 11 segundos en 2002, récord histórico.", link:"https://www.milenio.com/deportes/extra-cancha/los-goles-mas-rapidos-en-la-historia-del-futbol" },
        { q:"¿Qué jugador colombiano fue asesinado a causa de un autogol en Estados Unidos 1994?", a:"Andrés Escobar", options:["René Higuita","Francisco Maturana","Andrés Escobar"], hintText:"El autogol representó el 2-1 en contra ante Estados Unidos.", exp:"Uno de los episodios más trágicos en la historia del futbol.", link:"https://www.milenio.com/deportes/futbol-internacional/andres-escobar-25-anos-muerte-autogol-mundial-1994" },
        { q:"¿Qué país tuvo que renunciar a organizar la edición de 1986?", a:"Colombia", options:["Argentina","Colombia","Chile"], hintText:"A la fecha no ha organizado el máximo torneo de selecciones.", exp:"Colombia renunció por imposibilidad económica y falta de infraestructura.", link:"https://www.milenio.com/futbol-internacional/mundial/el-dia-que-estados-unidos-intento-robarle-un-mundial-a-mexico" },
        { q:"¿Qué jugador anotó el gol que eliminó a México en Brasil 2014 en tiempo extra?", a:"Klaas-Jan Huntelaar", options:["Arjen Robben","Wesley Sneijder","Klaas-Jan Huntelaar"], hintText:"El partido fue contra Países Bajos.", exp:"Huntelaar marcó el penal definitivo tras la polémica falta sobre Robben.", link:"https://www.milenio.com/futbol-internacional/mundial/mexico-fue-eliminado-por-holanda-en-mundial-de-brasil-2014" },
        { q:"¿Qué selección fue eliminada por Senegal en Corea-Japón 2002?", a:"Francia", options:["Brasil","Francia","Alemania"], hintText:"Fue víctima de la maldición del campeón.", exp:"Senegal venció a Francia en el partido inaugural, marcando una de las mayores sorpresas.", link:"https://www.milenio.com/futbol-internacional/mundial/senegal-elimino-a-francia-en-el-mundial-2002" },
        { q:"¿Cuál es la mayor goleada en la historia del máximo torneo de selecciones?", a:"Hungría 10-1 El Salvador", options:["Hungría 10-1 El Salvador","Portugal 7-0 Corea del Norte","Yugoslavia 9-0 Zaire"], hintText:"Sucedió en España en 1982.", exp:"Hungría goleó 10-1 a El Salvador en fase de grupos.", link:"https://www.milenio.com/deportes/futbol-internacional/copa-mundo-salvador-goleada-siglo-unio" },
        { q:"¿Quién es el único jugador en hacer hat-tricks en dos ediciones consecutivas del máximo torneo de selecciones?", a:"Gabriel Batistuta", options:["Cristiano Ronaldo","Lionel Messi","Gabriel Batistuta"], hintText:"El primero fue ante Grecia y el segundo ante Jamaica.", exp:"El primero fue en Estados Unidos 1994 y el segundo en Francia 1998.", link:"https://www.milenio.com/futbol-internacional/mundial/batistuta-unico-con-hat-tricks-en-dos-mundiales-seguidos" },
        { q:"¿Cuál es la selección que ha recibido más goles en la historia del máximo torneo de selecciones?", a:"Alemania", options:["Alemania","Brasil","México"], hintText:"Es también una de las que más apariciones tiene.", exp:"Alemania, al ser uno de los equipos con más participaciones, se convierte también en la que más goles ha recibido.", link:"https://www.milenio.com/futbol-internacional/mundial/alemania-la-seleccion-con-mas-goles-recibidos-en-mundiales" },
         { q:"¿Contra qué equipo jugó México el único quinto partido de su historia?", a:"Alemania Federal", options:["Noruega","Alemania Federal","Italia"], hintText:"A la postre, ese rival llegaría a la final del torneo",exp:"México llegó a cuartos de final en 1986, donde fue eliminado por Alemania en penales.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
         { q:"¿Contra qué selección fue eliminado México en penales en Estados Unidos 1994?", a:"Bulgaria", options:["Bulgaria","Italia","Alemania Federal"], hintText:"Hugo Sánchez se quedó en la banca y el partido terminó en tanda de penales.",exp:"México cayó ante Bulgaria en octavos de final tras una tanda de penales.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Qué selección remontó y eliminó a México en Francia 1998?", a:"Alemania", options:["Alemania","Países Bajos","Bulgaria"], hintText:"Gary Lineker decía que al final siempre gana este país.",exp:"México ganaba 1-0, pero Alemania remontó con goles de Klinsmann y Bierhoff.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Qué rival dejó a México fuera en Corea-Japón 2002?", a:"Estados Unidos", options:["Italia","Estados Unidos","Argentina"], hintText:" Se convirtió en una de las derrotas más dolorosas para el Tri.",exp:"Estados Unidos eliminó a México en octavos de final con marcador de 2-0.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Quién anotó la famosa volea que eliminó a México en Alemania 2006?", a:"Maxi Rodríguez", options:["Carlos Tevez","Maxi Rodríguez","Lionel Messi"], hintText:"Fue un golazo de Argentina en tiempo extra.",exp:"Maxi Rodríguez marcó una volea histórica que dejó fuera a México en octavos de final.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
         { q:"¿Qué error marcó la eliminación de México ante Argentina en Sudáfrica 2010?", a:"Error de Osorio", options:["Error de Osorio","Expulsión de Rafa Marquez","Falla de Chicharito"], hintText:"Significó el segundo gol de Argentina y el desánimo del Tri",exp:"El gol de Tévez en fuera de lugar y el error de Osorio rompieron el partido para México.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
         { q:"¿Qué frase quedó marcada para México tras Brasil 2014?", a:"No era penal", options:["Sí se pudo","No era penal","Jugamos como nunca…"], hintText:"Hasta hoy se sigue recordando entre pena y burlas",exp:"La polémica jugada de Robben dejó como recuerdo la frase “No era penal”.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
         { q:"¿Contra qué selección cayó México en octavos de final en Rusia 2018?", a:"Brasil", options:["Brasil","Alemania","Suecia"], hintText:"Era el mismo país contra el que México había empatado en Brasil 2014.",exp:"Brasil eliminó a México en octavos de final en Rusia 2018.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" }
        
    ],
        
   [ // Fase 5: Final
    { q:"¿Qué equipo jugó con playeras piratas en México 1986?", a:"Argentina", options:["México","España","Argentina"], hintText:"De no haberlo hecho, hubiera perdido por default.", exp:"En México 1986 el equipo resolvió de emergencia el uniforme con playeras conseguidas en Tepito.", link:"https://www.milenio.com/futbol-internacional/mundial/maradona-la-playera-de-tepito-que-uso-con-argentina-en-mexico-1986" },
    { q:"¿Qué jugador fue el más joven en debutar en el máximo torneo de selecciones?", a:"Norman Whiteside", options:["Pelé","Norman Whiteside","Kylian Mbappé"], hintText:"Jugó en 1982 con solo 17 años.", exp:"El norirlandés debutó en España 1982 con 17 años y 42 días.", link:"https://www.milenio.com/futbol-internacional/mundial/mundial-de-qatar-2022-los-records-que-se-buscaran-romper" },
    { q:"¿Qué selección fue la primera en ganar el título sin recibir goles en eliminación directa?", a:"Italia", options:["Italia","Brasil","Francia"], hintText:"Lo logró vestida de azul.", exp:"Italia ganó la edición de 2006 sin recibir goles en eliminación directa.", link:"https://www.milenio.com/deportes/la-aficion-90/italia-levanta-titulo-mundial-alemania-2006" },
    { q:"¿Qué jugador alemán fue el primero en marcar en cuatro ediciones distintas?", a:"Uwe Seeler", options:["Miroslav Klose","Pelé","Uwe Seeler"], hintText:"Lo logró antes que Cristiano Ronaldo y Messi.", exp:"El alemán Uwe Seeler fue de los primeros futbolistas en anotar en cuatro ediciones distintas del máximo torneo de selecciones.", link:"https://www.milenio.com/deportes/rusia-2018/cristiano-cuarto-jugador-que-marca-en-cuatro-mundiales" },
    { q:"¿Qué jugador tiene más partidos disputados en la historia del máximo torneo de selecciones?", a:"Lionel Messi", options:["Lothar Matthäus","Lionel Messi","Miroslav Klose"], hintText:"Superó el récord en Qatar 2022.", exp:"Messi rompió el récord de Matthäus y se convirtió en el jugador con más partidos en este torneo.", link:"https://www.milenio.com/futbol-internacional/mundial/lionel-messi-jugador-partidos-historia-mundiales" },
    { q:"¿Qué jugador disputó cinco ediciones consecutivas entre 1982 y 1998?", a:"Lothar Matthäus", options:["Lothar Matthäus","Franz Beckenbauer","Karl-Heinz Rummenigge"], hintText:"Es uno de los grandes capitanes de Alemania.", exp:"Matthäus jugó cinco ediciones consecutivas del máximo torneo de selecciones con Alemania.", link:"https://www.milenio.com/deportes/futbol-internacional/rafa-marquez-gano-quinto-mundial-lothar-matthaus" },
    { q:"¿Qué selección fue la primera en perder una final por penales?", a:"Italia", options:["Brasil","Alemania","Italia"], hintText:"Ocurrió en 1994.", exp:"Italia perdió ante Brasil en penales en la final de 1994, la primera definida de esa forma.", link:"https://www.milenio.com/deportes/futbol-internacional/leyendas-brasil-italia-recrearan-unidos-1994" },
    { q:"¿Qué jugador marcó el gol 1000 en la historia del máximo torneo de selecciones?", a:"Rob Rensenbrink", options:["Cristiano Ronaldo","Lionel Messi","Rob Rensenbrink"], hintText:"El tanto fue anotado con un cobro de penal.", exp:"Rensenbrink anotó el gol 1000 en un partido Países Bajos vs Escocia.", link:"https://www.milenio.com/futbol-internacional/mundial/quien-marco-el-gol-1000-en-la-historia-de-los-mundiales" },
       { q:"¿Qué jugador se convirtió en el primero en anotar en cinco ediciones distintas del máximo torneo de selecciones?", a:"Cristiano Ronaldo", options:["Cristiano Ronaldo","Lionel Messi","Neymar Jr"], hintText:"Lo logró en Qatar 2022 al marcar contra Ghana.", exp:"Cristiano Ronaldo anotó ante Ghana en Qatar 2022 y se convirtió en el primer futbolista en marcar en cinco ediciones distintas.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
       { q:"¿Qué jugador marroquí rompió una marca de salto de Cristiano Ronaldo con su gol ante Portugal en Qatar 2022?", a:"Youssef En-Nesyri", options:["Achraf Hakimi","Hakim Ziyech","Youssef En-Nesyri"], hintText:"Su cabezazo llevó a Marruecos a semifinales.", exp:"En-Nesyri saltó 2.78 metros en su gol ante Portugal, superando la marca atribuida a Cristiano Ronaldo de 2.56 metros.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
      { q:"¿Contra qué selección consiguió México su primer punto en la máxima competencia de selecciones?", a:"Gales", options:["Suecia","Gales","Hungría"], hintText:"Fue en Suecia 1958 con gol de Jaime Belmonte.", exp:"México empató 1-1 con Gales en Suecia 1958 y consiguió su primer punto histórico.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
       { q:"¿Qué campeón defensor decidió no asistir a la siguiente edición y no defendió su título?", a:"Uruguay", options:["Italia","Alemania","Uruguay"], hintText:"Lo hizo por el desaire de las selecciones europeas al no asistir a la edición que había organizado", exp:"Uruguay ganó en 1930 y no asistió a Italia 1934, por lo que no defendió su título.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
       { q:"¿Qué país fue el primer representante africano en participar en la máxima competencia de selecciones?", a:"Egipto", options:["Egipto","Marruecos","Camerún"], hintText:"Debutó en Italia 1934.", exp:" Egipto fue el primer país africano en disputar el torneo, durante Italia 1934.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿Qué jugador marcó el único gol olímpico registrado en la máxima competencia de selecciones?", a:"Marco Coll", options:["Carlos Valderrama","Marco Coll","Faustino Asprilla"], hintText:"Lo hizo por Colombia en Chile 1962.", exp:"Marco Coll anotó el único gol olímpico registrado en la historia del torneo, ante la Unión Soviética en 1962.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" },
        { q:"¿En qué edición se usaron por primera vez tarjetas de amonestación y expulsión?", a:"1970", options:["1958","1970","1962"], hintText:"Fue la primera edición que México organizó.", exp:"En México 1970 se usaron por primera vez las tarjetas amarillas y rojas en el máximo torneo de selecciones.", link:"https://www.milenio.com/deportes/futbol-internacional/mundial" }
]
];

// ─── FUNCIÓN PARA BARAJAR ─────────────────────────────────────────────────────
function shuffleArray(arr) {
    const shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

let preguntasActuales = [];

// --- 3. ESTADO DEL JUEGO ---
let faseActual       = 0;
let preguntaIndice   = 0;
let vidas            = 5;
let goles            = 0;
let tiempo           = 12;
let crono;
let tiempoAcumulado  = 0;
// Variable local para el intervalo del confeti (antes estaba en window, contaminando el scope global)
let confettiInterval = null;

// --- 4. REFERENCIAS A MODALES ---
const modalInfo     = document.getElementById('modal-info');
const modalCreditos = document.getElementById('modal-creditos');
const modalPista    = document.getElementById('modal-pista');
const modalFeedback = document.getElementById('modal-feedback');
const modalPasaste  = document.getElementById('modal-pasaste');
const modalPuntos   = document.getElementById('modal-puntos');

// --- 5. AUDIO ---
let isMuted = false;
const todosLosAudios = [audioIntro, audioEstadio, audioTiro, audioFallo, audioGol, audioSilbato];

function toggleMute() {
    isMuted = !isMuted;
    todosLosAudios.forEach(function(a) { if (a) a.muted = isMuted; });
    document.querySelectorAll('#btn-audio-main, .btn-audio-sync').forEach(function(img) {
        img.src = isMuted ? imgSinVol : imgConVol;
        img.classList.toggle('audio-muted', isMuted);
    });
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-audio-sync') || e.target.id === 'btn-audio-main') {
        toggleMute();
    }
});

// --- 6. MODALES ---
function actualizarIconosMenu(estado) {
    document.querySelectorAll('.btn-info-trigger').forEach(function(img) {
        img.src = (estado === 'info') ? iconInfoActivo : iconInfoNormal;
    });
    document.querySelectorAll('.btn-cred-trigger').forEach(function(img) {
        img.src = (estado === 'creditos') ? iconCredActivo : iconCredNormal;
    });
}

document.querySelectorAll('.btn-info-trigger').forEach(function(btn) {
    btn.onclick = function() {
        modalCreditos.style.display = 'none';
        modalInfo.style.display = 'flex';
        actualizarIconosMenu('info');
    };
});

document.querySelectorAll('.btn-cred-trigger').forEach(function(btn) {
    btn.onclick = function() {
        modalInfo.style.display = 'none';
        modalCreditos.style.display = 'flex';
        actualizarIconosMenu('creditos');
    };
});

document.querySelectorAll('.btn-close-trigger, .close-modal').forEach(function(btn) {
    btn.onclick = function() {
        modalInfo.style.display = 'none';
        modalCreditos.style.display = 'none';
        modalPista.style.display = 'none';
        actualizarIconosMenu('reset');
    };
});

// VOLVER desde la pista: cierra modal Y reanuda el cronómetro
document.getElementById('btn-volver-juego').onclick = function() {
    modalPista.style.display = 'none';
    if (tiempo > 0) {
        iniciarCronometro();
    }
};

// --- 7. LÓGICA DEL JUEGO ---
document.getElementById('btn-jugar').onclick = function() {
    audioIntro.pause();
    audioIntro.currentTime = 0;
    audioEstadio.play();
    document.getElementById('game-container').classList.add('game-on');
    document.getElementById('menu-inicio').style.display = 'none';
    document.getElementById('campo-juego').style.display = 'flex';
    cargarPregunta();
};

function cargarPregunta() {
    if (preguntaIndice === 0) {
        preguntasActuales = shuffleArray(bancoPreguntas[faseActual]);
    }

    if (!preguntasActuales.length) return;
    const data = preguntasActuales[preguntaIndice];
    const portero = document.getElementById('portero');

    portero.src = porterosPorFase[faseActual].base;
    portero.className = '';
    portero.style.display = 'block';

    document.getElementById('pregunta-texto').innerText = data.q;
    document.getElementById('label-fase').innerText = 'Fase ' + (faseActual + 1);

    const botones = document.querySelectorAll('.btn-respuesta');
    botones.forEach(function(btn, i) {
        btn.innerText = data.options[i];
        btn.style.pointerEvents = 'auto';
        btn.onclick = (function(opcion) {
            return function() { manejarSeleccion(opcion); };
        })(data.options[i]);
    });

    const btnPista = document.getElementById('btn-pista');
    btnPista.style.opacity = '1';
    btnPista.style.pointerEvents = 'auto';
    btnPista.onclick = function() {
        document.getElementById('pista-texto-contenido').innerText = data.hintText;
        document.getElementById('btn-ver-nota').href = data.link;
        modalPista.style.display = 'flex';
        btnPista.style.opacity = '0.5';
        btnPista.style.pointerEvents = 'none';
        clearInterval(crono); // pausa al abrir pista
    };

    tiempo = 12;
    document.getElementById('cronometro').innerText = tiempo;
    iniciarCronometro();
}

function iniciarCronometro() {
    clearInterval(crono);
    crono = setInterval(function() {
        tiempo--;
        document.getElementById('cronometro').innerText = tiempo;
        if (tiempo <= 0) { clearInterval(crono); manejarSeleccion('TIMEOUT'); }
    }, 1000);
}

function manejarSeleccion(opcion) {
    if (vidas <= 0) return;
    clearInterval(crono);
    tiempoAcumulado += (12 - tiempo);
    const data = preguntasActuales[preguntaIndice];
    const esCorrecto = (opcion === data.a);
    document.querySelectorAll('.btn-respuesta').forEach(function(b) { b.style.pointerEvents = 'none'; });
    ejecutarPenal(esCorrecto);
}

function ejecutarPenal(esCorrecto) {
    const balon = document.getElementById('balon');
    const portero = document.getElementById('portero');
    const porteroData = porterosPorFase[faseActual];

    balon.style.opacity = '1'; 
    balon.style.visibility = 'visible';
    balon.style.transition = 'none'; 
    balon.style.transform = 'translateX(-50%)';
    void balon.offsetHeight;
    audioEstadio.volume = 0.1;
    audioSilbato.play(); // ← suena AL INSTANTE al elegir respuesta

    setTimeout(function() {
        balon.style.transition = 'transform 0.5s ease-out';
        audioTiro.play(); // ← 600ms después suena el tiro y se mueve el balón
        
        const esDireccionDerecha = Math.random() > 0.5;
        const ladoX = esDireccionDerecha ? '15vh' : '-15vh';

        const porteroSeTiraDerecha = esCorrecto ? !esDireccionDerecha : esDireccionDerecha;
        const spritesPortero = porteroSeTiraDerecha ? porteroData.spritesDerecha : porteroData.spritesIzquierda;

        portero.className = ''; 
        portero.classList.add(porteroSeTiraDerecha ? 'portero-der' : 'portero-izq');

       // GOL:     base(0) → /2(1) → /3(2) → /4.1(4) → /5(5)  — cae al piso
// ATAJADA: base(0) → /2(1) → /3(2) → /4(3)             — atrapa el balón
const frames = esCorrecto 
    ? [spritesPortero[2], spritesPortero[4], spritesPortero[5]]
    : [spritesPortero[2], spritesPortero[3]];

portero.src = spritesPortero[1]; // /2.png aparece al instante
let currentFrameIndex = 0;
const tiempoPorFotograma = 150; 

const spriteInterval = setInterval(function() {
    if (currentFrameIndex < frames.length) {
        portero.src = frames[currentFrameIndex];
        currentFrameIndex++;
    } else {
        clearInterval(spriteInterval);
    }
}, tiempoPorFotograma);

      if (esCorrecto) {
            // Caso: GOL (El balón entra, NO desaparece)
            balon.style.transform = 'translate(calc(-50% + ' + ladoX + '), -36vh)';
            setTimeout(function() {
                audioGol.play();
                audioEstadio.volume = 1.0;
                actualizarMarcador(true);
                mostrarModalResultado('GOL');
            }, 600);
       } else {
     balon.style.transform = 'translate(calc(-50% + ' + ladoX + '), -30vh)';

    setTimeout(function() {
        balon.style.opacity = '0';
        balon.style.visibility = 'hidden';

        audioFallo.play();
        audioEstadio.volume = 1.0;
        actualizarMarcador(false);
        mostrarModalResultado('ATAJADA');
    }, 800);
       }
    }, 600);
}

function actualizarMarcador(fueGol) {
    if (fueGol) {
        goles++;
        document.getElementById('goles-count').innerText = goles;
    } else {
        vidas--;
        const heartContainer = document.querySelector('.heart-icon');
        if (heartContainer) {
            heartContainer.innerText = '❤'.repeat(Math.max(0, vidas)) + '🖤'.repeat(Math.max(0, 5 - vidas));
        }
    }

    const dots = document.querySelectorAll('.dot');
    if (dots[preguntaIndice]) {
        dots[preguntaIndice].classList.add(fueGol ? 'green' : 'red');
    }

    if (vidas <= 0) {
        clearInterval(crono);
        document.querySelectorAll('.btn-respuesta').forEach(function(b) { b.style.pointerEvents = 'none'; });
        setTimeout(function() { mostrarPantallaFinal(false); }, 1200);
    }
}

function mostrarModalResultado(tipo) {
    const data = preguntasActuales[preguntaIndice];
    const pData = porterosPorFase[faseActual];

    document.getElementById('feedback-texto').innerText = data.exp;
    document.getElementById('btn-saber-mas').onclick = function() { window.open(data.link, '_blank'); };

    if (tipo === 'GOL') {
        document.getElementById('feedback-titulo').src = 'https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/GOL.png';
        document.getElementById('portero-reaccion').src = pData.enojado;
    } else {
        document.getElementById('feedback-titulo').src = 'https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/ATAJADA.png';
        document.getElementById('portero-reaccion').src = pData.alegre;
    }
    modalFeedback.style.display = 'flex';
}

document.getElementById('btn-siguiente').onclick = function() {
    modalFeedback.style.display = 'none';
    const balon = document.getElementById('balon');
    const portero = document.getElementById('portero');

    balon.style.opacity = '1'; 
    balon.style.visibility = 'visible';
    balon.style.transition = 'none'; 
    balon.style.transform = 'translateX(-50%)';
    void balon.offsetHeight;
    portero.className = '';

    preguntaIndice++;

    if (preguntaIndice < 8) {
        cargarPregunta();
    } else {
        if (vidas > 0) {
            mostrarModalPasaste();
        } else {
            mostrarPantallaFinal(false);
        }
    }
};
// --- 8. FASES Y FINAL ---
function mostrarModalPasaste() {
    if (faseActual >= 4) {
        mostrarPantallaCampeon();
        return;
    }

    const assetsRonda = [
        'https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/PASASAOCTAVOS.png',
        'https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CUARTOS.png',
        'https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/SEMIFINALES.png',
        'https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/GFINAL.png'
    ];

    document.getElementById('asset-titulo-ronda').src = assetsRonda[faseActual];
    document.getElementById('texto-marcastes-ganador').innerText = 'LLEVAS: ' + goles + ' GOLES';
    document.getElementById('texto-ganaste-ganador').innerText = '';

    const pData = porterosPorFase[faseActual];
    const porteroPasaste = document.getElementById('portero-pasaste-fase');
    if (porteroPasaste) porteroPasaste.src = pData.finalPierde;

    modalPasaste.style.display = 'flex';

    const btnAvanza = document.getElementById('btn-avanzar-ronda');
    if (btnAvanza) {
        btnAvanza.onclick = function() {
            modalPasaste.style.display = 'none';
            faseActual++;
            preguntaIndice = 0;
            document.querySelectorAll('.dot').forEach(function(dot) {
                dot.classList.remove('green', 'red');
            });
            // Precarga el portero de la siguiente fase al avanzar,
            // de modo que sus imágenes estén listas antes de usarse
            precargarPorterosFase(faseActual + 1);
            cargarPregunta();
        };
    }
}

function mostrarPantallaCampeon() {
    document.getElementById('puntos-titulo-img').src = 'https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/SINAD/GANASTEELFUTBOLITO.png';
    document.getElementById('portero-final-img').src = 'https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/Interactivo/copa.png';
    document.getElementById('final-goles-count').innerText = goles;
    document.getElementById('btn-puntos-reintentar').innerText = '¡JUGAR OTRA VEZ!';

    audioEstadio.pause();
    audioGol.play();
    dispararConfeti();
    modalPuntos.style.display = 'flex';
}

function dispararConfeti() {
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10001 };
    function randomInRange(min, max) { return Math.random() * (max - min) + min; }
    // Variable local en lugar de window.confettiInterval para no contaminar el scope global
    confettiInterval = setInterval(function() {
        confetti(Object.assign({}, defaults, { particleCount: 40, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount: 40, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 400);
}

function mostrarPantallaFinal(ganoMundial) {
    audioEstadio.pause();
    audioIntro.play();
    modalPasaste.style.display = 'none';
    modalFeedback.style.display = 'none';

    const pData = porterosPorFase[faseActual] || porterosPorFase[0];
    document.getElementById('final-goles-count').innerText = goles;

    if (ganoMundial) {
        document.getElementById('puntos-titulo-img').src = imgFinalPuntos;
        document.getElementById('portero-final-img').src = pData.finalPierde;
        document.getElementById('btn-puntos-reintentar').innerText = '¡OTRA VEZ!';
    } else {
        document.getElementById('puntos-titulo-img').src = imgEliminado;
        document.getElementById('portero-final-img').src = pData.finalGana;
        document.getElementById('btn-puntos-reintentar').innerText = 'REINTENTAR';
    }
    modalPuntos.style.display = 'flex';
}

// ─── FUNCIÓN COMPARTIR (centralizada — eliminada la duplicación) ──────────────
function ejecutarCompartir() {
    const texto = '¡Metí ' + goles + ' goles en Futbolito Milenio! ⚽ Respondí en ' + tiempoAcumulado + ' segundos. ¿Puedes superarme?';
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({ title: 'Mundialito Milenio', text: texto, url: url }).catch(console.error);
    } else {
        const textoCod = encodeURIComponent(texto);
        const urlCod   = encodeURIComponent(url);
        window.open('https://twitter.com/intent/tweet?text=' + textoCod + '&url=' + urlCod, '_blank');
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + urlCod + '&quote=' + textoCod, '_blank');
        window.open('https://wa.me/?text=' + textoCod + '%20' + urlCod, '_blank');
    }
}

// --- 9. BOTONES FINALES ---
document.getElementById('btn-puntos-reintentar').onclick = function() {
    clearInterval(confettiInterval);
    location.reload();
};

const btnCopaFinal = document.getElementById('btn-puntos-copa');
if (btnCopaFinal) {
    btnCopaFinal.onclick = function() {
        window.open('https://www.milenio.com/deportes/futbol-internacional/mundial', '_blank');
    };
}

const btnCompartirFinal = document.getElementById('btn-puntos-compartir');
if (btnCompartirFinal) {
    btnCompartirFinal.onclick = ejecutarCompartir;
}

// --- 10. FUNCIONES GLOBALES ---
window.irACopa = function() {
    window.open('https://www.milenio.com/deportes/futbol-internacional/mundial', '_blank');
};

// Apunta a la misma función centralizada, sin duplicar código
window.compartir = ejecutarCompartir;

// --- PAUSA/REANUDA al cambiar de pestaña ---
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        clearInterval(crono);
    } else {
        const campoVisible   = document.getElementById('campo-juego').style.display !== 'none';
        const feedbackVisible = modalFeedback.style.display === 'flex';
        const pistaVisible   = modalPista.style.display === 'flex';
        if (campoVisible && !feedbackVisible && !pistaVisible && tiempo > 0) {
            iniciarCronometro();
        }
    }
});

}); // ← cierre del DOMContentLoaded
