/**
 * Mail
 * Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
 * stampa un messaggio appropriato sull’esito del controllo.
 */

var database = ['ciccio@gmail.com', 'alfonso@gmail.com', 'caio@gmail.com'];
console.log(database);

//Domanda utente 
var email = prompt('Qual è la tua email??');
console.log(email);
//Controllo email database

var emailCorrect = false;

for (var i = 0; i <database.length; i++) {
    if(database[i] ===email) {
        emailCorrect = true;
    }
}

if(emailCorrect === true) {
    document.getElementById('form-email').innerHTML = 'Email trovata, puoi accedere all\'area riservata';
} else {
    document.getElementById('form-email').innerHTML = 'Errore, email non valida';
}


/**
 * GIOCO DEI DADI
 * 
 */

var giocatore = Math.floor(Math.random() * 6) +1;
var cpu = Math.floor(Math.random() * 6) +1;

document.getElementById('giocatore').innerHTML = 'Giocatore: ' + giocatore;
document.getElementById('cpu').innerHTML = 'Computer: ' + cpu;

//RISULTATO
if (giocatore > cpu) {
    document.getElementById('risultato').innerHTML= 'Bravo! Hai vinto!';
    
} else if (giocatore == cpu) {
    document.getElementById('risultato').innerHTML= 'Pareggio!';

} else {
    document.getElementById('risultato').innerHTML= 'Mi dispiace... hai perso :(';
}