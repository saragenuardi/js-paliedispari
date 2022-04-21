//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//Chiedi all'utente di scegliere pari o dispari
const userChoice = prompt("Scegli pari o dispari");
console.log(userChoice);

//Chiedi all'utente un numero da 1 a 5
const userNumber = prompt("Scegli un numero tra a 1 a 5");
console.log(userNumber);

//Genera un numero causale
const userComputer = numberRandomFunction();
console.log(userComputer);

//Somma i due valori 
let sumNumber = userNumber + userComputer;
console.log(sumNumber);

//Calcola il resto della divisione per due della somma
const rest = sumNumber % 2;
console.log(rest);

//Stabilisci la condizione: se è 0 il numero è pari, altrimenti è dispari
const result = resultNumberFunction();
console.log(result);

//Confronta i risultati e stabilisci il vincitore
const winner = userWinFunction();
console.log(winner);


//FUNCTION
function resultNumberFunction() {
    let resultNumber
    if (rest === 0) {
    resultNumber = "pari";
    } else {
    resultNumber = "dispari";
    }
    return resultNumber;
}


function userWinFunction() {
    let userWin;
    if ( result === userChoice) {
        userWin = "Ha vinto User";
    } else { 
        userWin = "Ha vinto Computer";
    }
    return userWin;
}



function numberRandomFunction(){
    const numberRandom = Math.floor(Math.random() * 5) + 1;
    return numberRandom;
}