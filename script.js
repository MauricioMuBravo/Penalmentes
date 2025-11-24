const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setClearColor(0x000000,0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1,1000);
camera.position.set(0,2,8);

const light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(5,10,10);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff,0.5));

const ballMat = new THREE.MeshStandardMaterial({color:0xffffff});
const ball = new THREE.Mesh(new THREE.SphereGeometry(0.25,16,16),ballMat);
ball.position.set(0,0.25,6);
scene.add(ball);

// ============================
// AUDIOS
// ============================
const audioShoot = new Audio('https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/tiro.mp3');
const audioGoal = new Audio('https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/Gool.mp3');
const audioFail = new Audio('https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/fallo.mp3');
const audioCrowd = new Audio('https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/09.Septiembre/Mundial-2026/gente.mp3');
const audioLevelUp = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_52c9866d55.mp3?filename=level-up-191997.mp3');
audioCrowd.loop = true;
audioCrowd.volume = 0.4;

// ============================
// ELEMENTOS HTML
// ============================
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
const keeperImg = document.getElementById('keeper');
keeperImg.style.display = 'none';

// ============================
// BOTON SILENCIAR PÚBLICO
// ============================
const muteCrowdBtn = document.getElementById('muteCrowd');
let crowdMuted = false;
muteCrowdBtn.addEventListener('click', () => {
crowdMuted = !crowdMuted;
audioCrowd.muted = crowdMuted;
muteCrowdBtn.textContent = crowdMuted ? "🔇 Público silenciado" : "🔊 Silenciar público";
});

// ============================
// ESTADO
// ============================
let goles = 0, tiros = 0, vidas = 3, nivel = 1, busy = false;
let currentQuestionObj = null;
let preguntasRestantes = [];

