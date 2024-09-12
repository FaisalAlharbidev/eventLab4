{/* <div id="stopLight" class="bulb"></div>
<div id="slowLight" class="bulb"></div>
<div id="goLight" class="bulb"></div> */}


let stopControl=document.getElementById("stopButton")
let slowControl=document.getElementById("slowButton")
let goControl=document.getElementById("goButton")

let RedLight=document.getElementById("stopLight");
let GraenLight=document.getElementById("goLight");
let orangLight=document.getElementById("slowLight");

stopControl.addEventListener("click",()=>{
    
    RedLight.style.backgroundColor="red"
    orangLight.style.backgroundColor=""
    GraenLight.style.backgroundColor=""


})

slowControl.addEventListener("click",()=>{
    orangLight.style.backgroundColor="orange"
    GraenLight.style.backgroundColor=""
    RedLight.style.backgroundColor=""


})

goControl.addEventListener("click",()=>{
    GraenLight.style.backgroundColor="green"
        RedLight.style.backgroundColor=""
    orangLight.style.backgroundColor=""
})
