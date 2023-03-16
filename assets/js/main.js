
const insertWord = prompt("inserisci una parola")




for (let i = 0; i < insertWord.length; i++) {
    const currentLecter = insertWord[i];
    console.log(insertWord[i])   
}

for (let i = insertWord.length; i <= insertWord.length && i>=0; i--) {
    const currentLecter = insertWord[i];
    console.log(insertWord[i])   
}