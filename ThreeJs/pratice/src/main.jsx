import * as THREE from 'three'
import * as dat from 'lil-gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


const scene = new THREE.Scene()

const light = new THREE.AmbientLight(0xffffff); // soft white light
const gui = new dat.GUI()
gui.add(light, 'intensity').min(0).max(1).step(0.01)
scene.add(light);


const material = new THREE.MeshStandardMaterial()
material.color = new THREE.Color('red')
const cube = new THREE.BoxGeometry(1, 1, 1)
const cubeMesh = new THREE.Mesh(cube, material)

const geometry = new THREE.SphereGeometry(0.5, 32, 16)
const sphereMesh = new THREE.Mesh(geometry, material)

const torusGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)
const torusMesh = new THREE.Mesh(torusGeometry, material)

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    material
)

const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 2, 1, 1)
rectAreaLight.position.set(-1.5, 1, 1.5)
scene.add(rectAreaLight)

plane.rotation.x = - Math.PI * 0.5
plane.position.y = - 0.65
sphereMesh.position.x = 2
torusMesh.position.x = -2 
scene.add(cubeMesh, sphereMesh, torusMesh, plane)

const sizes = {
    height: window.innerHeight,
    width: window.innerWidth
}

const canvas = document.querySelector('.webgl')

window.addEventListener('resize', () => {
    sizes.height = window.innerHeight
    sizes.width = window.innerWidth
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

document.addEventListener('dblclick', () => {
    const fullScreenElement = document.fullscreenElement || document.webkitFullScreenElement
    if (!fullScreenElement) {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen()
        } else if (canvas.webkitFullScreenElement) {
            canvas.webkitFullScreenElement()
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.webkitExitFullScreen) {
            document.webkitExitFullScreen()
        }
    }
})

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 4
scene.add(camera)

const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
const clock = new THREE.Clock()

const animation = () => {
    controls.update()
    const elapsedTime = clock.getElapsedTime()
    renderer.render(scene, camera)
    requestAnimationFrame(animation)
}

// animation()