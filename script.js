// --- THREE.JS ESCENA ---
const scene = new THREE.Scene();

// Fondo transparente para mostrar imagen CSS
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setClearColor(0x000000, 0); // <- transparencia total
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 8);


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// LUZ
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 10);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// BALÓN
const ballMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
const ball = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), ballMat);
ball.position.set(0, 0.25, 6);
scene.add(ball);

// AUDIO
const audioShoot = new Audio('https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/tiro.mp3');
const audioGoal = new Audio('https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Gool.mp3');
const audioFail = new Audio('https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/fallo.mp3');
const audioCrowd = new Audio('https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/gente.mp3');
audioCrowd.loop = true;
audioCrowd.volume = 0.4;

// HTML ELEMENTOS
const startBtn = document.getElementById('startBtn');
const questionEl = document.getElementById('question');
const optionsEl = document.querySelectorAll('.option');
const golesEl = document.getElementById('goles');
const tirosEl = document.getElementById('tiros');
const vidasEl = document.getElementById('vidas');
const nivelEl = document.getElementById('nivel');
const explanationEl = document.getElementById('explanation');
const explanationText = document.getElementById('explanation-text');
const continueBtn = document.getElementById('continueBtn');
const moreInfoBtn = document.getElementById('moreInfoBtn');
const manualDiv = document.getElementById('manual');

// PORTERO
let keeperImg = document.getElementById('keeper');
keeperImg.style.display = 'none';
keeperImg.style.width = '70px';
keeperImg.style.position = 'absolute';
keeperImg.style.bottom = '200px';
keeperImg.style.left = '50%';
keeperImg.style.transform = 'translateX(-50%)';
keeperImg.style.zIndex = 12;

