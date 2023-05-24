import * as THREE from '../three.js-master/build/three.module.js'
import {OrbitControls} from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";

//export const canvas = document.querySelector('.webgl')
export const canvas = document.getElementById('canvas')

//let ctx = canvas.getContext('webgl')
//console.log(ctx)
//ctx.fillText("hej", 20, 20)
//ctx.fillText("Hello World", 10, 50);  

export const camera = setupCamera()
export const lights = setupLights()

export const renderer = setupRenderer()
export const controls = setupControls() 

export function setupText(text){
    
}

function setupControls(){
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.maxDistance = 1500
    controls.maxZoom = 0.1
    controls.target.set(-10,-9,6)
    controls.maxPolarAngle = Math.PI/2
    controls.update()

    return controls
}

function setupRenderer(){
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setClearColor( 0xb3e3ff, 1 )
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min (window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.gammaOuput = true

    return renderer
}

export function setupCamera(){
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 5000)
    camera.position.set(0, 0, 0)

    return camera
}

export function setupLights(){
    const light1 = new THREE.DirectionalLight(0xfffade,0.8)
    const light2 = new THREE.AmbientLight(0xfffade, 0.3)

    light1.position.set(0,5,0)

    return {
        light1,
        light2
    }
}
