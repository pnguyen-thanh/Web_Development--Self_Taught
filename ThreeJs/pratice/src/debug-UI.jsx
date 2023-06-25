import * as THREE from 'three'
import * as dat from 'lil-gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'

const gui = new dat.GUI()

const scene = new THREE.Scene()

const triangleGeometry = new THREE.BufferGeometry()

const triangleVertices = new Float32Array([
    0, 0, 0,
    0, 1, 0,
    1, 0, 0
])

const features = {
    color: 0xff0000,
    spin: () => {
        gsap.to(cube.rotation, { duration: 1, y: cube.rotation.y + 10 })
    }
}

const triangleVerticesAttribute = new THREE.BufferAttribute(triangleVertices, 3)
triangleGeometry.setAttribute('position', triangleVerticesAttribute)

const material = new THREE.MeshBasicMaterial({color: features.color})
const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1, 2, 2, 2), material)
scene.add(cube)

gui.add(cube.position, 'y', -3, 3, 0.01).name('elevation') 
gui.add(cube, 'visible')
gui.add(material, 'wireframe')
gui.addColor(features, 'color').onChange(() => {
    material.color.set(features.color)
})
gui.add(features, 'spin')
 
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
    renderer.setPixelRatio = Math.min(window.devicePixelRatio, 2)
})

const canvas = document.querySelector('.webgl')

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio = Math.min(window.devicePixelRatio, 2)
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true



const animation = () => {
    controls.update()
    // requestAnimationFrame(animation)
    renderer.render(scene, camera)
}

animation()