// ESTADO DEL JUEGO
let goles = 0, tiros = 0, vidas = 3, nivel = 1, busy = false;
const maxTiros = 5;
let currentQuestionObj = null;
// ============================
// PREGUNTAS
// ============================
const preguntas = [
  [ // nivel1
    { q:"¿Quién ganó el Mundial 2018?", a:"Francia", options:["Francia","Croacia","Brasil"], exp:"Francia ganó 4-2 a Croacia en la final.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2018" },
    { q:"¿Qué país tiene más Mundiales?", a:"Brasil", options:["Argentina","Brasil","Italia"], exp:"Brasil tiene 5 títulos.", link:"https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Brasil" },
    { q:"¿Quién ganó el Mundial 2010?", a:"España", options:["España","Países Bajos","Alemania"], exp:"España ganó 1-0 con gol de Iniesta.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2010" },
    { q:"¿Quién fue campeón del Mundial 2006?", a:"Italia", options:["Italia","Francia","Alemania"], exp:"Italia ganó 5-3 en penales a Francia.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2006" },
    { q:"¿Qué país ganó el primer Mundial (1930)?", a:"Uruguay", options:["Uruguay","Argentina","Italia"], exp:"Uruguay fue el primer campeón en 1930.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1930" }
  ],
  [ // nivel2
    { q:"¿Qué país ganó el Mundial 1998?", a:"Francia", options:["Brasil","Francia","Croacia"], exp:"Francia ganó 3-0 a Brasil en la final.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1998" },
    { q:"Quién ganó más Balones de Oro hasta 2022?", a:"Lionel Messi", options:["Cristiano Ronaldo","Lionel Messi","Ronaldinho"], exp:"Messi tiene 7 Balones de Oro.", link:"https://es.wikipedia.org/wiki/Lionel_Messi" },
    { q:"¿Qué país ganó el Mundial 1994?", a:"Brasil", options:["Italia","Brasil","Suecia"], exp:"Brasil venció a Italia en penales.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1994" },
    { q:"Quién fue el goleador del Mundial 2002?", a:"Ronaldo", options:["Ronaldo","Miroslav Klose","Rivaldo"], exp:"Ronaldo marcó 8 goles en 2002.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2002" },
    { q:"Dónde se celebró el Mundial 2014?", a:"Brasil", options:["Brasil","Alemania","Argentina"], exp:"Brasil fue anfitrión en 2014.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2014" }
  ],
  [ // nivel3
    { q:"¿Qué selección ganó el Mundial 1978?", a:"Argentina", options:["Argentina","Holanda","Alemania"], exp:"Argentina ganó 3-1 a Holanda en tiempo extra.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1978" },
    { q:"Quién fue el máximo goleador de 1986?", a:"Gary Lineker", options:["Diego Maradona","Gary Lineker","Careca"], exp:"Lineker marcó 6 goles en 1986.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1986" },
    { q:"Cuál fue la final del Mundial 2006?", a:"Italia vs Francia", options:["Italia vs Francia","Brasil vs Alemania","España vs Holanda"], exp:"Italia ganó 5-3 en penales a Francia.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2006" },
    { q:"Qué país ganó el Mundial 1934?", a:"Italia", options:["Italia","Checoslovaquia","Alemania"], exp:"Italia ganó en 1934.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1934" },
    { q:"Quién marcó el gol de la final 2010?", a:"Andrés Iniesta", options:["David Villa","Andrés Iniesta","Xavi Hernández"], exp:"Iniesta marcó el gol del título en 2010.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2010" }
  ],
  [ // nivel4
    { q:"Cuál fue el primer Mundial televisado?", a:"1954", options:["1950","1954","1962"], exp:"1954 fue el primero con retransmisión televisiva amplia.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1954" },
    { q:"Qué país ganó el Mundial 1938?", a:"Italia", options:["Italia","Hungría","Brasil"], exp:"Italia ganó en Francia 1938.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1938" },
    { q:"Quién fue goleador en 1974?", a:"Grzegorz Lato", options:["Johan Cruyff","Grzegorz Lato","Gerd Müller"], exp:"Lato anotó 7 goles en 1974.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1974" },
    { q:"Quién ganó el Mundial 1990?", a:"Alemania Occidental", options:["Alemania Occidental","Argentina","Italia"], exp:"Alemania ganó 1-0 a Argentina en 1990.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1990" },
    { q:"Qué país ganó el Mundial 1966?", a:"Inglaterra", options:["Inglaterra","Alemania","Brasil"], exp:"Inglaterra ganó 4-2 a Alemania en 1966.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1966" }
  ],
  [ // nivel5
    { q:"Quién marcó el gol más rápido en un Mundial?", a:"Hakan Şükür", options:["Hakan Şükür","Pelé","Klose"], exp:"Hakan Şükür marcó a los 11 segundos en 2002.", link:"https://es.wikipedia.org/wiki/Hakan_%C5%9E%C3%BCk%C3%BCr" },
    { q:"Qué país organizó el Mundial 2006?", a:"Alemania", options:["Alemania","Japón","Sudáfrica"], exp:"Alemania fue anfitrión en 2006.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2006" },
    { q:"Quién ganó el Mundial 1982?", a:"Italia", options:["Italia","Alemania","Francia"], exp:"Italia venció a Alemania 3-1.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1982" },
    { q:"Quién ganó el Mundial 1994?", a:"Brasil", options:["Brasil","Italia","Suecia"], exp:"Brasil ganó en penales a Italia.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1994" },
    { q:"Cuál fue el máximo goleador de 2006?", a:"Miroslav Klose", options:["Ronaldo","Miroslav Klose","Thierry Henry"], exp:"Klose marcó 5 goles en 2006.", link:"https://es.wikipedia.org/wiki/Miroslav_Klose" }
  ]
];
// ============================
// FUNCIONES
function updateUI() {
  golesEl.textContent = goles;
  tirosEl.textContent = tiros;
  vidasEl.textContent = vidas;
  nivelEl.textContent = nivel;
}

function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }

