import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'


const scene = new THREE.Scene()
const group = new THREE.Group()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 'red'})

const cube1 = new THREE.Mesh(geometry, material)

const cube2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: 'green'}))
cube2.position.set(2, 0, 0)

const cube3 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: 'blue'}))
cube3.position.set(-2, 0, 0)

group.add(cube1)
group.add(cube2)
group.add(cube3)

scene.add(group)

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(sizes.height, sizes.width)

const clock = new THREE.Clock()

const animation = () => {

    const elapsedTime = clock.getElapsedTime()
    cube1.rotation.x = elapsedTime  * Math.PI
    cube2.rotation.y = elapsedTime * Math.PI
    renderer.render(scene, camera)
    window.requestAnimationFrame(animation)
}

animation()