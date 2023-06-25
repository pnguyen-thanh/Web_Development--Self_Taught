import * as THREE from 'three'
import * as dat from 'lil-gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('./textures/matcaps/8.png')

const fontLoader = new FontLoader();

fontLoader.load(
    './fonts/helvetiker_regular.typeface.json',
    (font) => {
        const geometry = new TextGeometry("Fuck my life", {
            font: font,
            size: 0.5,
            height: 0.2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        })
        // geometry.computeBoundingBox()
        // geometry.translate(
        //     - (geometry.boundingBox.max.x - 0.02) * 0.5,
        //     - (geometry.boundingBox.max.y - 0.02) * 0.5,
        //     - (geometry.boundingBox.max.z - 0.03) * 0.5
        // )
        geometry.center()
        
        const material = new THREE.MeshMatcapMaterial({matcap: matcapTexture })
        // material.color = new THREE.Color('red')
        const text = new THREE.Mesh(geometry, material)
        scene.add(text)

        const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)

        for(let i = 0; i < 200; i++)
        {
            const donut = new THREE.Mesh(donutGeometry, material)

            donut.position.x = (Math.random() - 0.5) * 10
            donut.position.y = (Math.random() - 0.5) * 10
            donut.position.z = (Math.random() - 0.5) * 10

            donut.rotation.x = Math.random() * Math.PI
            donut.rotation.y = Math.random() * Math.PI

            const scale = Math.random()
            donut.scale.set(scale, scale, scale)
            scene.add(donut)
        }
    }
)

const scene = new THREE.Scene()

// const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)


const gui = new dat.GUI()


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
camera.position.z = 2
scene.add(camera)

const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
const clock = new THREE.Clock()

const animation = () => {
    const elapsedTime = clock.getElapsedTime()
    // cube.rotation.y = elapsedTime
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animation)
}

// animation()