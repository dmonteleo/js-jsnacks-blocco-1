/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/

let sum = 0;

// for (i=0; i<5; i++) {
//   let number = parseInt(prompt("inserisci un numero"));
//   sum = sum + number;
// }

// console.log(sum);

while (i<5) {
  let number = parseInt(prompt("inserisci un numero"));
  sum = sum + number;
  i++;
}

console.log(sum);
