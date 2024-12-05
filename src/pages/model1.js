import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { createScene, handleResize } from '../utils/three-setup.js';
import { models } from '../models/model-data.js';
import { createNavigation } from '../components/navigation.js';

// Setup navigation
const nav = document.getElementById('nav');
nav.appendChild(createNavigation(1));

const carURL = new URL(
  "../public/car_on_fire_animation.glb",
  import.meta.url
);
const loader = new GLTFLoader();

// Setup scene
const { scene, camera, renderer } = createScene();
const modelViewer = document.getElementById('model-viewer');
modelViewer.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Create model
loader.load(carURL.href, function (gltf) {
  const model = gltf.scene;
  scene.add(model);
});

// Handle window resize
handleResize(camera, renderer);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();