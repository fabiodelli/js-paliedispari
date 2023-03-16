
/* const insertWord = prompt("inserisci una parola") */
/* let start = insertWord
let end = insertWord
let startArray = []
console.log(startArray)
let endArray = []
console.log(endArray)

for (let i = 0; i < start.length; i++) {
    const currentLecter = start[i];
    startArray.push(currentLecter)  
}

for (let i = end.length-1;i>=0; i--) {
    const currentLecter = end[i];
    endArray.push(currentLecter)  
}

if(startArray === endArray){
    console.log("palindromo")
}else{
    console.log("non palindromo")
} */


// Chiedi all'utente di inserire una parola
let insertWord = prompt("Inserisci una parola:");

// Funzione per verificare se la parola è palindroma
function palindromo(word) {
  // Rimuovi eventuali spazi e rendi tutto minuscolo
  word = word.trim().toLowerCase();
  // Confronta la parola originale con la sua versione invertita
  return word === word.split("").reverse().join("");
}

// Verifica se la parola inserita dall'utente è palindroma
if (palindromo(insertWord)) {
  console.log(insertWord + " è un palindromo!");
} else {
  console.log(insertWord + " non è un palindromo.");
}

palindromo(insertWord)

/* const endString = endArray.toString()
console.log(endString) */
//Pari o dispari

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.