function nuevaPregunta() {
  keeperImg.style.transform = `translateX(-50%)`;
  ball.position.set(0, 0.25, 6);
  const pool = preguntas[Math.max(0, Math.min(preguntas.length - 1, nivel - 1))];
  currentQuestionObj = pool[Math.floor(Math.random() * pool.length)];

  questionEl.textContent = currentQuestionObj.q;
  const opts = shuffle([...currentQuestionObj.options]);
  optionsEl.forEach((btn, i) => {
    btn.textContent = opts[i] || '';
    btn.dataset.correct = (opts[i] === currentQuestionObj.a) ? 'true' : 'false';
    btn.dataset.exp = currentQuestionObj.exp;
    btn.dataset.link = currentQuestionObj.link;
    btn.dataset.index = i;
  });
  document.getElementById('question-container').style.display = 'block';
}

// ============================
// ANIMACIÓN DEL PENAL
// ============================
function animarPenal(correct, btn) {
  if (busy) return;
  busy = true;
  audioShoot.play().catch(() => {});

  const index = parseInt(btn.dataset.index);
  const positions = [-2, 0, 2];
  const targetX = positions[index] || 0;
  const duration = 1.2;
  const startBall = ball.position.clone();
  const endBallGol = new THREE.Vector3(targetX, 0.25, -7);
  const endKeeperX = targetX * 60;

  let t = 0;

  // Tipo de fallo aleatorio
  const falloTipo = Math.random() < 0.5 ? 'detenido' : 'tribuna';

  function step() {
    t += 0.02 / duration;
    if (t > 1) t = 1;

    if (correct) {
      // Gol normal
      const controlPoint = new THREE.Vector3((startBall.x + endBallGol.x)/2, 2.5, (startBall.z + endBallGol.z)/2);
      const a = startBall.clone().lerp(controlPoint, t);
      const b = controlPoint.clone().lerp(endBallGol, t);
      ball.position.lerpVectors(a, b, t);
      keeperImg.style.transform = `translateX(calc(-50% + ${endKeeperX * Math.random() * 0.5}px))`;
    } else {
      if(falloTipo === 'detenido') {
        // Portero toca el balón
        if(t < 0.5){
          const midPoint = new THREE.Vector3(targetX, 0.25, -7);
          ball.position.lerpVectors(startBall, midPoint, t*2);
          keeperImg.style.transform = `translateX(calc(-50% + ${endKeeperX * t}px)) rotateZ(${t*25}deg)`;
        } else {
          // Rebote ligero y giro
          const desvio = new THREE.Vector3(
            targetX + (Math.random()*1.5-0.75),
            0.25 + Math.random()*0.5,
            -7 - Math.random()*0.5
          );
          ball.position.lerpVectors(new THREE.Vector3(targetX, 0.25, -7), desvio, (t-0.5)*2);
          ball.rotation.y += 0.1; // rotación sutil
          keeperImg.style.transform = `translateX(calc(-50% + ${endKeeperX}px)) rotateZ(15deg)`;
        }
      } else {
        // Balón a tribuna
        const falloEnd = new THREE.Vector3(
          targetX + (Math.random()*2-1),
          3 + Math.random()*2,
          -5 - Math.random()*2
        );
        if(t < 0.5){
          const midPoint = new THREE.Vector3(targetX, 0.25, -7);
          ball.position.lerpVectors(startBall, midPoint, t*2);
          keeperImg.style.transform = `translateX(calc(-50% + ${endKeeperX * t}px)) rotateZ(${t*25}deg)`;
        } else {
          ball.position.lerpVectors(new THREE.Vector3(targetX, 0.25, -7), falloEnd, (t-0.5)*2);
          ball.rotation.x += 0.15; // rotación dramática
          ball.rotation.y += 0.1;
          keeperImg.style.transform = `translateX(calc(-50% + ${endKeeperX}px)) rotateZ(20deg)`;
        }
      }
    }

    if(t < 1) requestAnimationFrame(step);
    else finalizarAnimacion();
  }

  function finalizarAnimacion() {
    tiros++;
    if(correct){
      goles++;
      audioGoal.play().catch(()=>{});
      lanzarConfeti();
      reaccionPublico('gol');
      nuevaPregunta();
    } else {
      vidas--;
      audioFail.play().catch(()=>{});
      shakeEstadio();
      reaccionPublico('fallo');

      explanationText.textContent = btn.dataset.exp;
      explanationEl.style.display = 'block';
      moreInfoBtn.onclick = ()=>window.open(btn.dataset.link,'_blank');
      continueBtn.onclick = ()=>{
        explanationEl.style.display='none';
        nuevaPregunta();
      };
    }

    updateUI();
    busy = false;

    if(vidas <= 0){
      alert(`Se acabaron las vidas. Goles: ${goles}`);
      resetJuego();
    } else if(tiros >= maxTiros){
      alert(`Fin de ronda. Goles: ${goles}`);
      resetJuego();
    }
  }

  step();
}
// ============================
// EVENTOS DE RESPUESTAS
// ============================
optionsEl.forEach(btn => {
  btn.addEventListener('click', () => {
    if (busy) return;
    const correct = btn.dataset.correct === 'true';
    const exp = btn.dataset.exp;
    const link = btn.dataset.link;

    document.getElementById('question-container').style.display = 'none';
    animarPenal(correct, btn);

    if (!correct) {
      setTimeout(() => {
        explanationText.textContent = exp;
        explanationEl.style.display = 'block';
        moreInfoBtn.onclick = () => window.open(link, '_blank');
        continueBtn.onclick = () => {
          explanationEl.style.display = 'none';
          nuevaPregunta();
        };
      }, 1300);
    }
  });
});

