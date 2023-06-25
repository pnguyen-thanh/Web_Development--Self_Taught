import * as THREE from 'three'
import * as dat from 'lil-gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'

const textureLoader = new THREE.TextureLoader()
const doorColorTexture = textureLoader.load('./textures/door/color.jpg')
const alphaColorTexture = textureLoader.load('./textures/door/alpha.jpg')
const ambientColorTexture = textureLoader.load('./textures/door/ambientOcclusion.jpg')
const heightColorTexture = textureLoader.load('./textures/door/height.jpg')
const metalnessColorTexture = textureLoader.load('./textures/door/metalness.jpg')
const normalColorTexture = textureLoader.load('./textures/door/normal.jpg')
const roughnessColorTexture = textureLoader.load('./textures/door/roughness.jpg')
const matcaptureTexture = textureLoader.load('./textures/matcaps/1.png')
const gradientTexture = textureLoader.load('./textures/gradients/3.jpg')

const scene = new THREE.Scene()

const gui = new dat.GUI()

// const material = new THREE.MeshMatcapMaterial()
const material = new THREE.MeshStandardMaterial()
material.roughness = 0.65
material.metalness = 0.45
gui.add(material, 'metalness').min(0).max(1).step(0.001)
gui.add(material, 'roughness').min(0).max(1).step(0.001)
// material.map = doorColorTexture
// material.color = new THREE.Color('red')
// material.wireframe = true
// material.flatShading = true

// material.opacity = 0.5
// material.transparent = true
// material.alphaMap = alphaColorTexture
// material.side = THREE.DoubleSide //backside, frontside
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)
scene.add(ambientLight)



const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    material
)

sphere.position.x = -1.5

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 16, 32),
    material
)

torus.position.x = 1.5

scene.add(sphere, plane, torus)

const canvas = document.querySelector('.webgl')

const sizes = {
    height: window.innerHeight,
    width: window.innerWidth
}

window.addEventListener('resize', () => {
    sizes.height = window.innerHeight
    sizes.width = window.innerWidth
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

window.addEventListener('dblclick', () => {
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
camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
const clock = new THREE.Clock()

const animation = () => {
    const elapsedTime = clock.getElapsedTime()

    sphere.rotation.y = elapsedTime * 0.1
    plane.rotation.y = elapsedTime * 0.1
    torus.rotation.y = elapsedTime * 0.1

    sphere.rotation.x = elapsedTime * 0.15
    plane.rotation.x = elapsedTime * 0.15
    torus.rotation.x = elapsedTime * 0.15

    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animation)
}

animation()