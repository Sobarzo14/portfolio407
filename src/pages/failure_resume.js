import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { createScene, handleResize } from "../utils/three-setup.js";
import { createNavigation } from "../components/navigation.js";

// Setup navigation
const nav = document.getElementById("nav");
nav.appendChild(createNavigation(2));
const resumeURL = new URL("../public/failure_resume.glb", import.meta.url);
const loader = new GLTFLoader();

// Setup scene
const { scene, camera, renderer } = createScene();
const modelViewer = document.getElementById("model-viewer");
modelViewer.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Create model
loader.load(resumeURL.href, function (gltf) {
  const model = gltf.scene;
  model.position.set(0, 0, 0);
  model.scale.set(4, 4, 4);
  scene.add(model);
});

function setupCameraMovement(camera, speed = 0.1) {
  // Keep track of pressed keys
  const keysPressed = {};

  // Update the camera position based on key states
  function moveCamera() {
    if (keysPressed["w"]) {
      // Move forward
      camera.position.z -= speed;
    }
    if (keysPressed["s"]) {
      // Move backward
      camera.position.z += speed;
    }
    if (keysPressed["a"]) {
      // Move left
      camera.position.x -= speed;
    }
    if (keysPressed["d"]) {
      // Move right
      camera.position.x += speed;
    }
  }

  // Listen to keydown and keyup events to update keysPressed
  function onKeyDown(event) {
    keysPressed[event.key.toLowerCase()] = true;
  }

  function onKeyUp(event) {
    keysPressed[event.key.toLowerCase()] = false;
  }

  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);

  // Call moveCamera in your animation loop
  return moveCamera;
}

const moveCamera = setupCameraMovement(camera);

// Handle window resize
handleResize(camera, renderer);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  moveCamera();
  renderer.render(scene, camera);
}

animate();
