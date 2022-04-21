/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/
const guestsList = [];
const lengthList = 10;
let found = false;

for (i=1; i<=lengthList; i++) {
  guestsList[i] = `guestNumber${i}`;
}

console.log(guestsList);

nome = prompt("qual è il tuo nome?");
for (i=0; i<lengthList; i++) {
  if (nome === guestsList[i]) found = true;
}

console.log(found);
if (found===true) console.log("puoi partecipare");
else console.log("NON puoi partecipare");

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