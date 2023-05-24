import * as THREE from '../three.js-master/build/three.module.js'

export const scenery = {
    scene: new THREE.Scene(),
    sphere: createSphere(),
    skybox: createSkybox(),
    arrow: createArrow()
}

export function createSkybox(){
    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load('Skybox/front.png');
    let texture_bk = new THREE.TextureLoader().load('Skybox/Back.jpg');
    let texture_up = new THREE.TextureLoader().load('Skybox/up.png');
    let texture_dn = new THREE.TextureLoader().load('Skybox/Down.jpg');
    let texture_rt = new THREE.TextureLoader().load('Skybox/left.jpg');
    let texture_lf = new THREE.TextureLoader().load('Skybox/right.png');
  
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));

    for (let i = 0; i < 6; i++)
        materialArray[i].side = THREE.BackSide;
   
    let skyboxGeo = new THREE.BoxGeometry(5000,5000,5000);
    let skybox = new THREE.Mesh( skyboxGeo, materialArray );
    return skybox
}

export function createSphere(){
    const geometry = new THREE.SphereGeometry(1,8,8)
    const material = new THREE.MeshBasicMaterial({
    color: 'lightgreen'
    })

    const sphereMesh = new THREE.Mesh(geometry, material)
    sphereMesh.position.set(-8,-15,7)  
    sphereMesh.scale.set(0.5,0.5,0.5)

    return sphereMesh
}

export function createArrow(){
    const dir = new THREE.Vector3(0,-1,0)
    const orgin = new THREE.Vector3(0,-100,0)
    const length = 1
    const hex = 'lightgreen'

    return new THREE.ArrowHelper(dir, orgin, length, hex)
}



/*

const scenery = (function (){
    const scene = new THREE.Scene()
    let skybox = createSkybox()
    let sphereMesh = createSphere()
    let arrow = createArrow()

    scene.add(skybox)
    scene.add(sphereMesh)
    scene.add(arrow)

    function createSkybox(){
        let materialArray = [];
        let texture_ft = new THREE.TextureLoader().load('Skybox/front.png');
        let texture_bk = new THREE.TextureLoader().load('Skybox/Back.jpg');
        let texture_up = new THREE.TextureLoader().load('Skybox/up.png');
        let texture_dn = new THREE.TextureLoader().load('Skybox/Down.jpg');
        let texture_rt = new THREE.TextureLoader().load('Skybox/left.jpg');
        let texture_lf = new THREE.TextureLoader().load('Skybox/right.png');
      
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
    
        for (let i = 0; i < 6; i++)
            materialArray[i].side = THREE.BackSide;
       
        let skyboxGeo = new THREE.BoxGeometry(5000,5000,5000);
        let skybox = new THREE.Mesh( skyboxGeo, materialArray );
        return skybox
    }
    
    function createSphere(){
        const geometry = new THREE.SphereGeometry(1,8,8)
        const material = new THREE.MeshBasicMaterial({
        color: 'lightgreen'
        })
    
        const sphereMesh = new THREE.Mesh(geometry, material)
        sphereMesh.position.set(-8,-15,7)  
        sphereMesh.scale.set(0.5,0.5,0.5)
    
        return sphereMesh
    }
    
    function createArrow(){
        const dir = new THREE.Vector3(0,-1,0)
        const orgin = new THREE.Vector3(0,-100,0)
        const length = 1
        const hex = 'lightgreen'
    
        return new THREE.ArrowHelper(dir, orgin, length, hex)
    }

    

    return {
        scene, sphereMesh, arrow
    }
    
})
    */