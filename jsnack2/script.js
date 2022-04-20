/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/


let firstWord;
do {
  firstWord = prompt('Inserisci la prima parola');
  if (isNaN(firstWord) === false) {
  alert("Non inserire un numero");
  }
}
while (!isNaN(firstWord));

let secondWord;
do {
  secondWord = prompt('Inserisci la seconda parola');
  if (isNaN(secondWord) === false) {
  alert("Non inserire un numero");
  }
}
while (!isNaN(secondWord));

console.log(firstWord, secondWord);

const firstLength = firstWord.length;
const secondLength = secondWord.length;

console.log(firstLength, secondLength);

const outputShort = document.querySelector(".output-short");
const outputLong = document.querySelector(".output-long");
const outputSame = document.querySelector(".output-same");

console.log(outputShort, outputLong);

let shortWord;
let longWord;

if (firstLength > secondLength){
  longWord = firstWord;
  shortWord = secondWord;
  outputShort.innerHTML += ` "${shortWord}"`;
  outputLong.innerHTML += ` "${longWord}"`;
}
else if (firstLength < secondLength){
  longWord = secondWord;
  shortWord = firstWord;
  outputShort.innerHTML += ` "${shortWord}"`;
  outputLong.innerHTML += ` "${longWord}"`;
}
else {
  outputShort.classList.add("display-none");
  outputLong.classList.add("display-none");
  outputSame.classList.remove("display-none");
}