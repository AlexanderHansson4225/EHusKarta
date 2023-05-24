

import * as THREE from '../three.js-master/build/three.module.js'

export let rooms = {}

let file = (await fetch('TextFiles/theRoomData1.txt')).text().then(

    result => {

        let roomsStrings = result.split("\n")
        roomsStrings.forEach(element => {
            const room = element.split(',')
            rooms[room[0]] = {
                floor: room[1],
                position: new THREE.Vector3(room[2], room[3], room[4])
            }
        });
    }   
)





