let button= document.getElementById("button")
let form= document.getElementById("form")
let message= document.getElementById("message")
let link= document.getElementById("link")

    // ça donne un numero random de 1/100
const secretNumber = Math.floor(Math.random () *100);
    // Numero des tentatives
let numberTurns = 5 ;

let numberTurnsId = document.querySelector("#numberTurnsId span")

button.onclick = function() {
    const input =document.getElementById("input") ;
    // Si value n'est pas vide
    if(input.value != "") {
    // Si value est plus petit que le numero secret
        if(input.value < secretNumber) {
            message.innerText="The number is greater than " + input.value + "" ;
            message.style.color="#999" ;
            numberTurns-- ;
    // Si value est plus grand que le numero secret
        } else {
            message.innerText="The number is smaller than " + input.value + "" ;
            message.style.color="#999" ;
            numberTurns-- ;
        }
    // Si les tentatives sont arrivé a 0
        if(numberTurns == 0) {
            message.innerText="You lost, you had to find " + secretNumber + "" ;
            message.style.color="red" ;
            form.style.display="none" ;
            link.style.display="flex" ;
        }
           
            
              
    // Si les tentatives sont plus eleve ou egale à 0, ça affiche les numero de tentatives que la personne a 

            if ( numberTurns >= 0) {
                numberTurnsId.innerText= numberTurns ;
            }
    // Si value est egale au numero secret
            if(input.value == secretNumber) {
                message.innerText="Well done, you found the number " + secretNumber + "" ;
                message.style.color="green" ;
                form.style.display="none" ;
                link.style.display="flex" ;
            }
     // Message qui est affiché si value est vide
    } else {
        message.innerText ="The field is empty !" ;
        message.style.color="red" ;
    }
}