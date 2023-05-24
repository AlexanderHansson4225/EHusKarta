const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink
import {rooms} from './suggestions.js'
import * as loader from './loader.js'
let filteredSuggestions

suggBox.onclick = ()=>{
    boot(filteredSuggestions[0])
}

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; 
    filteredSuggestions = [];  

    userData = userData.toLocaleLowerCase().replace(/\s/g, '')
    //console.log(userData + "1")
    //userData.replace(/:\s*,/g,"")
    //console.log(userData + "2")

    if(userData){
        if(e.keyCode == 13){
            boot(userData)
        } 

        filteredSuggestions = Object.keys(rooms).filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            //console.log(data.toLocaleLowerCase())
            return data.toLocaleLowerCase().includes(userData); 
        });

        /*
        filteredSuggestions = filteredSuggestions.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });*/

        
        searchWrapper.classList.add("active"); 
        //console.log(filteredSuggestions[0])
        try{
            showSuggestions(filteredSuggestions);
        }catch(e){
            searchWrapper.classList.remove("active")
        }
/*
        let allList = suggBox.querySelectorAll("li")
        //allList.length
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)")
            //console.log(this)
        }*/
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    //boot(selectData)
    searchWrapper.classList.remove("active");
    
    
}

function showSuggestions(list){
    list = list.map((data)=>{
        // passing return data inside li tag
        return data = 'Click to search for: ' + data;
    })

    let listData;
    let maxLength = 1
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.slice(0,maxLength).join('');
    }
        
    suggBox.innerHTML = listData;
}

function boot(userData){
    loader.loadFloor('Models/Våning' + rooms[userData].floor + '.glb', 0.1, 0, -20, 0) 
    loader.moveHighlighter(rooms[userData].position)
    document.getElementById('våningText').textContent = "Floor: " + rooms[userData].floor

    //rooms är en nyckelvärdetabell där rummet (userdata) används som nyckel
    //värdet är ett objekt med position och våning
}

//__________________________________________________
  
 
  window.onclick = function(event) {
    document.getElementById("myDropdown").classList.toggle("show");

    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  
  







