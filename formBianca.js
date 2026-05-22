// seleziono elementi
const form = document.getElementById("form-contatti");
const risposta = document.getElementById("risposta");

// submit form
form.addEventListener("submit", function(event){
    // blocco refresh
    event.preventDefault();
    // recupero valori
    const email = document.getElementById("email").value;
    const messaggio = document.getElementById("messaggio").value;
    // messaggio di successo
    risposta.textContent = "Messaggio inviato";
    //questo l'ho chiesto all'ai perchè non lo sapevo fare
    // cancella messaggio dopo 2 secondi
    setTimeout(function(){
        risposta.textContent = "";
    }, 2000);

    // reset form
    form.reset();

});