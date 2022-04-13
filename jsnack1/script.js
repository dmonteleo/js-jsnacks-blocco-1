/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

let firstNumber;
let secondNumber;
let maggiore;
const output = document.getElementById('output');

const btnFirstNumber = document.querySelector('#btnFirstNumber');
const btnSecondNumber = document.querySelector('#btnSecondNumber');
const btnMaggiore = document.querySelector('#btnMaggiore');

btnFirstNumber.addEventListener('click', function(){
  firstNumber = parseInt(prompt('Inserisci il primo numero'));
  console.log(firstNumber);
});

btnSecondNumber.addEventListener('click', function(){
  secondNumber = parseInt(prompt('Inserisci il secondo numero'));
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
  output.innerHTML += ` ${maggiore}`;
});

function myFunction(x) {
  x.style.background = "rebeccapurple";
  x.style.color = "yellowgreen";
}

let titleFirst = document.querySelector('h1');
let titleSecond = document.querySelector('#output');

function yourFunction(x) {
  // x.style.background = "yellowgreen";
  // x.style.color = "rebeccapurple";
  x.style.display = "block";
} 

btnMaggiore.addEventListener('click', function() {
  yourFunction(titleFirst);
  yourFunction(titleSecond);
});







