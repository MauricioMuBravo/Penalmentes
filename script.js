document.addEventListener('DOMContentLoaded', function() {

// --- 1. CONFIGURACIÓN Y ASSETS ---
const audioIntro = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Intro.mp3");
audioIntro.loop = true;
const audioEstadio = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/gente1.mp3");
const audioTiro = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/tiro.mp3");
const audioFallo = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/fallo.mp3");
const audioGol = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Gool.mp3");
const audioSilbato = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/silbato.mp3");

audioEstadio.loop = true;

document.addEventListener('click', function() {
    if (audioIntro.paused && document.getElementById('menu-inicio').style.display !== 'none') {
        audioIntro.play().catch(function(e) {});
    }
}, { once: true });


const iconInfoNormal = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/INFO.png";
const iconInfoActivo = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/INFONEG.png";
const iconCredNormal = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CRED.png";
const iconCredActivo = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CREDNEG.png";
const imgConVol = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CONVOL.png";
const imgSinVol = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/SINVOL.png";

const imgFinalPuntos = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/PUNTOS.png";
const imgEliminado = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/ELIMINADO.png";

const porterosPorFase = {
    0: {
        nombre: "Ochoa",
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%284%29.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%289%29.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%2810%29.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/frases/xuxin_frases%20%2810%29.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/frases/xuxin_frases%20%281%29.png"
    },
    1: {
        nombre: "Buffon",
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%284%29.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%281%29.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%286%29.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/frases/xuxin_frases%20%282%29.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/frases/xuxin_frases%20%287%29.png"
    },
    2: {
        nombre: "Jorge Campos",
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%284%29.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%287%29.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%286%29.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/frases/xuxin_frases%20%288%29.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/frases/xuxin_frases%20%287%29.png"
    },
    3: {
        nombre: "Oliver Kahn",
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%284%29.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%289%29.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%2811%29.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/frases/xuxin_frases%20%2810%29.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/frases/xuxin_frases%20%285%29.png"
    },
    4: {
        nombre: "Lev Yashin",
        base: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%284%29.png",
        alegre: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%281%29.png",
        enojado: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/soloportero/xuxin_portero%20%282%29.png",
        finalGana: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/frases/xuxin_frases%20%283%29.png",
        finalPierde: "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/PorteroBase/frases/xuxin_frases%20%286%29.png"
    }
};

const bancoPreguntas = [
    [ // Fase 1: Grupos
        { q:"¿En qué país se celebró el Mundial de 2014?", a:"Brasil", options:["Sudáfrica","Brasil","Alemania"], hintText:"Allí ocurrió el famoso 7-1 en semifinales.", exp:"El Mundial 2014 se jugó en Brasil, donde Alemania derrotó 7-1 a Brasil en semifinales.", link:"https://www.milenio.com/deportes/futbol-internacional/a-8-anos-brasil-1-7-alemania-copa-del-mundo-de-2014" },
        { q:"¿Qué jugador es conocido como 'La Pulga'?", a:"Lionel Messi", options:["Lionel Messi","Luka Modrić","Neymar"], hintText:"ganó el Mundial en 2022.", exp:"Lionel Messi, capitán de Argentina, es apodado 'La Pulga' y ganó el Mundial en 2022.", link:"https://www.milenio.com/deportes/futbol-internacional/lio-o-leo-cual-es-el-verdadero-apodo-de-messi" },
        { q:"¿Qué jugador marcó el famoso 'Gol del Siglo' en 1986?", a:"Diego Maradona", options:["Ronaldo Nazário","Pelé","Diego Maradona"], hintText:"También anotó 'La Mano de Dios' en ese partido.", exp:"Maradona marcó el 'Gol del Siglo' ante Inglaterra en el Mundial de México 1986.", link:"https://www.milenio.com/deportes/futbol-internacional/diego-armando-maradona-36-anos-mano-dios-gol-siglo" },
        { q:"¿Qué selección africana fue la primera en llegar a semifinales de un Mundial?", a:"Marruecos", options:["Nigeria","Camerún","Marruecos"], hintText:"Lo logró en Qatar 2022.", exp:"Marruecos hizo historia en 2022 al convertirse en la primera selección africana en alcanzar semifinales.", link:"https://www.milenio.com/deportes/africa-orgullosa-avance-marruecos-qatar-2022" },
        { q:"¿Qué jugador portugués es el máximo goleador histórico de su selección?", a:"Cristiano Ronaldo", options:["Luís Figo","Eusébio","Cristiano Ronaldo"], hintText:"Ha jugado cinco Mundiales y ganó la Eurocopa 2016.", exp:"Cristiano Ronaldo es el máximo goleador histórico de Portugal.", link:"https://www.milenio.com/deportes/extra-cancha/cristiano-ronaldo-ya-es-el-maximo-goleador-de-portugal" },
        { q:"¿Qué selección goleó a España en fase de grupos del Mundial 2014?", a:"Países Bajos", options:["Países Bajos","Chile","Croacia"], hintText:"La derrotó 5-1 en su debut.", exp:"Países Bajos goleó 5-1 a España en Brasil 2014, en una revancha de la final de 2010.", link:"https://www.milenio.com/deportes/extra-cancha/humillacion-prensa-espanola-sobre-goleada-de-holanda" },
        { q:"¿Qué jugador colombiano ganó la Bota de Oro en el Mundial 2014?", a:"James Rodríguez", options:["Radamel Falcao","Juan Cuadrado","James Rodríguez"], hintText:"Su gol a Uruguay fue uno de los mejores del torneo.", exp:"James Rodríguez fue el máximo goleador de Brasil 2014 con seis goles.", link:"https://www.milenio.com/deportes/extra-cancha/james-recibio-la-bota-de-oro" },
        { q:"¿Qué selección fue anfitriona del primer Mundial en 1930?", a:"Uruguay", options:["Argentina","Uruguay","Brasil"], hintText:"También fue el primer campeón.", exp:"Uruguay organizó y ganó el primer Mundial de la historia en 1930.", link:"https://www.milenio.com/futbol-internacional/mundial/mundial-historia-copa-mundo-uruguay-1930" }
    ],
    [ // Fase 2: Octavos
        { q:"¿Quién fue el máximo goleador del Mundial 2006?", a:"Miroslav Klose", options:["Miroslav Klose","Lukas Podolski","Thomas Müller"], hintText:"Anotó cinco goles y marcó su camino para ser el máximo goleador histórico.", exp:"Miroslav Klose tiene 16 goles en Mundiales.", link:"https://www.milenio.com/deportes/extra-cancha/klose-rompe-marca-de-goles-en-mundiales" },
        { q:"¿Qué selección sorprendió al llegar a semifinales en el Mundial 2018?", a:"Croacia", options:["Bélgica","Dinamarca","Croacia"], hintText:"Eliminó a Rusia en penales en cuartos.", exp:"Croacia llegó hasta la final en 2018, sorprendiendo al mundo.", link:"https://www.milenio.com/deportes/rusia-2018/croacia-avanza-semifinales-termina-sueno-rusia" },
        { q:"¿Qué jugador anotó el gol del título en el Mundial 2014?", a:"Mario Götze", options:["Thomas Müller","Mario Götze","Mesut Özil"], hintText:"Entró como suplente en la final.", exp:"Götze marcó en tiempo extra el gol que dio el título a Alemania ante Argentina.", link:"https://www.milenio.com/deportes/extra-cancha/el-analisis-del-alemania-argentina" },
        { q:"¿Qué selección fue campeona del mundo en 1954 tras vencer a Hungría en la final?", a:"Alemania Occidental", options:["Alemania Occidental","Italia","Uruguay"], hintText:"Se le conoce como el 'Milagro de Berna'.", exp:"Alemania Occidental ganó el Mundial de 1954 venciendo a la poderosa Hungría.", link:"https://www.milenio.com/futbol-internacional/mundial/alemania-y-milagro-de-berna-con-el-que-gano-mundial-de-suiza-1954" },
        { q:"¿Qué selección eliminó a Alemania en fase de grupos del Mundial 2018?", a:"Corea del Sur", options:["Japón","México","Corea del Sur"], hintText:"Fue una victoria histórica en el último minuto.", exp:"Corea del Sur venció 2-0 a Alemania, eliminando al campeón defensor.", link:"https://www.milenio.com/deportes/rusia-2018/corea-derrota-alemania-echa-manita-mexico" },
        { q:"¿Qué país perdió la final del Mundial de 1978?", a:"Países Bajos", options:["Países Bajos","Brasil","Italia"], hintText:"El torneo estuvo lleno de polémica.", exp:"Argentina ganó su primer Mundial en 1978 como local, venciendo a Países Bajos en la final.", link:"https://www.milenio.com/deportes/extra-cancha/el-derrumbe-de-la-naranja-mecanica" },
        { q:"¿Qué jugador ganó el Balón de Oro del Mundial 2018?", a:"Luka Modrić", options:["Kylian Mbappé","Luka Modrić","Antoine Griezmann"], hintText:"Fue clave en el subcampeonato de su selección.", exp:"Modrić fue el mejor jugador del torneo en Rusia 2018.", link:"https://www.milenio.com/deportes/rusia-2018/luka-modric-gana-balon-oro-mundial-rusia-2018" },
        { q:"¿En qué estadio se jugó la final del Mundial 1998?", a:"Stade de France", options:["Parque de los Príncipes","Stade de France","Vélodrome"], hintText:"Está ubicado en Saint-Denis.", exp:"La final Francia vs Brasil de 1998 se disputó en el Stade de France.", link:"https://www.milenio.com/futbol-internacional/mundial/francia-1998-ultimo-mundial-del-siglo-xx-que-vio-titulo-local" }
    ],
    [ // Fase 3: Cuartos
        { q:"¿Quién marcó el gol de la victoria en la final del Mundial 2010?", a:"Andrés Iniesta", options:["David Villa","Andrés Iniesta","Xavi Hernández"], hintText:"El tanto llegó en el minuto 116.", exp:"Iniesta marcó el gol del título ante Países Bajos en tiempo extra.", link:"https://www.milenio.com/deportes/futbol-internacional/andres-iniesta-el-discreto-autor-del-gol-mas-importante-de-espana" },
        { q:"¿Qué jugador fue expulsado en el minuto 0 en un Mundial?", a:"José Batista", options:["José Batista","Diego Maradona","Hugo Sánchez"], hintText:"Fue en 1986.", exp:"Batista fue expulsado a los pocos segundos en México 1986.", link:"https://www.milenio.com/futbol-internacional/mundial/batista-y-la-expulsion-mas-rapida-en-la-historia-del-mundial" },
        { q:"¿Qué jugador fue expulsado por un cabezazo en la final del Mundial 2006?", a:"Zinedine Zidane", options:["Zinedine Zidane","Thierry Henry","Fabio Cannavaro"], hintText:"Fue su último partido profesional.", exp:"Zidane fue expulsado por el cabezazo a Materazzi en la prórroga de la final de 2006.", link:"https://www.milenio.com/futbol-internacional/mundial/mundial-de-alemania-2006-la-triste-final-de-zinedine-zidane" },
        { q:"¿Qué jugador anotó un hat-trick en una final de Mundial en 2022?", a:"Kylian Mbappé", options:["Lionel Messi","Kylian Mbappé","Ángel Di María"], hintText:"A pesar de eso, no ganó el título.", exp:"Mbappé marcó tres goles en la final, pero Francia perdió en penales ante Argentina.", link:"https://www.milenio.com/futbol-internacional/mundial/mbappe-campeon-goleo-qatar-heredero-messi-cristiano" },
        { q:"¿Qué selección eliminó a México en 1994 en penales?", a:"Bulgaria", options:["Bulgaria","Alemania","Argentina"], hintText:"El partido fue 1-1.", exp:"Bulgaria eliminó a México en penales en Estados Unidos 1994.", link:"https://www.milenio.com/futbol/seleccion-mexicana/jorge-campos-culpa-luis-garcia-eliminacion-tri-mundial-eu" },
        { q:"¿Qué selección eliminó a Argentina en el Mundial 2002 en fase de grupos?", a:"Suecia", options:["Suecia","Inglaterra","Nigeria"], hintText:"Fue un empate clave el que selló su eliminación.", exp:"Argentina no pudo vencer a Suecia y quedó fuera en fase de grupos.", link:"https://www.milenio.com/futbol-internacional/mundial/argentina-2002-el-empate-con-suecia-que-los-elimino" },
        { q:"¿Qué objeto fue robado antes del Mundial de 1966 y recuperado por un perro llamado Pickles?", a:"La Copa Jules Rimet", options:["El balón oficial","La Copa Jules Rimet","La bandera de Inglaterra"], hintText:"Era el trofeo original del torneo.", exp:"El trofeo Jules Rimet fue robado meses antes del Mundial de Inglaterra 1966 y apareció gracias a Pickles.", link:"https://www.milenio.com/deportes/futbol-internacional/pickles-perro-rescato-jules-rimet-mundial-1966" },
        { q:"¿Quién anotó el primer gol en la historia de los Mundiales?", a:"Lucien Laurent", options:["Lucien Laurent","Raymond Kopa","Just Fontaine"], hintText:"Fue Francia vs México en 1930.", exp:"Lucien Laurent marcó el primer gol en la historia de los Mundiales.", link:"https://www.milenio.com/deportes/extra-cancha/once-goles-historicos-en-el-mundial" }
    ],
    [ // Fase 4: Semis
        { q:"¿Quién anotó el gol más rápido en la historia de los Mundiales?", a:"Hakan Şükür", options:["Clint Dempsey","Hakan Şükür","Miroslav Klose"], hintText:"Ocurrió a los 11 segundos.", exp:"Hakan Şükür marcó a los 11 segundos en 2002, récord histórico.", link:"https://www.milenio.com/deportes/extra-cancha/los-goles-mas-rapidos-en-la-historia-del-futbol" },
        { q:"¿Qué jugador colombiano fue asesinado a causa de un autogol en el Mundial de 1994?", a:"Andrés Escobar", options:["René Higuita","Francisco Maturana","Andrés Escobar"], hintText:"El autogol representó el 2-1 en contra ante Estados Unidos.", exp:"Uno de los episodios más trágicos en la historia del futbol.", link:"https://www.milenio.com/deportes/futbol-internacional/andres-escobar-25-anos-muerte-autogol-mundial-1994" },
        { q:"¿Qué país tuvo que renunciar a organizar el Mundial de 1986?", a:"Colombia", options:["Argentina","Colombia","Chile"], hintText:"A la fecha no ha organizado una Copa del Mundo.", exp:"Colombia renunció por imposibilidad económica y falta de infraestructura.", link:"https://www.milenio.com/futbol-internacional/mundial/el-dia-que-estados-unidos-intento-robarle-un-mundial-a-mexico" },
        { q:"¿Qué jugador anotó el gol que eliminó a México en el Mundial 2014 en tiempo extra?", a:"Klaas-Jan Huntelaar", options:["Arjen Robben","Wesley Sneijder","Klaas-Jan Huntelaar"], hintText:"El partido fue contra Países Bajos.", exp:"Huntelaar marcó el penal definitivo tras la polémica falta sobre Robben.", link:"https://www.milenio.com/futbol-internacional/mundial/mexico-fue-eliminado-por-holanda-en-mundial-de-brasil-2014" },
        { q:"¿Qué selección fue eliminada por Senegal en el Mundial 2002?", a:"Francia", options:["Brasil","Francia","Alemania"], hintText:"Fue víctima de la maldición del campeón.", exp:"Senegal venció a Francia en el partido inaugural, marcando una de las mayores sorpresas.", link:"https://www.milenio.com/futbol-internacional/mundial/senegal-elimino-a-francia-en-el-mundial-2002" },
        { q:"¿Cuál es la mayor goleada en la historia del Mundial?", a:"Hungría 10-1 El Salvador", options:["Hungría 10-1 El Salvador","Portugal 7-0 Corea del Norte","Yugoslavia 9-0 Zaire"], hintText:"Sucedió en España en 1982.", exp:"Hungría goleó 10-1 a El Salvador en fase de grupos.", link:"https://www.milenio.com/deportes/futbol-internacional/copa-mundo-salvador-goleada-siglo-unio" },
        { q:"¿Quién es el único jugador en hacer hat-tricks en dos ediciones consecutivas del Mundial?", a:"Gabriel Batistuta", options:["Cristiano Ronaldo","Lionel Messi","Gabriel Batistuta"], hintText:"El primero fue ante Grecia y el segundo ante Jamaica.", exp:"El primero fue en Estados Unidos 1994 y el segundo en Francia 1998.", link:"https://www.milenio.com/futbol-internacional/mundial/batistuta-unico-con-hat-tricks-en-dos-mundiales-seguidos" },
        { q:"¿Cuál es la selección que ha recibido más goles en la historia de los Mundiales?", a:"Alemania", options:["Alemania","Brasil","México"], hintText:"Es también una de las que más apariciones tiene.", exp:"Alemania, al ser uno de los equipos con más participaciones, se convierte también en la que más goles ha recibido.", link:"https://www.milenio.com/futbol-internacional/mundial/alemania-la-seleccion-con-mas-goles-recibidos-en-mundiales" }
    ],
    [ // Fase 5: Final
        { q:"¿Qué equipo jugó con playeras piratas en un Mundial?", a:"Argentina", options:["México","España","Argentina"], hintText:"De no haberlo hecho, hubiera perdido por default.", exp:"En México 1986 el equipo resolvió de emergencia el uniforme con playeras conseguidas en Tepito.", link:"https://www.milenio.com/futbol-internacional/mundial/maradona-la-playera-de-tepito-que-uso-con-argentina-en-mexico-1986" },
        { q:"¿Qué jugador fue el más joven en debutar en un Mundial?", a:"Norman Whiteside", options:["Pelé","Norman Whiteside","Kylian Mbappé"], hintText:"Jugó en 1982 con solo 17 años.", exp:"El norirlandés debutó en España 1982 con 17 años y 42 días.", link:"https://www.milenio.com/futbol-internacional/mundial/mundial-de-qatar-2022-los-records-que-se-buscaran-romper" },
        { q:"¿Qué selección fue la primera en ganar un Mundial sin recibir goles en eliminación directa?", a:"Italia", options:["Italia","Brasil","Francia"], hintText:"Lo logró vestida de azul.", exp:"Italia ganó el Mundial 2006 sin recibir goles en eliminación directa.", link:"https://www.milenio.com/deportes/la-aficion-90/italia-levanta-titulo-mundial-alemania-2006" },
        { q:"¿Qué jugador fue el primero en marcar en cuatro Mundiales distintos?", a:"Uwe Seeler", options:["Miroslav Klose","Pelé","Uwe Seeler"], hintText:"Lo logró antes que Cristiano Ronaldo y Messi.", exp:"El alemán Uwe Seeler fue uno de los primeros futbolistas en anotar en cuatro Copas del Mundo distintas.", link:"https://www.milenio.com/deportes/rusia-2018/cristiano-cuarto-jugador-que-marca-en-cuatro-mundiales" },
        { q:"¿Qué jugador tiene más partidos disputados en la historia de los Mundiales?", a:"Lionel Messi", options:["Lothar Matthäus","Lionel Messi","Miroslav Klose"], hintText:"Superó el récord en Qatar 2022.", exp:"Messi rompió el récord de Matthäus y se convirtió en el jugador con más partidos en Mundiales.", link:"https://www.milenio.com/futbol-internacional/mundial/lionel-messi-jugador-partidos-historia-mundiales" },
        { q:"¿Qué jugador disputó 5 Mundiales consecutivos entre 1982 y 1998?", a:"Lothar Matthäus", options:["Lothar Matthäus","Franz Beckenbauer","Karl-Heinz Rummenigge"], hintText:"Es uno de los grandes capitanes de Alemania.", exp:"Matthäus jugó cinco Copas del Mundo consecutivas con Alemania.", link:"https://www.milenio.com/deportes/futbol-internacional/rafa-marquez-gano-quinto-mundial-lothar-matthaus" },
        { q:"¿Qué selección fue la primera en perder una final de Mundial por penales?", a:"Italia", options:["Brasil","Alemania","Italia"], hintText:"Ocurrió en 1994.", exp:"Italia perdió ante Brasil en penales en la final de 1994, la primera definida de esa forma.", link:"https://www.milenio.com/deportes/futbol-internacional/leyendas-brasil-italia-recrearan-unidos-1994" },
        { q:"¿Qué jugador marcó el gol 1000 en la historia de los Mundiales?", a:"Rob Rensenbrink", options:["Cristiano Ronaldo","Lionel Messi","Rob Rensenbrink"], hintText:"El tanto fue anotado con un cobro de penal.", exp:"Rensenbrink anotó el gol 1000 en un partido Países Bajos vs Escocia.", link:"https://www.milenio.com/futbol-internacional/mundial/quien-marco-el-gol-1000-en-la-historia-de-los-mundiales" }
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
let faseActual = 0;
let preguntaIndice = 0;
let vidas = 5;
let goles = 0;
let tiempo = 12;
let crono;

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

// Cerrar modales de info/créditos (NO afecta la pista)
document.querySelectorAll('.btn-close-trigger, .close-modal').forEach(function(btn) {
    btn.onclick = function() {
        modalInfo.style.display = 'none';
        modalCreditos.style.display = 'none';
        modalPista.style.display = 'none';
        actualizarIconosMenu('reset');
    };
});

// ✅ VOLVER desde la pista: cierra modal Y reanuda el cronómetro
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
        // ✅ PAUSA el cronómetro al abrir la pista
        clearInterval(crono);
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
    const data = preguntasActuales[preguntaIndice];
    const esCorrecto = (opcion === data.a);
    document.querySelectorAll('.btn-respuesta').forEach(function(b) { b.style.pointerEvents = 'none'; });
    ejecutarPenal(esCorrecto);
}

function ejecutarPenal(esCorrecto) {
    const balon = document.getElementById('balon');
    const portero = document.getElementById('portero');

    audioEstadio.volume = 0.1;
    audioSilbato.play();

    setTimeout(function() {
        audioTiro.play();
        const ladoX = Math.random() > 0.5 ? '15vh' : '-15vh';
        balon.style.transition = 'transform 0.5s ease-out';

        if (esCorrecto) {
            balon.style.transform = 'translate(calc(-50% + ' + ladoX + '), -36vh)';
            portero.classList.add(ladoX === '15vh' ? 'portero-izq' : 'portero-der');
            setTimeout(function() {
                audioGol.play();
                audioEstadio.volume = 1.0;
                actualizarMarcador(true);
                mostrarModalResultado('GOL');
            }, 500);
        } else {
            balon.style.transform = 'translate(calc(-50% + ' + ladoX + '), -30vh)';
            portero.classList.add(ladoX === '15vh' ? 'portero-der' : 'portero-izq');
            setTimeout(function() {
                audioFallo.play();
                audioEstadio.volume = 1.0;
                balon.style.opacity = '0';
                actualizarMarcador(false);
                mostrarModalResultado('ATAJADA');
            }, 500);
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

    balon.style.transition = 'none';
    balon.style.opacity = '1';  
    balon.style.transform = 'translate(-50%, -50%)';
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
    document.getElementById('texto-marcastes-ganador').innerText = 'HAS ANOTADO: ' + goles + ' GOLES';
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
            cargarPregunta();
        };
    }
}

function mostrarPantallaCampeon() {
    document.getElementById('puntos-titulo-img').src = 'https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/GANASTELMUNDIALITO.png';
    document.getElementById('portero-final-img').src = 'https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/copa2.png';
    document.getElementById('final-goles-count').innerText = goles;
    document.getElementById('btn-puntos-reintentar').innerText = '¡JUGAR OTRA VEZ!';

    audioEstadio.pause();
    audioGol.play();
    dispararConfeti();
    modalPuntos.style.display = 'flex';
}

function dispararConfeti() {
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10001 };
    function randomInRange(min, max) { return Math.random() * (max - min) + min; }
    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
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

// --- 9. BOTONES FINALES ---
document.getElementById('btn-puntos-reintentar').onclick = function() { location.reload(); };

const btnCopaFinal = document.getElementById('btn-puntos-copa');
if (btnCopaFinal) {
    btnCopaFinal.onclick = function() {
        window.open('https://www.milenio.com/deportes/futbol-internacional/mundial', '_blank');
    };
}

const btnCompartirFinal = document.getElementById('btn-puntos-compartir');
if (btnCompartirFinal) {
    btnCompartirFinal.onclick = function() {
        const texto = '¡Metí ' + goles + ' goles en el Mundialito Milenio! ⚽ ¿Puedes superarme?';
        if (navigator.share) {
            navigator.share({ title: 'Mundialito Milenio', text: texto, url: window.location.href }).catch(console.error);
        } else {
            window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(texto), '_blank');
        }
    };
}

// --- 10. FUNCIONES GLOBALES ---
window.irACopa = function() {
    window.open('https://www.milenio.com/deportes/futbol-internacional/mundial', '_blank');
};

window.compartir = function() {
    const texto = '¡Metí ' + goles + ' goles en el Mundialito Milenio! ⚽ ¿Puedes superarme?';
    if (navigator.share) {
        navigator.share({ title: 'Mundialito Milenio', text: texto, url: window.location.href }).catch(console.error);
    } else {
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(texto), '_blank');
    }
};
// --- PAUSA/REANUDA al cambiar de pestaña ---
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Usuario salió de la pestaña → pausar cronómetro
        clearInterval(crono);
    } else {
        // Usuario regresó → reanudar solo si hay tiempo restante y el juego está activo
        const campoVisible = document.getElementById('campo-juego').style.display !== 'none';
        const feedbackVisible = modalFeedback.style.display === 'flex';
        const pistaVisible = modalPista.style.display === 'flex';

        if (campoVisible && !feedbackVisible && !pistaVisible && tiempo > 0) {
            iniciarCronometro();
        }
    }
});
}); // ← cierre del DOMContentLoaded
