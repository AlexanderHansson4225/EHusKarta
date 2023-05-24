import {scenery} from './sceneryHandler.js'
import * as renderHandler from './renderHandler.js'
import * as loader from './loader.js'

const scene = scenery.scene


loader.loadGround("Models/ELEKARTA.glb", 0.14, -12, -16, 8, -Math.PI/2)
//load("Models/ELEKARTA.glb", 0.14, -12, -16, 8, -Math.PI/2)
loader.loadFloor("Models/Våning0.glb", 0.1, 0, -20, 0)

scene.add(scenery.skybox)
scene.add(scenery.sphere)
scene.add(scenery.arrow)

scene.add(renderHandler.camera)
scene.add(renderHandler.lights.light1)
scene.add(renderHandler.lights.light2)

animate()

function animate(){
    requestAnimationFrame(animate)
    renderHandler.renderer.render(scene, renderHandler.camera)
}