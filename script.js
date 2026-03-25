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
        audioIntro.play().catch(function(e) { console.log("Audio en espera de interacción"); });
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
    [ // Fase 1: Grupos
        { q:"\u00bfEn qu\u00e9 pa\u00eds se celebr\u00f3 el Mundial de 2014?", a:"Brasil", options:["Sud\u00e1frica","Brasil","Alemania"], hintText:"All\u00ed ocurri\u00f3 el famoso 7-1 en semifinales.", exp:"El Mundial 2014 se jug\u00f3 en Brasil, donde Alemania derrot\u00f3 7-1 a Brasil en semifinales.", link:"https://www.milenio.com/deportes/futbol-internacional/a-8-anos-brasil-1-7-alemania-copa-del-mundo-de-2014" },
        { q:"\u00bfQu\u00e9 jugador es conocido como 'La Pulga'?", a:"Lionel Messi", options:["Lionel Messi","Luka Modri\u0107","Neymar"], hintText:"gan\u00f3 el Mundial en 2022.", exp:"Lionel Messi, capit\u00e1n de Argentina, es apodado 'La Pulga' y gan\u00f3 el Mundial en 2022.", link:"https://www.milenio.com/deportes/futbol-internacional/lio-o-leo-cual-es-el-verdadero-apodo-de-messi" },
        { q:"\u00bfQu\u00e9 jugador marc\u00f3 el famoso 'Gol del Siglo' en 1986?", a:"Diego Maradona", options:["Ronaldo Naz\u00e1rio","Pel\u00e9","Diego Maradona"], hintText:"Tambi\u00e9n anot\u00f3 'La Mano de Dios' en ese partido.", exp:"Maradona marc\u00f3 el 'Gol del Siglo' ante Inglaterra en el Mundial de M\u00e9xico 1986.", link:"https://www.milenio.com/deportes/futbol-internacional/diego-armando-maradona-36-anos-mano-dios-gol-siglo" },
        { q:"\u00bfQu\u00e9 selecci\u00f3n africana fue la primera en llegar a semifinales de un Mundial?", a:"Marruecos", options:["Nigeria","Camer\u00fan","Marruecos"], hintText:"Lo logr\u00f3 en Qatar 2022.", exp:"Marruecos hizo historia en 2022 al convertirse en la primera selecci\u00f3n africana en alcanzar semifinales.", link:"https://www.milenio.com/deportes/africa-orgullosa-avance-marruecos-qatar-2022" },
        { q:"\u00bfQu\u00e9 jugador portugu\u00e9s es el m\u00e1ximo goleador hist\u00f3rico de su selecci\u00f3n?", a:"Cristiano Ronaldo", options:["Lu\u00eds Figo","Eus\u00e9bio","Cristiano Ronaldo"], hintText:"Ha jugado cinco Mundiales y gan\u00f3 la Eurocopa 2016.", exp:"Cristiano Ronaldo es el m\u00e1ximo goleador hist\u00f3rico de Portugal.", link:"https://www.milenio.com/deportes/futbol/mundial-1930-historia-primer-campeonato-mundo" },
        { q:"\u00bfQu\u00e9 selecci\u00f3n elimin\u00f3 a Espa\u00f1a en fase de grupos del Mundial 2014?", a:"Pa\u00edses Bajos", options:["Pa\u00edses Bajos","Chile","Croacia"], hintText:"La derrot\u00f3 5-1 en su debut.", exp:"Pa\u00edses Bajos gole\u00f3 5-1 a Espa\u00f1a en Brasil 2014, en una revancha de la final de 2010.", link:"https://www.milenio.com/deportes/extra-cancha/humillacion-prensa-espanola-sobre-goleada-de-holanda" },
        { q:"\u00bfQu\u00e9 jugador colombiano gan\u00f3 la Bota de Oro en el Mundial 2014?", a:"James Rodr\u00edguez", options:["Radamel Falcao","Juan Cuadrado","James Rodr\u00edguez"], hintText:"Su gol a Uruguay fue uno de los mejores del torneo.", exp:"James Rodr\u00edguez fue el m\u00e1ximo goleador de Brasil 2014 con seis goles.", link:"https://www.milenio.com/deportes/extra-cancha/james-recibio-la-bota-de-oro" },
        { q:"\u00bfQu\u00e9 selecci\u00f3n fue anfitri\u00f3na del primer Mundial en 1930?", a:"Uruguay", options:["Argentina","Uruguay","Brasil"], hintText:"Tambi\u00e9n fue el primer campe\u00f3n.", exp:"Uruguay organiz\u00f3 y gan\u00f3 el primer Mundial de la historia en 1930.", link:"https://www.milenio.com/deportes/futbol-internacional/uruguay-primer-campeon-mundial-1930" }
    ],
    [ // Fase 2: Octavos
        { q:"\u00bfQui\u00e9n fue el m\u00e1ximo goleador del Mundial 2006?", a:"Miroslav Klose", options:["Miroslav Klose","Lukas Podolski","Thomas M\u00fcller"], hintText:"Anot\u00f3 cinco goles y marc\u00f3 su camino para ser el m\u00e1ximo goleador hist\u00f3rico.", exp:"Miroslav Klose tiene 16 goles en Mundiales.", link:"https://www.milenio.com/deportes/extra-cancha/klose-rompe-marca-de-goles-en-mundiales" },
        { q:"\u00bfQu\u00e9 selecci\u00f3n sorprendi\u00f3 al llegar a semifinales en el Mundial 2018?", a:"Croacia", options:["B\u00e9lgica","Dinamarca","Croacia"], hintText:"Elimin\u00f3 a Rusia en penales en cuartos.", exp:"Croacia lleg\u00f3 hasta la final en 2018, sorprendiendo al mundo.", link:"https://www.milenio.com/deportes/rusia-2018/croacia-avanza-semifinales-termina-sueno-rusia" },
        { q:"\u00bfQu\u00e9 jugador anot\u00f3 el gol del t\u00edtulo en el Mundial 2014?", a:"Mario G\u00f6tze", options:["Thomas M\u00fcller","Mario G\u00f6tze","Mesut \u00d6zil"], hintText:"Entr\u00f3 como suplente en la final.", exp:"G\u00f6tze marc\u00f3 en tiempo extra el gol que dio el t\u00edtulo a Alemania ante Argentina.", link:"https://www.milenio.com/deportes/extra-cancha/el-analisis-del-alemania-argentina" },
        { q:"\u00bfQu\u00e9 selecci\u00f3n fue campeona del mundo en 1954 tras vencer a Hungr\u00eda en la final?", a:"Alemania Occidental", options:["Alemania Occidental","Italia","Uruguay"], hintText:"Se le conoce como el 'Milagro de Berna'.", exp:"Alemania Occidental gan\u00f3 el Mundial de 1954 venciendo a la poderosa Hungr\u00eda.", link:"https://www.milenio.com/futbol-internacional/mundial/alemania-y-milagro-de-berna-con-el-que-gano-mundial-de-suiza-1954" },
        { q:"\u00bfQu\u00e9 selecci\u00f3n elimin\u00f3 a Alemania en fase de grupos del Mundial 2018?", a:"Corea del Sur", options:["Jap\u00f3n","M\u00e9xico","Corea del Sur"], hintText:"Fue una victoria hist\u00f3rica en el \u00faltimo minuto.", exp:"Corea del Sur venci\u00f3 2-0 a Alemania, eliminando al campe\u00f3n defensor.", link:"https://www.milenio.com/deportes/rusia-2018/corea-derrota-alemania-echa-manita-mexico" },
        { q:"\u00bfQu\u00e9 pa\u00eds perdi\u00f3 la final del Mundial de 1978?", a:"Pa\u00edses Bajos", options:["Pa\u00edses Bajos","Brasil","Italia"], hintText:"El torneo estuvo lleno de pol\u00e9mica.", exp:"Argentina gan\u00f3 su primer Mundial en 1978 como local, venciendo a Pa\u00edses Bajos en la final.", link:"https://www.milenio.com/deportes/extra-cancha/el-derrumbe-de-la-naranja-mecanica" },
        { q:"\u00bfQu\u00e9 jugador gan\u00f3 el Bal\u00f3n de Oro del Mundial 2018?", a:"Luka Modri\u0107", options:["Kylian Mbapp\u00e9","Luka Modri\u0107","Antoine Griezmann"], hintText:"Fue clave en el subcampeonato de su selecci\u00f3n.", exp:"Modri\u0107 fue el mejor jugador del torneo en Rusia 2018.", link:"https://www.milenio.com/deportes/rusia-2018/luka-modric-gana-balon-oro-mundial-rusia-2018" },
        { q:"\u00bfEn qu\u00e9 estadio se jug\u00f3 la final del Mundial 1998?", a:"Stade de France", options:["Parque de los Pr\u00edncipes","Stade de France","V\u00e9lodrome"], hintText:"Est\u00e1 ubicado en Saint-Denis.", exp:"La final Francia vs Brasil de 1998 se disput\u00f3 en el Stade de France.", link:"https://www.milenio.com/futbol-internacional/mundial/francia-1998-ultimo-mundial-del-siglo-xx-que-vio-titulo-local" }
    ],
    [ // Fase 3: Cuartos
        { q:"\u00bfQui\u00e9n marc\u00f3 el gol de la victoria en la final del Mundial 2010?", a:"Andr\u00e9s Iniesta", options:["David Villa","Andr\u00e9s Iniesta","Xavi Hern\u00e1ndez"], hintText:"El tanto lleg\u00f3 en el minuto 116.", exp:"Iniesta marc\u00f3 el gol del t\u00edtulo ante Pa\u00edses Bajos en tiempo extra.", link:"https://www.milenio.com/deportes/futbol-internacional/andres-iniesta-el-discreto-autor-del-gol-mas-importante-de-espana" },
        { q:"\u00bfQu\u00e9 jugador fue expulsado en el minuto 0 en un Mundial?", a:"Jos\u00e9 Batista", options:["Jos\u00e9 Batista","Diego Maradona","Hugo S\u00e1nchez"], hintText:"Fue en 1986.", exp:"Batista fue expulsado a los pocos segundos en M\u00e9xico 1986.", link:"https://www.milenio.com/deportes/extra-cancha/expulsion-mas-rapida-mundial" },
        { q:"\u00bfQu\u00e9 jugador fue expulsado por un cabezazo en la final del Mundial 2006?", a:"Zinedine Zidane", options:["Zinedine Zidane","Thierry Henry","Fabio Cannavaro"], hintText:"Fue su \u00faltimo partido profesional.", exp:"Zidane fue expulsado por el cabezazo a Materazzi en la pr\u00f3rroga de la final de 2006.", link:"https://www.milenio.com/futbol-internacional/mundial/mundial-de-alemania-2006-la-triste-final-de-zinedine-zidane" },
        { q:"\u00bfQu\u00e9 jugador anot\u00f3 un hat-trick en una final de Mundial en 2022?", a:"Kylian Mbapp\u00e9", options:["Lionel Messi","Kylian Mbapp\u00e9","\u00c1ngel Di Mar\u00eda"], hintText:"A pesar de eso, no gan\u00f3 el t\u00edtulo.", exp:"Mbapp\u00e9 marc\u00f3 tres goles en la final, pero Francia perdi\u00f3 en penales ante Argentina.", link:"https://www.milenio.com/deportes/futbol-internacional/mbappe-hat-trick-final-mundial-2022" },
        { q:"\u00bfQu\u00e9 selecci\u00f3n elimin\u00f3 a M\u00e9xico en 1994 en penales?", a:"Bulgaria", options:["Bulgaria","Alemania","Argentina"], hintText:"El partido fue 1-1.", exp:"Bulgaria elimin\u00f3 a M\u00e9xico en penales en Estados Unidos 1994.", link:"https://www.milenio.com/futbol/seleccion-mexicana/jorge-campos-culpa-luis-garcia-eliminacion-tri-mundial-eu" },
        { q:"\u00bfQu\u00e9 selecci\u00f3n elimin\u00f3 a Argentina en el Mundial 2002 en fase de grupos?", a:"Suecia", options:["Suecia","Inglaterra","Nigeria"], hintText:"Fue un empate clave el que sell\u00f3 su eliminaci\u00f3n.", exp:"Argentina no pudo vencer a Suecia y qued\u00f3 fuera en fase de grupos.", link:"https://www.milenio.com/deportes/futbol-internacional/argentina-eliminacion-2002" },
        { q:"\u00bfQu\u00e9 objeto fue robado antes del Mundial de 1966 y recuperado por un perro llamado Pickles?", a:"La Copa Jules Rimet", options:["El bal\u00f3n oficial","La Copa Jules Rimet","La bandera de Inglaterra"], hintText:"Era el trofeo original del torneo.", exp:"El trofeo Jules Rimet fue robado meses antes del Mundial de Inglaterra 1966 y apareci\u00f3 gracias a Pickles.", link:"https://www.milenio.com/deportes/futbol-internacional/pickles-perro-rescato-jules-rimet-mundial-1966" },
        { q:"\u00bfQui\u00e9n anot\u00f3 el primer gol en la historia de los Mundiales?", a:"Lucien Laurent", options:["Lucien Laurent","Raymond Kopa","Just Fontaine"], hintText:"Fue Francia vs M\u00e9xico en 1930.", exp:"Lucien Laurent marc\u00f3 el primer gol en la historia de los Mundiales.", link:"https://www.milenio.com/deportes/extra-cancha/once-goles-historicos-en-el-mundial" }
    ],
    [ // Fase 4: Semis
        { q:"\u00bfQui\u00e9n anot\u00f3 el gol m\u00e1s r\u00e1pido en la historia de los Mundiales?", a:"Hakan \u015e\u00fck\u00fcr", options:["Clint Dempsey","Hakan \u015e\u00fck\u00fcr","Miroslav Klose"], hintText:"Ocurri\u00f3 a los 11 segundos.", exp:"Hakan \u015e\u00fck\u00fcr marc\u00f3 a los 11 segundos en 2002, r\u00e9cord hist\u00f3rico.", link:"https://www.milenio.com/deportes/extra-cancha/dempsey-autor-quinto-gol-rapido-historia-mundial" },
        { q:"\u00bfQu\u00e9 jugador colombiano fue asesinado a causa de un autogol en el Mundial de 1994?", a:"Andr\u00e9s Escobar", options:["Ren\u00e9 Higuita","Francisco Maturana","Andr\u00e9s Escobar"], hintText:"El autogol represent\u00f3 el 2-1 en contra ante Estados Unidos.", exp:"Uno de los episodios m\u00e1s tr\u00e1gicos en la historia del futbol.", link:"https://www.milenio.com/deportes/futbol-internacional/andres-escobar-25-anos-muerte-autogol-mundial-1994" },
        { q:"\u00bfQu\u00e9 pa\u00eds tuvo que renunciar a organizar el Mundial de 1986?", a:"Colombia", options:["Argentina","Colombia","Chile"], hintText:"A la fecha no ha organizado una Copa del Mundo.", exp:"Colombia renunci\u00f3 por imposibilidad econ\u00f3mica y falta de infraestructura.", link:"https://www.milenio.com/futbol-internacional/mundial/el-dia-que-estados-unidos-intento-robarle-un-mundial-a-mexico" },
        { q:"\u00bfQu\u00e9 jugador anot\u00f3 el gol que elimin\u00f3 a M\u00e9xico en el Mundial 2014 en tiempo extra?", a:"Klaas-Jan Huntelaar", options:["Arjen Robben","Wesley Sneijder","Klaas-Jan Huntelaar"], hintText:"El partido fue contra Pa\u00edses Bajos.", exp:"Huntelaar marc\u00f3 el penal definitivo tras la pol\u00e9mica falta sobre Robben.", link:"https://www.milenio.com/futbol-internacional/mundial/mexico-fue-eliminado-por-holanda-en-mundial-de-brasil-2014" },
        { q:"\u00bfQu\u00e9 selecci\u00f3n fue eliminada por Senegal en el Mundial 2002?", a:"Francia", options:["Brasil","Francia","Alemania"], hintText:"Fue v\u00edctima de la maldici\u00f3n del campe\u00f3n.", exp:"Senegal venci\u00f3 a Francia en el partido inaugural, marcando una de las mayores sorpresas.", link:"https://www.milenio.com/deportes/futbol-internacional/senegal-francia-2002-sorpresa" },
        { q:"\u00bfCu\u00e1l es la mayor goleada en la historia del Mundial?", a:"Hungr\u00eda 10-1 El Salvador", options:["Hungr\u00eda 10-1 El Salvador","Portugal 7-0 Corea del Norte","Yugoslavia 9-0 Zaire"], hintText:"Sucedi\u00f3 en Espa\u00f1a en 1982.", exp:"Hungr\u00eda gole\u00f3 10-1 a El Salvador en fase de grupos.", link:"https://www.milenio.com/deportes/futbol-internacional/copa-mundo-salvador-goleada-siglo-unio" },
        { q:"\u00bfQui\u00e9n es el \u00fanico jugador en hacer hat-tricks en dos ediciones consecutivas del Mundial?", a:"Gabriel Batistuta", options:["Cristiano Ronaldo","Lionel Messi","Gabriel Batistuta"], hintText:"El primero fue ante Grecia y el segundo ante Jamaica.", exp:"El primero fue en Estados Unidos 1994 y el segundo en Francia 1998.", link:"https://www.milenio.com/futbol-internacional/mundial/batistuta-unico-con-hat-tricks-en-dos-mundiales-seguidos" },
        { q:"\u00bfCu\u00e1l es la selecci\u00f3n que ha recibido m\u00e1s goles en la historia de los Mundiales?", a:"Alemania", options:["Alemania","Brasil","M\u00e9xico"], hintText:"Es tambi\u00e9n una de las que m\u00e1s apariciones tiene.", exp:"Alemania, al ser uno de los equipos con m\u00e1s participaciones, se convierte tambi\u00e9n en la que m\u00e1s goles ha recibido.", link:"https://www.milenio.com/futbol-internacional/mundial/alemania-la-seleccion-con-mas-goles-recibidos-en-mundiales" }
    ],
    [ // Fase 5: Final
        { q:"\u00bfQu\u00e9 equipo jug\u00f3 con playeras piratas en un Mundial?", a:"Argentina", options:["M\u00e9xico","Espa\u00f1a","Argentina"], hintText:"De no haberlo hecho, hubiera perdido por default.", exp:"En M\u00e9xico 1986 el equipo resolvi\u00f3 de emergencia el uniforme con playeras conseguidas en Tepito.", link:"https://www.milenio.com/futbol-internacional/mundial/maradona-la-playera-de-tepito-que-uso-con-argentina-en-mexico-1986" },
        { q:"\u00bfQu\u00e9 jugador fue el m\u00e1s joven en debutar en un Mundial?", a:"Norman Whiteside", options:["Pel\u00e9","Norman Whiteside","Kylian Mbapp\u00e9"], hintText:"Jug\u00f3 en 1982 con solo 17 a\u00f1os.", exp:"El norirland\u00e9s debut\u00f3 en Espa\u00f1a 1982 con 17 a\u00f1os y 42 d\u00edas.", link:"https://www.milenio.com/futbol-internacional/mundial/mundial-de-qatar-2022-los-records-que-se-buscaran-romper" },
        { q:"\u00bfQu\u00e9 selecci\u00f3n fue la primera en ganar un Mundial sin recibir goles en eliminaci\u00f3n directa?", a:"Italia", options:["Italia","Brasil","Francia"], hintText:"Lo logr\u00f3 vestida de azul.", exp:"Italia gan\u00f3 el Mundial 2006 sin recibir goles en eliminaci\u00f3n directa.", link:"https://www.milenio.com/deportes/la-aficion-90/italia-levanta-titulo-mundial-alemania-2006" },
        { q:"\u00bfQu\u00e9 jugador fue el primero en marcar en cuatro Mundiales distintos?", a:"Uwe Seeler", options:["Miroslav Klose","Pel\u00e9","Uwe Seeler"], hintText:"Lo logr\u00f3 antes que Cristiano Ronaldo y Messi.", exp:"El alem\u00e1n Uwe Seeler fue uno de los primeros futbolistas en anotar en cuatro Copas del Mundo distintas.", link:"https://www.milenio.com/deportes/rusia-2018/cristiano-cuarto-jugador-que-marca-en-cuatro-mundiales" },
        { q:"\u00bfQu\u00e9 jugador tiene m\u00e1s partidos disputados en la historia de los Mundiales?", a:"Lionel Messi", options:["Lothar Matth\u00e4us","Lionel Messi","Miroslav Klose"], hintText:"Super\u00f3 el r\u00e9cord en Qatar 2022.", exp:"Messi rompi\u00f3 el r\u00e9cord de Matth\u00e4us y se convirti\u00f3 en el jugador con m\u00e1s partidos en Mundiales.", link:"https://www.milenio.com/futbol-internacional/mundial/lionel-messi-jugador-partidos-historia-mundiales" },
        { q:"\u00bfQu\u00e9 jugador disput\u00f3 5 Mundiales consecutivos entre 1982 y 1998?", a:"Lothar Matth\u00e4us", options:["Lothar Matth\u00e4us","Franz Beckenbauer","Karl-Heinz Rummenigge"], hintText:"Es uno de los grandes capitanes de Alemania.", exp:"Matth\u00e4us jug\u00f3 cinco Copas del Mundo consecutivas con Alemania.", link:"https://www.milenio.com/deportes/futbol-internacional/rafa-marquez-gano-quinto-mundial-lothar-matthaus" },
        { q:"\u00bfQu\u00e9 selecci\u00f3n fue la primera en perder una final de Mundial por penales?", a:"Italia", options:["Brasil","Alemania","Italia"], hintText:"Ocurri\u00f3 en 1994.", exp:"Italia perdi\u00f3 ante Brasil en penales en la final de 1994, la primera definida de esa forma.", link:"https://www.milenio.com/deportes/futbol-internacional/leyendas-brasil-italia-recrearan-unidos-1994" },
        { q:"\u00bfQu\u00e9 jugador marc\u00f3 el gol 1000 en la historia de los Mundiales?", a:"Rob Rensenbrink", options:["Cristiano Ronaldo","Lionel Messi","Rob Rensenbrink"], hintText:"El tanto fue anotado con un cobro de penal.", exp:"Rensenbrink anot\u00f3 el gol 1000 en un partido Pa\u00edses Bajos vs Escocia.", link:"https://www.milenio.com/futbol-internacional/mundial/quien-marco-el-gol-1000-en-la-historia-de-los-mundiales" }
    ]
];

