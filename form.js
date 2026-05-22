const form = document.getElementById("contactForm");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");

const nomeError = document.getElementById("nomeError");
const emailError = document.getElementById("emailError");
const telefonoError = document.getElementById("telefonoError");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    nomeError.textContent = "";
    emailError.textContent = "";
    telefonoError.textContent = "";

    let isValid = true;

    // VALIDAZIONE NOME
    if (nome.value.trim() === "") {
        nomeError.textContent = "Il nome è obbligatorio";
        isValid = false;
    }

    // VALIDAZIONE EMAIL
    if (email.value.trim() === "") {
        emailError.textContent = "La email è obbligatoria";
        isValid = false;
    } else if (!email.value.includes("@")) {
        emailError.textContent = "Inserisci una email valida";
        isValid = false;
    }

    // VALIDAZIONE TELEFONO
    if (telefono.value.trim() === "") {
        telefonoError.textContent = "Il numero è obbligatorio";
        isValid = false;
    } else if (telefono.value.length < 8) {
        telefonoError.textContent = "Numero troppo corto";
        isValid = false;
    }

    // SE TUTTO È VALIDO
    if (isValid) {

        const datiUtente = {
            nome: nome.value,
            email: email.value,
            telefono: telefono.value
        };

        console.log(datiUtente);

        form.reset();
    }

});