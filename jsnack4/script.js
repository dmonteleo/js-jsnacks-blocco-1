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

