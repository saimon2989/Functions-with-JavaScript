// Exercice 1

// variables

let celsius = document.getElementById('inputC');
let farenheit = document.getElementById('inputF');
let btnC = document.getElementById('btnC');
let btnF = document.getElementById('btnF');


let convertion ;

// events

btnC.addEventListener('click', cToF);
btnF.addEventListener('click', fToC);


// functions

    function cToF(){
        let cToF = (celsius.value * 9 / 5) + 32;
        let answerC = celsius.value + '\xB0C equal to    ' +  cToF + '\xB0F';
        alert(answerC);
        console.log(answerC);
    }

    function fToC(){
        let fToC = (farenheit.value * 9 / 5 ) + 32;
        let answerF = farenheit.value + '\xB0F equal to    ' +  fToC + '\xB0C';
        alert(answerF);
        console.log(answerF);
    }


// Exercice 2

let velocity = document.getElementById('inputVelocidad');
let distance = document.getElementById('inputDistancia');


let btnGetTime = document.getElementById('btnGetTime');
let distanceKm = velocity.value / 1000;

//  Events

btnGetTime.addEventListener('click', getTime);

// Functions

function getTime(){
    let time =  distance.value / distanceKm;
    let decimalTime = time.toFixed(1);
    let answerTime = decimalTime + ' Horas.';
    alert(answerTime)
    console.log(answerTime);
}

// Exercice 3

// Variables
let stringInput = document.getElementById('stringInput');
    
    
let btnPalindromo = document.getElementById('btnPalindromo');


// functions

const getPalindromo = (string) => {
    
    // convert string in LowerCase
    let stringLowerCase = stringInput.value.toLowerCase();
    // Convert string in array
    let stringArray = stringLowerCase.split();
    // Delete empty spaces
    let stringWhitOutSpaces = '';
    for(i in stringArray){
        if(stringArray[i] != ' '){
            stringWhitOutSpaces += stringArray[i];
        }
    }
    let characteres = stringWhitOutSpaces.split('');
    let invertCharacteres = stringWhitOutSpaces.split('').reverse();
    
    let resultP = true;
    for(i in characteres){
        if(characteres[i] == invertCharacteres[i]){
            // correct palindromo phrase
            resultP = true;
        }else {
            // some letter's are different so the phrase it's not a palindromo
            resultP = false;
        }
    }
    
    let answerP = 'La frase \''+stringInput.value+'\'\n';
    if(resultP){
        answerP += 'Es un Palíndromo'
    }else {
        answerP += 'No es un palíndromo'
    }
    alert(answerP);
    return console.log(answerP);
}

// events
btnPalindromo.addEventListener('click', getPalindromo);

