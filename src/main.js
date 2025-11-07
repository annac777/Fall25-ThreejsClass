import './style.css'
import * as THREE from 'three'
import { addDefaultMeshes, addStandardMeshes } from './addDefaultMeshes'
import { addLight } from './addLight'
import { add } from 'three/tsl'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 0, 5)
const renderer = new THREE.WebGLRenderer({ antialias: true })
const meshes = {}
const lights = {}
init()

function init() {
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  //add our meshes into our container then add to scene
  meshes.default = addDefaultMeshes({ xPoz: -2 })
  meshes.standard = addStandardMeshes({ xPoz: 2 })
  lights.dafault = addLight()

  //add to scene
  scene.add(meshes.default)
  scene.add(meshes.standard)
  scene.add(lights.dafault)

  animate()
}

function animate() {
  meshes.standard.rotation.x += 0.01
  meshes.standard.rotation.y += 0.01
  meshes.default.rotation.x += 0.01
  meshes.default.rotation.y += 0.01
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}



