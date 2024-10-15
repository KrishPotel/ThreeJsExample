import * as THREE from "three";
import {OrbitControls} from "jsm/controls/OrbitControls.js"
import { GLTFLoader } from 'jsm/loaders/GLTFLoader.js';


const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);

const fov = 75;
const ascpect = w/h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov,ascpect,near,far);
camera.position.z = 2;

const scene = new THREE.Scene()

const controls = new OrbitControls(camera,renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.01;

const loader = new GLTFLoader().setPath("/Models/");

loader.load("MHLogo.glb", (gltf) => {
    const mesh = gltf.scene;
    mesh.material = 
    scene.add(mesh)
})

const hemiLight = new THREE.HemisphereLight(0x0099fff,0xaa5500);
scene.add(hemiLight);
// wireMesh.scale.setScalar(1.0001)

function animate(t = 0){
    // console.log(t)
    requestAnimationFrame(animate);
    // mesh.rotation.y = t * 0.0001;
    renderer.render(scene,camera);
    controls.update();
}
animate()