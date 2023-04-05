const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


function generate() {
    let fstGen = document.querySelector("#pass_1")
    let sndGen = document.querySelector("#pass_2")
    let firtsPass = ""
    let sencondPass = ""

    for(let i = 0; i < 15; i++){
        firtsPass += characters[Math.floor(Math.random()*91)]
        sencondPass += characters[Math.floor(Math.random()*91)]
    }
    
    fstGen.textContent = firtsPass
    sndGen.textContent = sencondPass
}