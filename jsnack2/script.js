/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/
/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/
/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/
/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/
/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/
/*
 JSnack 7
 Stampa le potenze di 2 fino a 1000.
 questo snack cela un trabocchetto:  1000 non è una potenza di 2
 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora
*/
/*
 JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero
 e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica
*/
/*
 JSnack 9
 Calcola la somma e la media dei primi 10 numeri.
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