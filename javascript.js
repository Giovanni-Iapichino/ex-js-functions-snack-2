//#  Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

//DICHIARATIVA
function sumNumber(num1, num2) {
  return num1 + num2;
}

console.log(sumNumber(3, 5));

//ANONIMA
const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(5, 3));

//ARROW FUNCTION
const somma = (num1, num2) => num1 + num2;

console.log(sum(5, 3));

//# Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (num) => num * num;

console.log(quadrato(6));

//# Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const sottrazione = (a, b) => a - b;
const somma2 = (a, b) => a + b;
const moltiplicazione = (a, b) => a * b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(5, 4, somma2));

//# Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(tempo) {
  return () => {
    setTimeout(() => {
      console.log("Tempo scaduto!");
    }, tempo);
  };
}

const timer4s = creaTimer(4000);
timer4s();

//# Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(messaggio) {
  setInterval(() => {
    console.log(messaggio);
  }, 1000);
}

// stampaOgniSecondo("Ciao!");

//# Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(tempo) {
  let count = 0;
  return () => {
    setInterval(() => {
      count++;
      console.log(count);
    }, tempo);
  };
}

const contatore = creaContatoreAutomatico(2000);
// contatore();

//#  Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(mess, start, end) {
  const intervalId = setInterval(() => {
    console.log(mess);
  }, start);

  setTimeout(() => {
    clearInterval(intervalId);
  }, end);
}

eseguiEferma("Ciao!", 1000, 5000);

//# Snack 8 (Bonus)
// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

function contoAllaRovescia(n) {
  let counter = n;
  const intervalId = setInterval(() => {
    if (counter > 0) {
      console.log(counter);
      counter--;
    } else {
      console.log("Tempo scaduto!");
      clearInterval(intervalId);
    }
  }, 1000);
}

contoAllaRovescia(5);
