/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

let firstNumber;
let secondNumber;
let maggiore;

const btnFirstNumber = document.querySelector('#btnFirstNumber');
const btnSecondNumber = document.querySelector('#btnSecondNumber');
const btnMaggiore = document.querySelector('#btnMaggiore');

btnFirstNumber.addEventListener('click', function(){
  firstNumber = prompt('Inserisci il primo numero');
  console.log(firstNumber);
});

btnSecondNumber.addEventListener('click', function(){
  secondNumber = prompt('Inserisci il secondo numero');
  console.log(secondNumber);
});

btnMaggiore.addEventListener('click', function(){
  if (firstNumber > secondNumber){
    maggiore = firstNumber;
  }
  else {
    maggiore = secondNumber;
  }
  console.log(maggiore);
});






