// --- 1. CONFIGURACIÓN Y ASSETS ---
const audioIntro = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Intro.mp3");
audioIntro.loop = true;
const audioEstadio = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/gente1.mp3");
const audioTiro = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/tiro.mp3");
const audioFallo = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/fallo.mp3");
const audioGol = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Gool.mp3");
const audioSilbato = new Audio("https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/silbato.mp3");

audioIntro.loop = true;
audioEstadio.loop = true;
document.addEventListener('click', () => {
    // Si el audio está pausado Y el menú de inicio está visible
    if (audioIntro.paused && document.getElementById('menu-inicio').style.display !== 'none') {
        audioIntro.play().catch(e => console.log("Audio en espera de interacción"));
    }
}, { once: true });

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
        { q:"¿En qué país se celebró el Mundial de 2014?", a:"Brasil", options:["Sudáfrica","Brasil","Alemania"], hintText:"Allí ocurrió el famoso 7-1 en semifinales.", exp:"El Mundial 2014 se jugó en Brasil, donde Alemania derrotó 7-1 a Brasil en semifinales.", link: "https://www.milenio.com/deportes/futbol-internacional/a-8-anos-brasil-1-7-alemania-copa-del-mundo-de-2014" },
        { q:"¿Qué jugador es conocido como “La Pulga”?", a:"Lionel Messi", options:["Lionel Messi","Luka Modrić","Neymar"], hintText:"Ganó el Mundial en 2022.", exp:"Lionel Messi, capitán de Argentina, es apodado “La Pulga” y ganó el Mundial en 2022.", link: "https://www.milenio.com/deportes/futbol-internacional/lio-o-leo-cual-es-el-verdadero-apodo-de-messi" },
        { q:"¿Qué jugador marcó el famoso “Gol del Siglo” en 1986?", a:"Diego Maradona", options:["Ronaldo Nazário","Pelé","Diego Maradona"], hintText:"También anotó “La Mano de Dios” en ese partido.", exp:"Maradona marcó el “Gol del Siglo” ante Inglaterra en el Mundial de México 1986.", link: "https://www.milenio.com/deportes/futbol-internacional/diego-armando-maradona-36-anos-mano-dios-gol-siglo" },
        { q:"¿Qué selección africana fue la primera en llegar a semifinales de un Mundial?", a:"Marruecos", options:["Nigeria","Camerún","Marruecos"], hintText:"Lo logró en Qatar 2022.", exp:"Marruecos hizo historia en 2022 al convertirse en la primera selección africana en alcanzar semifinales.", link: "https://www.milenio.com/deportes/africa-orgullosa-avance-marruecos-qatar-2022" },
        { q:"¿Qué jugador portugués es el máximo goleador histórico de su selección?", a:"Cristiano Ronaldo", options:["Luís Figo","Eusébio","Cristiano Ronaldo"], hintText:"Ha jugado cinco Mundiales y ganó la Eurocopa 2016.", exp:"Cristiano Ronaldo es el máximo goleador histórico de Portugal y uno de los futbolistas más importantes de su historia.", link: "https://www.milenio.com/deportes/futbol/mundial-1930-historia-primer-campeonato-mundo" },
        { q:"¿Qué selección eliminó a España en fase de grupos del Mundial 2014?", a:"Países Bajos", options:["Países Bajos","Chile","Croacia"], hintText:"La derrotó 5-1 en su debut.", exp:"Países Bajos goleó 5-1 a España en Brasil 2014, en una revancha de la final de 2010.", link: "https://www.milenio.com/deportes/extra-cancha/humillacion-prensa-espanola-sobre-goleada-de-holanda" },
        { q:"¿Qué jugador colombiano ganó la Bota de Oro en el Mundial 2014?", a:"James Rodríguez", options:["Radamel Falcao","Juan Cuadrado","James Rodríguez"], hintText:"Su gol a Uruguay fue uno de los mejores del torneo.", exp:"James Rodríguez fue el máximo goleador de Brasil 2014 con seis goles.", link: "https://www.milenio.com/deportes/extra-cancha/james-recibio-la-bota-de-oro" },
        { q:"¿Qué selección fue anfitriona del primer Mundial en 1930?", a:"Uruguay", options:["Argentina","Uruguay","Brasil"], hintText:"También fue el primer campeón", exp:"Uruguay organizó y ganó el primer Mundial de la historia en 1930.", link: "https://www.milenio.com/deportes/futbol-internacional/uruguay-primer-campeon-mundial-1930" }
    ],
    [ // Fase 2: Octavos
        { q:"¿Quién fue el máximo goleador del Mundial 2006?", a:"Miroslav Klose", options:["Miroslav Klose","Lukas Podolski","Thomas Müller"], hintText:"Anotó cinco goles y marcó su camino para ser el máximo goleador histórico de los Mundiales.", exp:"Miroslav Klose tiene 16 goles.", link: "https://www.milenio.com/deportes/extra-cancha/klose-rompe-marca-de-goles-en-mundiales" },
        { q:"¿Qué selección sorprendió al llegar a semifinales en el Mundial 2018?", a:"Croacia", options:["Bélgica","Dinamarca","Croacia"], hintText:"Eliminó a Rusia en penales en cuartos.", exp:"Croacia llegó hasta la final en 2018, sorprendiendo al mundo.", link: "https://www.milenio.com/deportes/rusia-2018/croacia-avanza-semifinales-termina-sueno-rusia" },
        { q:"¿Qué jugador anotó el gol del título en el Mundial 2014?", a:"Mario Götze", options:["Thomas Müller","Mario Götze","Mesut Özil"], hintText:"Entró como suplente en la final.", exp:"Götze marcó en tiempo extra el gol que dio el título a Alemania ante Argentina.", link: "https://www.milenio.com/deportes/extra-cancha/el-analisis-del-alemania-argentina" },
        { q:"¿Qué selección fue campeona del mundo en 1954 tras vencer a Hungría en la final?", a:"Alemania Occidental", options:["Alemania Occidental","Italia","Uruguay"], hintText:"Se le conoce como el “Milagro de Berna”.", exp:"Alemania Occidental ganó el Mundial de 1954 venciendo a la poderosa Hungría.", link: "https://www.milenio.com/futbol-internacional/mundial/alemania-y-milagro-de-berna-con-el-que-gano-mundial-de-suiza-1954" },
        { q:"¿Qué selección eliminó a Alemania en fase de grupos del Mundial 2018?", a:"Corea del Sur", options:["Japón","México","Corea del Sur"], hintText:"Fue una victoria histórica en el último minuto.", exp:"Corea del Sur venció 2-0 a Alemania, eliminando al campeón defensor.", link: "https://www.milenio.com/deportes/rusia-2018/corea-derrota-alemania-echa-manita-mexico" },
        { q:"¿Qué país perdió la final del Mundial de 1978?", a:"Países Bajos", options:["Países Bajos","Brasil","Italia"], hintText:"El torneo estuvo lleno de polémica y dudas sobre la intervención del gobierno argentino en los resultados.", exp:"Argentina ganó su primer Mundial en 1978 como local, venciendo a Países Bajos en la final.", link: "https://www.milenio.com/deportes/extra-cancha/el-derrumbe-de-la-naranja-mecanica" },
        { q:"¿Qué jugador ganó el Balón de Oro del Mundial 2018?", a:"Luka Modrić", options:["Kylian Mbappé","Luka Modrić","Antoine Griezmann"], hintText:"Fue clave en el subcampeonato de su selección.", exp:"Modrić fue el mejor jugador del torneo en Rusia 2018.", link: "https://www.milenio.com/deportes/rusia-2018/luka-modric-gana-balon-oro-mundial-rusia-2018" },
        { q:"¿En qué estadio se jugó la final del Mundial 1998?", a:"Stade de France", options:["Parque de los Príncipes","Stade de France","Vélodrome"], hintText:"Está ubicado en Saint-Denis.", exp:"La final Francia vs Brasil de 1998 se disputó en el Stade de France.", link: "https://www.milenio.com/futbol-internacional/mundial/francia-1998-ultimo-mundial-del-siglo-xx-que-vio-titulo-local" }
    ],
    [ // Fase 3: Cuartos
        { q:"¿Quién marcó el gol de la victoria en la final del Mundial 2010?", a:"Andrés Iniesta", options:["David Villa","Andrés Iniesta","Xavi Hernández"], hintText:"El tanto llegó en el minuto 116.", exp:"Iniesta marcó el gol del título ante Países Bajos en tiempo extra.", link: "https://www.milenio.com/deportes/futbol-internacional/andres-iniesta-el-discreto-autor-del-gol-mas-importante-de-espana" },
        { q:"¿Qué jugador fue expulsado en el minuto 0 en un Mundial?", a:"José Batista", options:["José Batista","Diego Maradona","Hugo Sánchez"], hintText:"Fue en 1986.", exp:"Batista fue expulsado a los pocos segundos en México 1986.", link: "https://www.milenio.com/deportes/extra-cancha/expulsion-mas-rapida-mundial" },
        { q:"¿Qué jugador fue expulsado por un cabezazo en la final del Mundial 2006?", a:"Zinedine Zidane", options:["Zinedine Zidane","Thierry Henry","Fabio Cannavaro"], hintText:"Fue su último partido profesional.", exp:"Zidane fue expulsado por el cabezazo a Materazzi en la prórroga de la final de 2006.", link: "https://www.milenio.com/futbol-internacional/mundial/mundial-de-alemania-2006-la-triste-final-de-zinedine-zidane" },
        { q:"¿Qué jugador anotó un hat-trick en una final de Mundial en 2022?", a:"Kylian Mbappé", options:["Lionel Messi","Kylian Mbappé","Ángel Di María"], hintText:"A pesar de eso, no ganó el título.", exp:"Mbappé marcó tres goles en la final, pero Francia perdió en penales ante Argentina.", link: "https://www.milenio.com/deportes/futbol-internacional/mbappe-hat-trick-final-mundial-2022" },
        { q:"¿Qué selección eliminó a México en 1994 en penales, abriendo el “fantasma” histórico?", a:"Bulgaria", options:["Bulgaria","Alemania","Argentina"], hintText:"El partido fue 1-1.", exp:"Bulgaria eliminó a México en penales en Estados Unidos 1994.", link: "https://www.milenio.com/futbol/seleccion-mexicana/jorge-campos-culpa-luis-garcia-eliminacion-tri-mundial-eu?utm_source=chatgpt.com" },
        { q:"¿Qué selección eliminó a Argentina en el Mundial 2002 en fase de grupos?", a:"Suecia", options:["Suecia","Inglaterra","Nigeria"], hintText:"Fue un empate clave el que selló su eliminación.", exp:"Argentina no pudo vencer a Suecia y quedó fuera en fase de grupos.", link: "https://www.milenio.com/deportes/futbol-internacional/argentina-eliminacion-2002" },
        { q:"¿Qué objeto fue robado antes del Mundial de 1966 y luego recuperado por un perro llamado Pickles?", a:"La Copa Jules Rimet", options:["El balón oficial","La Copa Jules Rimet","La bandera de Inglaterra"], hintText:"Era el trofeo original del torneo.", exp:"El trofeo Jules Rimet fue robado meses antes del Mundial de Inglaterra 1966 y apareció gracias a Pickles, un perro que lo encontró envuelto en papel periódico.", link: "https://www.milenio.com/deportes/futbol-internacional/pickles-perro-rescato-jules-rimet-mundial-1966" },
        { q:"¿Quién anotó el primer gol en la historia de los Mundiales?", a:"Lucien Laurent", options:["Lucien Laurent","Raymond Kopa","Just Fontaine"], hintText:"Fue Francia vs México en 1930.", exp:"Lucien Laurent marcó el primer gol en la historia de los Mundiales, en el partido entre Francia y México de 1930.", link: "https://www.milenio.com/deportes/extra-cancha/once-goles-historicos-en-el-mundial" }
    ],
    [ // Fase 4: Semis
        { q:"¿Quién anotó el gol más rápido en la historia de los Mundiales?", a:"Hakan Şükür", options:["Clint Dempsey","Hakan Şükür","Miroslav Klose"], hintText:"Ocurrió a los 11 segundos.", exp:"Hakan Şükür marcó a los 11 segundos en 2002, récord histórico en Copas del Mundo.", link: "https://www.milenio.com/deportes/extra-cancha/dempsey-autor-quinto-gol-rapido-historia-mundial" },
        { q:"¿Qué jugador colombiano fue asesinado al regresar a su país a causa de un autogol en el Mundial de 1994?", a:"Andrés Escobar", options:["René Higuita","Francisco Maturana","Andrés Escobar"], hintText:"El autogol representó el 2-1 en contra de su selección y la eliminación del torneo ante Estados Unidos.", exp:"Se atribuye a las apuestas ilegales relacionadas con el crimen organizado, en uno de los episodios más trágicos en la historia del futbol.", link: "https://www.milenio.com/deportes/futbol-internacional/andres-escobar-25-anos-muerte-autogol-mundial-1994" },
        { q:"México organizó el Mundial de 1986, pero no fue la primera opción de la FIFA. ¿Qué país tuvo que renunciar a la organización de esa edición?", a:"Colombia", options:["Argentina","Colombia","Chile"], hintText:"A la fecha no ha organizado una Copa del Mundo.", exp:"Colombia renunció por imposibilidad económica y falta de infraestructura para cumplir con las exigencias de la FIFA.", link: "https://www.milenio.com/futbol-internacional/mundial/el-dia-que-estados-unidos-intento-robarle-un-mundial-a-mexico" },
        { q:"¿Qué jugador anotó el gol que eliminó a México en el Mundial 2014 en tiempo extra?", a:"Klaas-Jan Huntelaar", options:["Arjen Robben","Wesley Sneijder","Klaas-Jan Huntelaar"], hintText:"El partido fue contra Países Bajos.", exp:"Huntelaar marcó el penal definitivo tras la polémica falta sobre Robben.", link: "https://www.milenio.com/futbol-internacional/mundial/mexico-fue-eliminado-por-holanda-en-mundial-de-brasil-2014" },
        { q:"¿Qué selección fue eliminada por Senegal en el Mundial 2002 en uno de los mayores “batacazos”?", a:"Francia", options:["Brasil","Francia","Alemania"], hintText:"Fue víctima de ‘la maldición del campeón’", exp:"Senegal venció a Francia en el partido inaugural, marcando una de las mayores sorpresas.", link: "https://www.milenio.com/deportes/futbol-internacional/senegal-francia-2002-sorpresa" },
        { q:"¿Cuál es la mayor goleada en la historia del Mundial?", a:"Hungría 10-1 El Salvador", options:["Hungría 10-1 El Salvador","Portugal 7-0 Corea del Norte","Yugoslavia 9-0 Zaire"], hintText:"Sucedió en el torneo realizado en España en 1982.", exp:"Hungría goleó 10-1 a El Salvador en fase de grupos, la mayor goleada registrada en la historia de los Mundiales.", link: "https://www.milenio.com/deportes/futbol-internacional/copa-mundo-salvador-goleada-siglo-unio" },
        { q:"¿Quién es el único jugador en hacer “hat-tricks” en dos ediciones consecutivas del Mundial?", a:"Gabriel Batistuta", options:["Cristiano Ronaldo","Lionel Messi","Gabriel Batistuta"], hintText:"El primero fue ante Grecia y el segundo, cuatro años más tarde, ante Jamaica.", exp:"El primero fue en Estados Unidos 1994 y el segundo en Francia 1998. Ambos partidos fueron en fase de grupos.", link: "https://www.milenio.com/futbol-internacional/mundial/batistuta-unico-con-hat-tricks-en-dos-mundiales-seguidos" },
        { q:"¿Cuál es la selección que ha recibido más goles en contra en la historia de los Mundiales?", a:"Alemania", options:["Alemania","Brasil","México"], hintText:"Es también una de las que más apariciones tiene en el torneo.", exp:"Alemania al ser uno de los equipos con más participaciones y juegos jugados, se convierte también en la que más goles ha recibido a la fecha.", link: "https://www.milenio.com/futbol-internacional/mundial/alemania-la-seleccion-con-mas-goles-recibidos-en-mundiales" }
    ],
    [ // Fase 5: Final
        { q:"¿Qué equipo jugó con playeras “pirata” en uno de sus partidos oficiales del Mundial?", a:"Argentina", options:["México","España","Argentina"], hintText:"De no haberlo hecho, hubiera perdido por default, quedando eliminado.", exp:"En México 1986, Héctor Miguel Zelada y el entorno del equipo resolvieron de emergencia el uniforme con playeras conseguidas en Tepito", link: "https://www.milenio.com/futbol-internacional/mundial/maradona-la-playera-de-tepito-que-uso-con-argentina-en-mexico-1986" },
        { q:"¿Qué jugador fue el más joven en debutar en un Mundial?", a:"Norman Whiteside", options:["Pelé","Norman Whiteside","Kylian Mbappé"], hintText:"Jugó en 1982 con solo 17 años.", exp:"El norirlandés debutó en España 1982 con 17 años y 42 días, siendo el más joven en jugar un Mundial.", link: "https://www.milenio.com/futbol-internacional/mundial/mundial-de-qatar-2022-los-records-que-se-buscaran-romper" },
        { q:"¿Qué selección fue la primera en ganar un Mundial invicta y sin recibir goles en fase de eliminación directa?", a:"Italia", options:["Italia","Brasil","Francia"], hintText:"Lo logró vestida de azul.", exp:"Italia ganó el Mundial 2006 sin recibir goles en eliminación directa.", link: "https://www.milenio.com/deportes/la-aficion-90/italia-levanta-titulo-mundial-alemania-2006" },
        { q:"¿Qué jugador fue el primero en marcar en cuatro Mundiales distintos?", a:"Uwe Seeler", options:["Miroslav Klose","Pelé","Uwe Seeler"], hintText:"Lo logró antes que Cristiano Ronaldo y Messi", exp:"El alemán Uwe Seeler fue uno de los primeros futbolistas en anotar en cuatro Copas del Mundo distintas.", link: "https://www.milenio.com/deportes/rusia-2018/cristiano-cuarto-jugador-que-marca-en-cuatro-mundiales" },
        { q:"¿Qué jugador tiene más partidos disputados en la historia de los Mundiales?", a:"Lionel Messi", options:["Lothar Matthäus","Lionel Messi","Miroslav Klose"], hintText:"Superó el récord en Qatar 2022.", exp:"Messi rompió el récord de Matthäus y se convirtió en el jugador con más partidos disputados en Mundiales.", link: "https://www.milenio.com/futbol-internacional/mundial/lionel-messi-jugador-partidos-historia-mundiales" },
        { q:"¿Qué jugador disputó 5 Mundiales consecutivos entre 1982 y 1998?", a:"Lothar Matthäus", options:["Lothar Matthäus","Franz Beckenbauer","Karl-Heinz Rummenigge"], hintText:"Es uno de los grandes capitanes de Alemania.", exp:"Matthäus jugó cinco Copas del Mundo consecutivas con Alemania.", link: "https://www.milenio.com/deportes/futbol-internacional/rafa-marquez-gano-quinto-mundial-lothar-matthaus" },
        { q:"¿Qué selección fue la primera en perder una final de Mundial por penales?", a:"Italia", options:["Brasil","Alemania","Italia"], hintText:"Ocurrió en 1994.", exp:"Italia perdió ante Brasil en penales en la final de 1994, la primera que se definió de esa forma.", link: "https://www.milenio.com/deportes/futbol-internacional/leyendas-brasil-italia-recrearan-unidos-1994" },
        { q:"¿Qué jugador marcó el gol 1000 en la historia de los Mundiales?", a:"Rob Rensenbrink", options:["Cristiano Ronaldo","Lionel Messi","Rob Rensenbrink"], hintText:"El tanto fue anotado con un cobro de penal", exp:"Rensenbrink anotó el gol 1000 en la historia de los Mundiales durante en un partido Países Bajos vs Escocia", link: "https://www.milenio.com/futbol-internacional/mundial/quien-marco-el-gol-1000-en-la-historia-de-los-mundiales" }
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

// --- LÓGICA DE AUDIO REFORZADA ---
let isMuted = false;
const todosLosAudios = [audioIntro, audioEstadio, audioTiro, audioFallo, audioGol, audioSilbato];

function toggleMute() {
    isMuted = !isMuted;
    
    // Aplicamos el estado a cada audio del array
    todosLosAudios.forEach(a => {
        if(a) a.muted = isMuted;
    });

    // Actualizamos TODOS los iconos: el principal del header y los de los modales
    const iconosVolumen = document.querySelectorAll('#btn-audio-main, .btn-audio-sync');
    iconosVolumen.forEach(img => {
        img.src = isMuted ? imgSinVol : imgConVol;
        
        // Si usas la clase CSS de gris para el mute
        if(isMuted) img.classList.add('audio-muted');
        else img.classList.remove('audio-muted');
    });
}

// Escuchador global: detecta clics en cualquier icono de volumen
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-audio-sync') || e.target.id === 'btn-audio-main') {
        toggleMute();
    }
});

