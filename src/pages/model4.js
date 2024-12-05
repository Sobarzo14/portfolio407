import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { createScene, handleResize } from '../utils/three-setup.js';
import { models } from '../models/model-data.js';
import { createNavigation } from '../components/navigation.js';

// Setup navigation
const nav = document.getElementById('nav');
nav.appendChild(createNavigation(4));

// Setup scene
const { scene, camera, renderer } = createScene();
const modelViewer = document.getElementById('model-viewer');
modelViewer.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Create model
const modelData = models[3];
const geometry = new THREE[modelData.geometry](...modelData.params);
const material = new THREE.MeshPhongMaterial({ color: modelData.color });
const model = new THREE.Mesh(geometry, material);
scene.add(model);

// Handle window resize
handleResize(camera, renderer);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  model.rotation.x += 0.01;
  model.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();