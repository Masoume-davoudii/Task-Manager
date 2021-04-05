//=============================Dark Mode==============================

function changeMood() {
   document.querySelector("body").style.backgroundColor='none';
   document.querySelector("body").style.backgroundImage='none';
   var element = document.querySelector("body")
   element.classList.toggle("dark-mode");
}

//=============================Color Palette===========================
function ChangeBackgroundColor(value){
    document.querySelector("body").style.backgroundImage='none';
    var element = document.querySelector("body");
    element.classList.remove("body")
    document.querySelector("body").style.backgroundColor=value;
}
//=============================Set background image====================
input=document.querySelector('#set-image');
input.style.opacity = 0;
input.style.width =0;
input.style.height =0;
input.addEventListener('change', readURL, true);
function readURL(){

var file = document.getElementById("set-image").files[0];
var reader = new FileReader();
reader.onloadend = function(){
    document.getElementsByTagName('body')[0].style.backgroundImage = "url(" + reader.result + ")";        
}
if(file){
    reader.readAsDataURL(file);
    }else{
    }
}
//===============================Clock====================================

    function clock(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("clock").innerText = h + ":" + m + ":" + s + " " + session;
    setTimeout(clock, 1000);
    }

    clock();

//============================music background=========================

 var playing =true;
 var music = new Audio("./music/pardes.mp3");
 function playMusic(){
    
    if(playing){
        playing=false;
        music.play();
        
    }else{
        playing=true;
        music.pause();
       
    }
 }

 