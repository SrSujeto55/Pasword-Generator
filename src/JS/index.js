const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const charactersLight = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let inputLength = 15;

function generate() {
    let checkbox = document.getElementById("specialist");
    let fstGen = document.querySelector("#pass_1");
    let sndGen = document.querySelector("#pass_2");
    let firtsPass = "";
    let sencondPass = "";
    
    if(checkbox.checked){
        for(let i = 0; i < inputLength; i++){
            firtsPass += characters[Math.floor(Math.random()*91)];
            sencondPass += characters[Math.floor(Math.random()*91)];
        }
    }else{
        for(let i = 0; i < inputLength; i++){
            firtsPass += charactersLight[Math.floor(Math.random()*52)];
            sencondPass += charactersLight[Math.floor(Math.random()*52)];
        }
    }
    
    fstGen.textContent = firtsPass
    sndGen.textContent = sencondPass
}

async function copy(identifier) {
    let copyText;

    if(identifier === 'L'){
        copyText = document.getElementById('pass_1').innerHTML;
    }else{
        copyText = document.getElementById('pass_2').innerHTML;
    }
    
   await navigator.clipboard.writeText(copyText);

   var tooltip = document.getElementById("myTooltip1");
   tooltip.innerHTML = "Copied: " + copyText;

   var tooltip = document.getElementById("myTooltip2");
   tooltip.innerHTML = "Copied: " + copyText;
}

function outFnc(){
    var tooltip = document.getElementById("myTooltip1");
    tooltip.innerHTML = "Copy on clipboard";

    var tooltip = document.getElementById("myTooltip2");
   tooltip.innerHTML = "Copy on clipboard";
}

function getVal() {
    var errorText = document.querySelector("#ErrorText");
    var inputData = document.querySelector("#inputLength").value;
    inputData = parseInt(inputData);

    if(!Number.isInteger(inputData)){
        inputData.textContent = "15";
        console.log("FATAL ERROR, NOT A NUMBER");
        errorText.textContent = "Not a number. Using default length (15)";
        inputLength = 15;

    }else if(inputData > 50){
        errorText.textContent = "Dangerous length, using MaxLength (50)";
        inputLength = 50;

    }else{
        errorText.textContent = "";
        inputLength = inputData;
    }
}
