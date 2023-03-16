
const insertWord = prompt("inserisci una parola")
let start = insertWord
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
}