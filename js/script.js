alert ('ciao');
var kmDaPercorrere = prompt('Quanti km devi percorrere?');
var etaPasseggero = prompt('Quanti anni hai?');

var prezzoTratta = kmDaPercorrere * 0.21;

if (etaPasseggero < 18) {
  console.log(prezzoTratta * 20 / 100);
} else if (etaPasseggero > 65) {
  console.log(prezzoTratta * 40 / 100);
}
else {
  console.log (prezzoTratta);
}

// document.getElementById('prezzo-tratta').innerHTML = prezzoTratta;
