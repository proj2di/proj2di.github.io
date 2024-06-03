import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'

const scene = new THREE.Scene()
const drawDist = 1000
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.01,
  drawDist
)
camera.position.z = 20

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
window.addEventListener('resize', (ev) => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})
document.body.appendChild(renderer.domElement)

function render() {
  requestAnimationFrame(render)
  renderer.render(scene, camera)
}

const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
scene.add(ambientLight)
const light1 = new THREE.SpotLight(0xff0000, 2000)
light1.position.set(-10, 0, 20)
scene.add(light1)
const light2 = new THREE.SpotLight(0x0000ff, 2000)
light2.position.set(10, 0, 20)
scene.add(light2)

const plane = new THREE.PlaneGeometry(20, drawDist)
const sky = new THREE.Mesh(
  plane,
  new THREE.MeshPhongMaterial({ color: 0x0080ff })
)
sky.position.set(0, 5, camera.position.z - drawDist / 2)
sky.rotation.x = Math.PI / 2
scene.add(sky)
const ground = new THREE.Mesh(
  plane,
  new THREE.MeshPhongMaterial({ color: 0x80ff00 })
)
ground.position.set(0, -5, camera.position.z - drawDist / 2)
ground.rotation.x = -Math.PI / 2
scene.add(ground)

const loader = new FontLoader()
loader.load('../json/regular.json', (font) => {
  const textGeo = new TextGeometry('インターネットやめろ', {
    font: font,
    size: 1,
    height: 0.1,
    curveSegments: 3
  })
  textGeo.center()
  const material = new THREE.MeshPhongMaterial({ color: 0xffffff })
  const textMesh = new THREE.Mesh(textGeo, material)
  scene.add(textMesh)

  function animate() {
    textMesh.rotation.y += Math.PI / 180
  }
  setInterval(animate, 1000 / 60)
  render()
})
