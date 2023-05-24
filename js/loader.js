import * as THREE from '../three.js-master/build/three.module.js'
import {GLTFLoader} from '../three.js-master/examples/jsm/loaders/GLTFLoader.js'
import {scenery} from './sceneryHandler.js'
import * as renderHandler from './renderHandler.js'

const loader = new GLTFLoader()
let object

function tweakObject(object, scale, x, y, z, rotation){
    object.scale.set(scale,scale*0.7,scale)
    object.rotateY(rotation)
    object.position.set(x,y,z)
    object.material = new THREE.MeshNormalMaterial()
    scenery.scene.add(object)
}

export function loadGround(adress, scale, x, y, z, rotation){
    loader.load(adress, function(glb){      
        let object = glb.scene 
        tweakObject(object, scale, x, y, z, rotation)
        
        //fult. Finns bättre lösning?
    })
}

export function loadFloor(adress, scale, x, y, z){
    scenery.scene.remove(object)
    loader.load(adress, function(glb){      
        object = glb.scene 
        tweakObject(object, scale, x, y, z, 0)
        
        const sPos = scenery.sphere.position
        renderHandler.camera.position.set(sPos.x, parseFloat(sPos.y) + 15, sPos.z)
        renderHandler.camera.lookAt(sPos)
        
        //fult. Finns bättre lösning?
    })
}

export function moveHighlighter(vector){
    scenery.sphere.position.set(vector.x, vector.y, vector.z)
    scenery.arrow.position.set(vector.x, parseFloat(vector.y) + 2, vector.z) 
    renderHandler.controls.target.set(parseFloat(vector.x), parseFloat(vector.y), parseFloat(vector.z))
}