// ============================
// FUNCIONES AUX
// ============================
function updateUI() {
golesEl.textContent = goles;
tirosEl.textContent = tiros;
vidasEl.textContent = vidas;
nivelEl.textContent = nivel;
}
function shuffle(arr){ return arr.sort(()=>Math.random()-0.5);}
function easeOutQuad(t){ return t*(2-t); }
// ============================
// PREGUNTAS
// ============================
const preguntas = [
  [ // nivel1
    { q:"¿Quién ganó el Mundial 2018?", a:"Francia", options:["Francia","Croacia","Brasil"], hintText:"El campeón de 2018 es europeo y ganó su segundo Mundial.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2018", exp:"Francia ganó 4-2 a Croacia en la final.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2018" },
    { q:"¿Qué país tiene más Mundiales?", a:"Brasil", options:["Argentina","Brasil","Italia"], hintText:"El país sudamericano con más Copas del Mundo.", hintLink:"https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Brasil", exp:"Brasil tiene 5 títulos.", link:"https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Brasil" },
    { q:"¿Quién ganó el Mundial 2010?", a:"España", options:["España","Países Bajos","Alemania"], hintText:"Ganó su primer Mundial en casa de España.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2010", exp:"España ganó 1-0 con gol de Iniesta.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2010" },
    { q:"¿Quién fue campeón del Mundial 2006?", a:"Italia", options:["Italia","Francia","Alemania"], hintText:"Venció en penales a Francia en 2006.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2006", exp:"Italia ganó 5-3 en penales a Francia.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2006" },
    { q:"¿Qué país ganó el primer Mundial (1930)?", a:"Uruguay", options:["Uruguay","Argentina","Italia"], hintText:"País sudamericano que fue el primer campeón mundial.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1930", exp:"Uruguay fue el primer campeón en 1930.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1930" }
  ],
  [ // nivel2
    { q:"¿Qué país ganó el Mundial 1998?", a:"Francia", options:["Brasil","Francia","Croacia"], hintText:"Ganó su primer Mundial en 1998 como anfitrión.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1998", exp:"Francia ganó 3-0 a Brasil en la final.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1998" },
    { q:"Quién ganó más Balones de Oro hasta 2022?", a:"Lionel Messi", options:["Cristiano Ronaldo","Lionel Messi","Ronaldinho"], hintText:"Jugador argentino con 7 Balones de Oro.", hintLink:"https://es.wikipedia.org/wiki/Lionel_Messi", exp:"Messi tiene 7 Balones de Oro.", link:"https://es.wikipedia.org/wiki/Lionel_Messi" },
    { q:"¿Qué país ganó el Mundial 1994?", a:"Brasil", options:["Italia","Brasil","Suecia"], hintText:"País sudamericano que ganó en penales en 1994.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1994", exp:"Brasil venció a Italia en penales.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1994" },
    { q:"Quién fue el goleador del Mundial 2002?", a:"Ronaldo", options:["Ronaldo","Miroslav Klose","Rivaldo"], hintText:"Delantero brasileño con 8 goles en 2002.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2002", exp:"Ronaldo marcó 8 goles en 2002.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2002" },
    { q:"Dónde se celebró el Mundial 2014?", a:"Brasil", options:["Brasil","Alemania","Argentina"], hintText:"País sudamericano que organizó la Copa 2014.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2014", exp:"Brasil fue anfitrión en 2014.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2014" }
  ],
  [ // nivel3
    { q:"¿Qué selección ganó el Mundial 1978?", a:"Argentina", options:["Argentina","Holanda","Alemania"], hintText:"Ganó en tiempo extra en 1978.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1978", exp:"Argentina ganó 3-1 a Holanda en tiempo extra.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1978" },
    { q:"Quién fue el máximo goleador de 1986?", a:"Gary Lineker", options:["Diego Maradona","Gary Lineker","Careca"], hintText:"Delantero inglés con 6 goles en 1986.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1986", exp:"Lineker marcó 6 goles en 1986.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1986" },
    { q:"Cuál fue la final del Mundial 2006?", a:"Italia vs Francia", options:["Italia vs Francia","Brasil vs Alemania","España vs Holanda"], hintText:"Se decidió en penales entre dos europeos.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2006", exp:"Italia ganó 5-3 en penales a Francia.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2006" },
    { q:"Qué país ganó el Mundial 1934?", a:"Italia", options:["Italia","Checoslovaquia","Alemania"], hintText:"País europeo que ganó su segundo Mundial en 1934.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1934", exp:"Italia ganó en 1934.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1934" },
    { q:"Quién marcó el gol de la final 2010?", a:"Andrés Iniesta", options:["David Villa","Andrés Iniesta","Xavi Hernández"], hintText:"Mediocampista español que hizo el gol del título.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2010", exp:"Iniesta marcó el gol del título en 2010.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2010" }
  ],
  [ // nivel4
    { q:"Cuál fue el primer Mundial televisado?", a:"1954", options:["1950","1954","1962"], hintText:"Primera retransmisión televisiva amplia en Europa.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1954", exp:"1954 fue el primero con retransmisión televisiva amplia.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1954" },
    { q:"Qué país ganó el Mundial 1938?", a:"Italia", options:["Italia","Hungría","Brasil"], hintText:"Ganó consecutivamente tras 1934.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1938", exp:"Italia ganó en Francia 1938.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1938" },
    { q:"Quién fue goleador en 1974?", a:"Grzegorz Lato", options:["Johan Cruyff","Grzegorz Lato","Gerd Müller"], hintText:"Jugador polaco con 7 goles en 1974.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1974", exp:"Lato anotó 7 goles en 1974.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1974" },
    { q:"Quién ganó el Mundial 1990?", a:"Alemania Occidental", options:["Alemania Occidental","Argentina","Italia"], hintText:"País europeo que venció a Argentina en 1990.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1990", exp:"Alemania ganó 1-0 a Argentina en 1990.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1990" },
    { q:"Qué país ganó el Mundial 1966?", a:"Inglaterra", options:["Inglaterra","Alemania","Brasil"], hintText:"Organizó y ganó en casa en 1966.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1966", exp:"Inglaterra ganó 4-2 a Alemania en 1966.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1966" }
  ],
  [ // nivel5
    { q:"Quién marcó el gol más rápido en un Mundial?", a:"Hakan Şükür", options:["Hakan Şükür","Pelé","Klose"], hintText:"Gol en menos de 15 segundos en 2002.", hintLink:"https://es.wikipedia.org/wiki/Hakan_%C5%9E%C3%BCk%C3%BCr", exp:"Hakan Şükür marcó a los 11 segundos en 2002.", link:"https://es.wikipedia.org/wiki/Hakan_%C5%9E%C3%BCk%C3%BCr" },
    { q:"Qué país organizó el Mundial 2006?", a:"Alemania", options:["Alemania","Japón","Sudáfrica"], hintText:"Organizó la Copa tras Corea-Japón 2002.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2006", exp:"Alemania fue anfitrión en 2006.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_2006" },
    { q:"Quién ganó el Mundial 1982?", a:"Italia", options:["Italia","Alemania","Francia"], hintText:"Ganó su tercer título en 1982.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1982", exp:"Italia venció a Alemania 3-1.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1982" },
    { q:"Quién ganó el Mundial 1994?", a:"Brasil", options:["Brasil","Italia","Suecia"], hintText:"Ganó en penales contra Italia.", hintLink:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1994", exp:"Brasil ganó en penales a Italia.", link:"https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1994" },
    { q:"Cuál fue el máximo goleador de 2006?", a:"Miroslav Klose", options:["Ronaldo","Miroslav Klose","Thierry Henry"], hintText:"Delantero alemán con 5 goles.", hintLink:"https://es.wikipedia.org/wiki/Miroslav_Klose", exp:"Klose marcó 5 goles en 2006.", link:"https://es.wikipedia.org/wiki/Miroslav_Klose" }
  ]
];
// ============================
// BALÓN DE PISTA Y MODAL FUNCIONAL
// ============================
const hintBall = document.getElementById('hintBall');
hintBall.src = "https://cdnpublicidad.milenio.com/2025/PublicidadEditorial/05.Mayo/slider-yt/ProyectoMundial2026/balon.png";
hintBall.style.display = 'none';

const hintModal = document.getElementById('hintModal');
const hintTextEl = document.getElementById('hintText');
const hintLinkBtn = document.getElementById('hintLinkBtn');
const closeHintBtn = document.getElementById('closeHintBtn');

hintBall.addEventListener('click', () => {
if(!currentQuestionObj) return;
hintTextEl.textContent = currentQuestionObj.hintText || "No hay pista disponible";
hintModal.classList.remove('hidden');
});

hintLinkBtn.addEventListener('click', () => {
if(currentQuestionObj && currentQuestionObj.hintLink) window.open(currentQuestionObj.hintLink,'_blank');
});

closeHintBtn.addEventListener('click', () => {
hintModal.classList.add('hidden');
});

function actualizarHintBall() {
if(currentQuestionObj && currentQuestionObj.hintText){
hintBall.style.display = 'block';
} else {
hintBall.style.display = 'none';
}
}
// ============================
// NUEVA PREGUNTA
// ============================
function cargarPreguntasNivel(){
const pool = preguntas[Math.max(0, Math.min(preguntas.length-1,nivel-1))];
preguntasRestantes = shuffle([...pool]);
}
function nuevaPregunta(){
if(preguntasRestantes.length === 0){
subirNivel();
return;
}

keeperImg.style.transform = 'translateX(-50%)';
ball.position.set(0,0.25,6);

currentQuestionObj = preguntasRestantes.pop();

const qBox = document.getElementById('question-container');
qBox.style.display = 'block';
qBox.style.opacity = '0';
setTimeout(()=>qBox.style.opacity='1',50);

questionEl.textContent = currentQuestionObj.q;
const opts = shuffle([...currentQuestionObj.options]);
optionsEl.forEach((btn,i)=>{
btn.textContent = opts[i] || '';
btn.dataset.correct = (opts[i] === currentQuestionObj.a) ? 'true' : 'false';
btn.dataset.exp = currentQuestionObj.exp;
btn.dataset.link = currentQuestionObj.link;
btn.dataset.index = i;
});

actualizarHintBall();
}
// ============================
// ANIMACION PENAL + PORTERO (con rebote)
// ============================
function animarPenal(correct, btn){
  if(busy) return;
  busy = true;
  audioShoot.play().catch(()=>{});

  const index = parseInt(btn.dataset.index);
  const positions = [-2, 0, 2];
  const targetX = positions[index] || 0;
  const startBall = ball.position.clone();

  // Balón más atrás si el portero detiene
  const endBall = correct
    ? new THREE.Vector3(targetX, 0.25, -7) // gol
    : new THREE.Vector3(targetX, 0.25, -5.5); // portero detiene

  let t = 0;
  let rebote = false;

  function step(){
    t += 0.02 / 1.2;
    if(t>1) t=1;
    const easedT = easeOutQuad(t);
    const y = startBall.y + Math.sin(Math.PI * easedT) * 2;

    ball.position.set(
      startBall.x + (endBall.x - startBall.x) * easedT,
      y,
      startBall.z + (endBall.z - startBall.z) * easedT
    );

    const keeperStartX = 0;
    let keeperDir;
    if(targetX === 0) keeperDir = Math.random() < 0.5 ? -1 : 1;
    else keeperDir = correct ? -Math.sign(targetX) : Math.sign(targetX);

    const keeperMoveAmp = targetX===0 ? 100 : 50;
    const keeperTilt = correct ? 15 : 20;
    const keeperX = keeperStartX + keeperDir * keeperMoveAmp * easedT;
    const keeperY = Math.sin(Math.PI * easedT) * (correct ? 5 : 12);
    const keeperRot = keeperDir * keeperTilt * easedT;

    // Portero más atrás en la vista web
    keeperImg.style.bottom = '130px';
    keeperImg.style.transform = `translate(calc(-50% + ${keeperX}px), ${-keeperY}px) rotateZ(${keeperRot}deg)`;

    // Simula parada real del portero
    if(!correct && t>=0.75 && !rebote){
      rebote = true;
      audioFail.play().catch(()=>{});
      const startZ = ball.position.z;
      const endZ = startZ + 0.3; // se detiene frente al portero
      const startY = ball.position.y;
      const endY = 0.25;
      let rT = 0;
      function reboteAnim(){
        rT += 0.05/0.3;
        if(rT>1) rT=1;
        ball.position.z = startZ + (endZ-startZ)*rT;
        ball.position.y = startY + (endY-startY)*(1-rT);
        if(rT<1) requestAnimationFrame(reboteAnim);
      }
      reboteAnim();
    }

    if(t<1) requestAnimationFrame(step);
    else finalizarAnimacion();
  }

  step();

  function finalizarAnimacion(){
    tiros++;
    const qBox = document.getElementById('question-container');

    if(correct){
      goles++;
      audioGoal.play().catch(()=>{});
      lanzarConfeti();
      shakeEstadio('gol');
      explanationText.textContent = "¡Goool! 🎉";
      explanationEl.style.display = 'block';
      continueBtn.style.display = 'none';
      moreInfoBtn.style.display = 'none';
      setTimeout(()=>{
        explanationEl.style.display = 'none';
        qBox.style.display='block';
        qBox.style.opacity='1';
        nuevaPregunta();
        busy=false;
      },2000);
    } else {
      vidas--;
      audioFail.play().catch(()=>{});
      shakeEstadio('fallo');
      explanationText.textContent = btn.dataset.exp;
      explanationEl.style.display='block';
      continueBtn.style.display='inline-block';
      moreInfoBtn.style.display='inline-block';
      moreInfoBtn.onclick = ()=>window.open(btn.dataset.link,'_blank');
      continueBtn.onclick = ()=>{
        explanationEl.style.display='none';
        qBox.style.display='block';
        qBox.style.opacity='1';
        nuevaPregunta();
        busy=false;
      };
    }

    updateUI();
    if(vidas<=0) mostrarGameOver("Sin vidas 😢");
  }
}
// ============================
// SUBIR DE NIVEL
// ============================
function subirNivel(){
  if(nivel >= preguntas.length){
    mostrarGameOver("🏆 ¡Has completado todos los niveles!");
    return;
  }

  nivel++;
  goles=0;
  tiros=0;
  cargarPreguntasNivel();
  updateUI();
  audioLevelUp.play().catch(()=>{});

  const lvlMsg = document.createElement('div');
  lvlMsg.className='level-up';
  lvlMsg.textContent = `🏆 ¡Nivel ${nivel} desbloqueado!`;
  document.body.appendChild(lvlMsg);

  setTimeout(()=> lvlMsg.classList.add('show'),50);
  setTimeout(()=>{
    lvlMsg.classList.remove('show');
    setTimeout(()=>lvlMsg.remove(),500);
  },4000);

  setTimeout(()=> nuevaPregunta(),4200);
}

// ============================
// EVENTOS RESPUESTA
// ============================
optionsEl.forEach(btn=>{
  btn.addEventListener('click',()=>{
    if(busy) return;
    const correct = btn.dataset.correct==='true';
    const qBox = document.getElementById('question-container');
    qBox.style.opacity='0';
    setTimeout(()=>qBox.style.display='none',500);
    animarPenal(correct,btn);
  });
});

// ============================
// BALÓN DE INICIO
// ============================
startBtn.addEventListener('click', () => {
  const startBall = document.createElement('div');
  startBall.id='start-ball';
  document.body.appendChild(startBall);
  setTimeout(()=> startBall.classList.add('shoot'),100);

  manualDiv.style.transition='opacity 0.8s ease';
  manualDiv.style.opacity='0';

  setTimeout(()=>{
    manualDiv.style.display='none';
    startBall.remove();

    keeperImg.style.display='block';
    keeperImg.style.width='200px';
    keeperImg.style.bottom='145px';
    keeperImg.style.left='50%';
    keeperImg.style.transform='translateX(-50%)';
    keeperImg.style.opacity='1';

    cargarPreguntasNivel();
    updateUI();
    nuevaPregunta();
    audioCrowd.play().catch(()=>{});
  },1000);
});

// ============================
// EFECTOS
// ============================
function lanzarConfeti(){ 
  const duration=2000; 
  const end = Date.now()+duration; 
  (function frame(){ 
    confetti({ particleCount:5, angle:60, spread:100, origin:{x:Math.random(),y:Math.random()-0.2} }); 
    if(Date.now()<end) requestAnimationFrame(frame); 
  })(); 
}

function shakeEstadio(tipo='fallo'){
  const body=document.body;
  body.classList.add('shake');
  body.style.transition='background-color 0.3s ease';
  body.style.backgroundColor = tipo==='gol'
    ? 'rgba(0,255,0,0.1)'
    : 'rgba(255,0,0,0.1)';
  setTimeout(()=>{
    body.classList.remove('shake');
    body.style.backgroundColor='';
  },800);
}

// ============================
// FIN DE JUEGO
// ============================
function mostrarGameOver(mensaje){
  const modal = document.getElementById('game-over-modal');
  document.getElementById('game-over-msg').textContent = mensaje;
  document.getElementById('final-score').textContent = goles;
  modal.style.display='flex';
  document.getElementById('retryBtn').onclick = ()=>{
    modal.style.display='none';
    resetJuego();
  };
}

function resetJuego(){
  goles = 0;
  tiros = 0;
  vidas = 3;
  nivel = 1;
  busy = false;
  updateUI();

  // Reiniciar entorno visual
  keeperImg.style.display = 'none';
  explanationEl.style.display = 'none';
  continueBtn.style.display = 'inline-block';
  moreInfoBtn.style.display = 'inline-block';

  //Detener sonido del público
  audioCrowd.pause();
  audioCrowd.currentTime = 0;

  //Mostrar nuevamente el manual
  manualDiv.style.display = 'flex';
  manualDiv.style.opacity = '1';

  //Asegurar que no queden preguntas activas
  preguntasRestantes = [];
}

// --- Créditos ---
const creditsBtn = document.getElementById('creditsBtn');
const creditsModal = document.getElementById('creditsModal');
const closeCreditsBtn = document.getElementById('closeCreditsBtn');

creditsBtn.addEventListener('click', () => {
  creditsModal.classList.remove('hidden');
});

closeCreditsBtn.addEventListener('click', () => {
  creditsModal.classList.add('hidden');
});

// ============================
// LOOP PRINCIPAL THREE.JS
// ============================
function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
}
animate();

window.addEventListener('resize',()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth,window.innerHeight);
});