// --- GESTIÓN DE MODALES ---
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

// --- 5. LÓGICA DEL JUEGO ---
document.getElementById('btn-jugar').onclick = () => {
    audioIntro.pause(); // <--- DETIENE LA INTRO
    audioIntro.currentTime = 0; // Reinicia el tiempo para la próxima vez
    
    audioEstadio.play(); // Inicia el ambiente de estadio
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
    
    // 1. BAJAMOS EL VOLUMEN DEL ESTADIO PARA EL DRAMA
    audioEstadio.volume = 0.1; // Casi silencio (puedes usar 0 si quieres silencio total)
    
    audioSilbato.play();
    
    setTimeout(() => {
        audioTiro.play();
        const ladoX = Math.random() > 0.5 ? "15vh" : "-15vh";
        balon.style.transition = "transform 0.5s ease-out";

        if(esCorrecto) {
            balon.style.transform = `translate(calc(-50% + ${ladoX}), -36vh)`;
            portero.classList.add(ladoX === "15vh" ? "portero-izq" : "portero-der");
            setTimeout(() => { 
                audioGol.play(); 
                // 2. SUBIMOS EL VOLUMEN DE GOLPE POR EL FESTEJO
                audioEstadio.volume = 1.0; 
                actualizarMarcador(true); 
                mostrarModalResultado("GOL"); 
            }, 500);
        } else {
            balon.style.transform = `translate(calc(-50% + ${ladoX}), -30vh)`;
            portero.classList.add(ladoX === "15vh" ? "portero-der" : "portero-izq");
            setTimeout(() => { 
                audioFallo.play(); 
                // 3. SUBIMOS EL VOLUMEN (EL PÚBLICO REACCIONA)
                audioEstadio.volume = 1.0; 
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
    balon.style.transform = "translate(-50%, -50%)";
    void balon.offsetHeight;
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

// --- 5. LÓGICA DE FASES Y FINAL ---

function mostrarModalPasaste() {
    // Si acabamos de terminar la última fase (Fase 5 es índice 4)
    if (faseActual >= 4) { 
        mostrarPantallaCampeon();
        return;
    }

    const modalPasaste = document.getElementById('modal-pasaste');
    const assetTitulo = document.getElementById('asset-titulo-ronda');
    const porteroPasaste = document.getElementById('portero-pasaste-fase');
    
    // Assets para los títulos de transición
    const assetsRonda = [
        "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/PASASAOCTAVOS.png",
        "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/CUARTOS.png",
        "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/SEMIFINALES.png",
        "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/GFINAL.png"
    ];
    
    assetTitulo.src = assetsRonda[faseActual];
    document.getElementById('texto-marcastes-ganador').innerText = `MARCASTE: ${goles} GOLES`;
    document.getElementById('texto-ganaste-ganador').innerText = `GANASTE: ${goles * 10} PUNTOS`;

    const pData = porterosPorFase[faseActual];
    if(porteroPasaste) porteroPasaste.src = pData.finalPierde;
    
    modalPasaste.style.display = 'flex';

    // Importante: Usar onclick directo para evitar acumular eventos
    const btnAvanza = document.getElementById('btn-avanzar-ronda'); 
    if (btnAvanza) {
        btnAvanza.onclick = function() {
            modalPasaste.style.display = 'none';
            faseActual++;
            preguntaIndice = 0;
            
            // Limpiar los indicadores visuales (dots) para la nueva fase
            document.querySelectorAll('.dot').forEach(dot => {
                dot.classList.remove('green', 'red');
            });
            
            cargarPregunta();
        };
    }
}

function mostrarPantallaCampeon() {
    const modalPuntos = document.getElementById('modal-puntos');
    const imgTitulo = document.getElementById('puntos-titulo-img');
    const imgCopa = document.getElementById('portero-final-img');

    imgTitulo.src = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/MUNDIALITO%20/GANASTELMUNDIALITO.png";
    imgCopa.src = "https://cdnpublicidad.milenio.com/2026/PublicidadOperaciones/MundialitoMilenio/copa2.png";
    
    document.getElementById('final-goles-count').innerText = goles;
    document.getElementById('final-puntos-count').innerText = goles * 10;
    document.getElementById('btn-puntos-reintentar').innerText = "¡JUGAR OTRA VEZ!";

    audioEstadio.pause();
    audioGol.play(); 
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
      if (timeLeft <= 0) return clearInterval(interval);

      var particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

function mostrarPantallaFinal(ganoMundial) {
    audioEstadio.pause();
    audioIntro.play();    
    
    modalPasaste.style.display = 'none';
    modalFeedback.style.display = 'none';

    const imgTitulo = document.getElementById('puntos-titulo-img');
    const imgPortero = document.getElementById('portero-final-img');
    const pData = porterosPorFase[faseActual] || porterosPorFase[0];

    document.getElementById('final-goles-count').innerText = goles;
    document.getElementById('final-puntos-count').innerText = goles * 10;

    if(ganoMundial) {
        // Esta parte ahora la maneja mostrarPantallaCampeon, 
        // pero lo dejamos por si acaso hay un flujo alterno
        imgTitulo.src = imgFinalPuntos; 
        imgPortero.src = pData.finalPierde;
        document.getElementById('btn-puntos-reintentar').innerText = "¡OTRA VEZ!";
    } else {
        imgTitulo.src = imgEliminado;
        imgPortero.src = pData.finalGana;
        document.getElementById('btn-puntos-reintentar').innerText = "REINTENTAR";
    }
    modalPuntos.style.display = 'flex';
}

// --- 6. EVENTOS DE BOTONES FINALES ---

document.getElementById('btn-puntos-reintentar').onclick = () => location.reload();

// Ir a la Copa (Ajustado al ID del HTML)
const btnCopaFinal = document.getElementById('btn-puntos-copa'); 
if (btnCopaFinal) {
    btnCopaFinal.onclick = () => { 
        window.open("https://www.milenio.com/deportes/futbol-internacional/mundial", "_blank"); 
    };
}

// Compartir (Ajustado al ID del HTML)
const btnCompartirFinal = document.getElementById('btn-puntos-compartir');
if (btnCompartirFinal) {
    btnCompartirFinal.onclick = () => {
        const texto = `¡Metí ${goles} goles en el Mundialito Milenio! ⚽ ¿Puedes superarme?`;
        if (navigator.share) {
            navigator.share({ title: 'Mundialito Milenio', text: texto, url: window.location.href }).catch(console.error);
        } else {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}`, '_blank');
        }
    };
}