// ============================
// INICIO DE JUEGO
// ============================
startBtn.addEventListener('click', () => {
  manualDiv.style.display = 'none';
  keeperImg.style.display = 'block';
  keeperImg.style.opacity = '0';
  keeperImg.style.transition = 'opacity 1s, transform 1s';
  keeperImg.style.transform = 'translateX(-50%) translateY(50px)';
  setTimeout(() => {
    keeperImg.style.opacity = '1';
    keeperImg.style.transform = 'translateX(-50%) translateY(0)';
  }, 100);
  updateUI();
  nuevaPregunta();
  audioCrowd.play().catch(() => {});
});

// ============================
// REINICIO
// ============================
function resetJuego() {
  goles = 0; tiros = 0; vidas = 3; nivel = 1;
  updateUI();
  manualDiv.style.display = 'flex';
  keeperImg.style.display = 'none';
  audioCrowd.pause();
  audioCrowd.currentTime = 0;
}

// ============================
// EFECTOS
// ============================
function lanzarConfeti() {
  const duration = 4000;
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 100,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

function shakeEstadio() {
  document.body.classList.add('shake');
  setTimeout(() => document.body.classList.remove('shake'), 1000);
}

function crearGradas() {
  const stadium = document.createElement('div');
  stadium.id = 'stadium';
  document.body.appendChild(stadium);
  const zonas = ['izquierda', 'derecha', 'arriba'];
  zonas.forEach(zona => {
    const grada = document.createElement('div');
    grada.classList.add('grada', zona);
    for (let i = 0; i < 150; i++) {
      const fan = document.createElement('div');
      fan.classList.add('fan');
      fan.style.background = `hsl(${Math.random() * 40 + 10}, 70%, 50%)`;
      grada.appendChild(fan);
    }
    stadium.appendChild(grada);
  });
}
crearGradas();

function reaccionPublico(tipo = 'gol') {
  const fans = document.querySelectorAll('.fan');
  fans.forEach(fan => {
    const original = fan.style.background || '#ff0000';
    fan.style.transition = 'all 0.3s ease';
    if (tipo === 'gol') {
      fan.style.background = 'radial-gradient(circle, #fff700, #ff0000)';
      fan.style.transform = 'scale(1.4) translateY(-8px)';
    } else {
      fan.style.background = 'radial-gradient(circle, #001133, #000000)';
      fan.style.transform = 'scale(0.8) translateY(3px)';
      fan.style.opacity = '0.6';
    }
    setTimeout(() => {
      fan.style.background = original;
      fan.style.transform = 'scale(1) translateY(0)';
      fan.style.opacity = '1';
    }, 700);
  });
}

// LOOP PRINCIPAL
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});