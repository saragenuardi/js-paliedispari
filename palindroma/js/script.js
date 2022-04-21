//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//Chiedi all'utente di inserire una parola
const userWord = prompt("Inserisci una parola");
let result = false;
console.log(userWord);


//Fai leggere al programma la parola al contrario
let reverseWord = wordPalindrome(userWord);


//Controlla se la parola è un palindroma
if (reverseWord === userWord) {
    result = true;
}
console.log("La parola che inserito è un palindroma", result);

//function
function wordPalindrome(word) {
    let reverse = '';
    for (let index = userWord.length - 1; index >= 0; index--) {
    const char = userWord[index];
    reverse += char;
    return reverse;
    }
}