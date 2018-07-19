const div = document.getElementById('scene');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 10000 );

const renderer = new THREE.WebGLRenderer({ antialias:true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xFFFFFF );
div.appendChild(renderer.domElement);

camera.position.z = 190;

const light = new THREE.DirectionalLight( 0xfcf9e8, 1 );
scene.add(light);
const ambiColor = "#cbc9bb";
const ambientLight = new THREE.AmbientLight(ambiColor);
scene.add(ambientLight);

const manager = new THREE.LoadingManager();

manager.onProgress = function ( item, loaded, total ) {

};


const onProgress = function ( xhr ) {
  if ( xhr.lengthComputable ) {
    let percentComplete = xhr.loaded / xhr.total * 100;
    console.log( Math.round(percentComplete, 2) + '% downloaded' );
  }
};

const onError = function ( xhr ) { };

const objLoader = new THREE.OBJLoader();

objLoader.load( '../model/House_Complex.obj', function ( object ) {
  scene.add(object);
}, onProgress, onError );

let controls = new THREE.TrackballControls( camera );

controls.rotateSpeed = 1.0;
controls.zoomSpeed = 1.2;
controls.panSpeed = 0.8;

const render = function () {
  requestAnimationFrame( render );
  controls.update();
  renderer.render(scene, camera);
};

render();


let b = document.getElementById('button');
b.addEventListener('click', () => {
  let x1 = document.getElementById('X');
  let y1 = document.getElementById('Y');
  let h = document.getElementById('H');
  let a = document.getElementById('A');
  let u = document.getElementById('U');

  u = Math.tan((+u.value * Math.PI)/180);
  const r = (+h.value / u);

  a = (+a.value * Math.PI)/180;
  x1= +x1.value;
  y1= +y1.value;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const x = x1 - r * s;
  const y = y1 + r * c;

  const lineGeometry = new THREE.Geometry();
  lineGeometry.vertices.push(new THREE.Vector3(x1, 60, y1));
  lineGeometry.vertices.push(new THREE.Vector3(x, h.value, y));
  const lineMaterial = new THREE.LineBasicMaterial({color:0xE32636, linewidth:3});
  const line = new THREE.Line(lineGeometry, lineMaterial);
  scene.add(line);

  objLoader.load( '../model/omid.obj', function ( object ) {
    object.position.x=x;
    object.position.y= +h.value;
    object.position.z= y + 130;
    scene.add(object);
    console.log(object)
  }, onProgress, onError );

});