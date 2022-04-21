/*
 JSnack 9
 Calcola la somma e la media dei primi 10 numeri.
*/

let sum = 0;

for (i=1; i<=10; i++) {
  sum = sum + i;
}

let media = sum / 10;

console.log("somma: ", sum, "media: ", media);