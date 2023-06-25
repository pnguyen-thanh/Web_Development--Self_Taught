import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'



const cursor = {
    x: 0,
    y: 0
}

const scene = new THREE.Scene()

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 'red'}))
scene.add(cube1)

const canvas = document.querySelector('.webgl')
const sizes = {
    width: 600,
    height: 600
}

canvas.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
    console.log(cursor.x, cursor.y)
})

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 2)
camera.lookAt(cube1.position)
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(800, 600)
const clock = new THREE.Clock()


const animation = () => {
    const elapsedTime = clock.getElapsedTime()
    // cube1.rotation.y = elapsedTime
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    // camera.position.y = cursor.y * 3
    controls.update()
    camera.lookAt(cube1.position)
    requestAnimationFrame(animation)
    renderer.render(scene, camera)
}

animation()