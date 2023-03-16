/* Traccia

Esercizio di oggi, nome repo: js-paliedispari

Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
Consigli del giorno

Scriviamo sempre in italiano i passaggi che vogliamo fare

Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/


//Procedimento
// Chiedo all'utente di inserire una parola
// Funzione per verificare se la parola è palindroma
// Confronto la parola originale con la sua versione invertita
// Verifico se la parola inserita dall'utente è palindroma e stampo il risultato

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


// Chiedo all'utente di inserire una parola
let insertWord = prompt("Inserisci una parola:");

// Funzione per verificare se la parola è palindroma
function palindromo(word) { 
  // Confronto la parola originale con la sua versione invertita
   return word === word.split("").reverse().join(""); 
}
// Verifica se la parola inserita dall'utente è palindroma
if (palindromo(insertWord)) {
  console.log(insertWord + " è un palindromo!");
} else {
  console.log(insertWord + " non è un palindromo.");
}


//Pari o dispari

// Chiedo all'utente di scegliere pari o dispari
// Chiedo all'utente di inserire un numero da 1 a 5
// Genero un numero casuale da 1 a 5 per il computer
// Funzione per determinare se un numero è pari o dispari
// Calcolo la somma dei due numeri
// Determino il vincitore
// Stampo il risultato

// Chiedo all'utente di scegliere pari o dispari
let sceltaUtente = prompt("Scegli pari o dispari:");

// Chiedo all'utente di inserire un numero da 1 a 5
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

// Genero un numero casuale da 1 a 5 per il computer
function generaNumeroCasuale() {
  return Math.floor(Math.random() * 5) + 1;
}
let numeroComputer = generaNumeroCasuale();

// Funzione per determinare se un numero è pari o dispari
function isPari(numero) {
  return numero % 2 === 0;
}

// Calcolo la somma dei due numeri
let somma = numeroUtente + numeroComputer;
// Determino se la somma dei due numeri è pari o dispari
let risultato = isPari(somma) ? "pari" : "dispari";

// Determino il vincitore
let vincitore;
if (sceltaUtente === risultato) {
  vincitore = "Utente";
} else {
  vincitore = "Computer";
}

// Stampo il risultato
console.log(`La somma dei due numeri è ${somma}, che è ${risultato}.`);
console.log(`Il vincitore è ${vincitore}!`);
