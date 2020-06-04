//inizializzazione partita
var difficolta = prompt('Inserisci la difficoltà da 0 a 2');
while (difficolta != 0 && difficolta != 1 && difficolta != 2) {
  var difficolta = prompt('Inserisci la difficoltà da 0 a 2');
}
var contatore = cont (difficolta);
console.log(cont(difficolta));
//lista delle bombe
var listaBombe = gioco(difficolta);
console.log('bombe',listaBombe);
//array che si riempirà con scelte utente
var listaScelte = [];
var scelta;
// //inizio della partita
while (listaScelte.length<(contatore - 16) && !(listaBombe.includes(scelta))) {
  scelta = choice(listaScelte, difficolta);
  listaScelte.push(scelta);
  console.log(listaScelte);
}
//esito partita
if (listaScelte.length == (contatore - 16)) {
  document.getElementById('risposta').innerHTML = 'Hai Vinto!!!'
}else {
  document.getElementById('risposta').innerHTML = 'Hai Perso...'

}

//FUNZIONI
//creazione del gioco
// RETURN: lista numeri casuali per il gioco
function gioco(difficolta){
  var numeriCasuali = [];
  if (difficolta == 0) {
    while (numeriCasuali.length<16) {
      var numero = getRndInteger(1,100);
      insert(numeriCasuali, numero)
    }
  } else if (difficolta == 1) {
      while (numeriCasuali.length<16) {
        var numero = getRndInteger(1,80);
        insert(numeriCasuali, numero)
      }
  }else {
    while (numeriCasuali.length<16) {
      var numero = getRndInteger(1,50);
      insert(numeriCasuali, numero)
    }
  }
  return numeriCasuali;
}
//generazione di un numero casuale
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//inserimento numeri in array solo se non già presenti
function insert (array, numero){
  if (!(array.includes(numero))) {
    array.push(numero);
  }
}
//numero scelto dall'utente
function choice (array , difficolta) {
  if( difficolta == 0){
    var x = parseInt(prompt('Inserisci un numero da 1 a 100'));
    while (!(x>0 && x<101) || (array.includes(x))) {
      if (array.includes(x)) {
        var x = parseInt(prompt('Numero già inserito, inserisci un numero da 1 a 100'));
      } else {
          var x = parseInt(prompt('Inserisci un numero da 1 a 100'));
      }
    }
  } else if (difficolta == 1) {
    var x = parseInt(prompt('Inserisci un numero da 1 a 80'));
    while (!(x>0 && x<81) || (array.includes(x))) {
      if (array.includes(x)) {
        var x = parseInt(prompt('Numero già inserito, inserisci un numero da 1 a 80'));
      } else {
          var x = parseInt(prompt('Inserisci un numero da 1 a 80'));
      }
    }
  }else {
    var x = parseInt(prompt('Inserisci un numero da 1 a 50'));
    while (!(x>0 && x<51) || (array.includes(x))) {
      if (array.includes(x)) {
        var x = parseInt(prompt('Numero già inserito, inserisci un numero da 1 a 50'));
      } else {
          var x = parseInt(prompt('Inserisci un numero da 1 a 50'));
      }
    }
  }
  return x;
}
//a seconda della difficolta do il range
function cont (difficolta) {
  if (difficolta == 0) {
    contatore = 100;
  } else if (difficolta == 1) {
    contatore = 80;
  }else {
    contatore = 50;
  }
  return contatore;
}