// --- 3. ESTADO DEL JUEGO ---
let faseActual = 0;
let preguntaIndice = 0;
let vidas = 3;
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

document.querySelectorAll('.btn-close-trigger, .close-modal, #btn-volver-juego').forEach(function(btn) {
    btn.onclick = function() {
        modalInfo.style.display = 'none';
        modalCreditos.style.display = 'none';
        modalPista.style.display = 'none';
        actualizarIconosMenu('reset');
    };
});

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
    const faseData = bancoPreguntas[faseActual];
    if (!faseData) return;
    const data = faseData[preguntaIndice];
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
    };

    tiempo = 12 - faseActual;
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
    const data = bancoPreguntas[faseActual][preguntaIndice];
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
            heartContainer.innerText = '\u2764'.repeat(Math.max(0, vidas)) + '\ud83d\udda4'.repeat(Math.max(0, 3 - vidas));
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
    const data = bancoPreguntas[faseActual][preguntaIndice];
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
    document.getElementById('texto-marcastes-ganador').innerText = 'MARCASTE: ' + goles + ' GOLES';
    document.getElementById('texto-ganaste-ganador').innerText = 'GANASTE: ' + (goles * 10) + ' PUNTOS';

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
    document.getElementById('final-puntos-count').innerText = goles * 10;
    document.getElementById('btn-puntos-reintentar').innerText = '\u00a1JUGAR OTRA VEZ!';

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
    document.getElementById('final-puntos-count').innerText = goles * 10;

    if (ganoMundial) {
        document.getElementById('puntos-titulo-img').src = imgFinalPuntos;
        document.getElementById('portero-final-img').src = pData.finalPierde;
        document.getElementById('btn-puntos-reintentar').innerText = '\u00a1OTRA VEZ!';
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
        const texto = '\u00a1Met\u00ed ' + goles + ' goles en el Mundialito Milenio! \u26bd \u00bfPuedes superarme?';
        if (navigator.share) {
            navigator.share({ title: 'Mundialito Milenio', text: texto, url: window.location.href }).catch(console.error);
        } else {
            window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(texto), '_blank');
        }
    };
}

// --- 10. FUNCIONES GLOBALES para onclick="" en el HTML ---
// Deben asignarse a window para ser accesibles fuera del DOMContentLoaded
window.irACopa = function() {
    window.open('https://www.milenio.com/deportes/futbol-internacional/mundial', '_blank');
};

window.compartir = function() {
    const texto = '\u00a1Met\u00ed ' + goles + ' goles en el Mundialito Milenio! \u26bd \u00bfPuedes superarme?';
    if (navigator.share) {
        navigator.share({ title: 'Mundialito Milenio', text: texto, url: window.location.href }).catch(console.error);
    } else {
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(texto), '_blank');
    }
};
}); // ← cierre del DOMContentLoaded
