const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    // dopo 50px di scroll aggiunge la classe, tornando in cima la toglie
    header.classList.toggle('scrollato', window.scrollY > 50);
});


const tema = document.querySelector("#cambiaTema");

tema.addEventListener("click", function () {

    document.body.classList.toggle("temaScuro");

    if (document.body.classList.contains("temaScuro")) {
        tema.textContent = "☀️";
    } else {
        tema.textContent = "🌙";
    }

});


const apriModale = document.querySelector('#apriModale');
const chiudiModale = document.querySelector('#chiudiModale');
const sfondoModale = document.querySelector('#sfondoModale');

const formPreventivo = document.querySelector('#formPreventivo');
const messaggioGrazie = document.querySelector('#messaggioGrazie');

// APERTURA MODALE
apriModale.addEventListener('click', () => {
    sfondoModale.classList.add('aperta');
});

// CHIUSURA MODALE
chiudiModale.addEventListener('click', () => {
    sfondoModale.classList.remove('aperta');
});

// INVIO FORM
formPreventivo.addEventListener('submit', (event) => {

    event.preventDefault();

    formPreventivo.style.display = 'none';
    messaggioGrazie.style.display = 'block';

    setTimeout(() => {

        sfondoModale.classList.remove('aperta');

        formPreventivo.reset();
        formPreventivo.style.display = 'flex';
        messaggioGrazie.style.display = 'none';

    }, 2000);

});

