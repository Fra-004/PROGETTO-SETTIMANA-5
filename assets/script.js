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

























// const carosel = document.querySelector('.carosel');
//     const originali = Array.from(carosel.children);

//     // duplica le card per far ripartire lo scorrimento senza interruzioni
//     originali.forEach(card => {
//         const copia = card.cloneNode(true);
//         copia.setAttribute('aria-hidden', 'true');
//         carosel.appendChild(copia);
//     });

//     const velocita = 0.5;      // pixel per frame: aumenta per andare più veloce
//     let posizione = 0;
//     let inPausa = false;

//     function anima() {
//         if (!inPausa) {
//             // larghezza di un giro completo = distanza tra la prima card e la sua copia
//             const giro = carosel.children[originali.length].offsetLeft - carosel.children[0].offsetLeft;
//             posizione += velocita;
//             if (posizione >= giro) posizione -= giro;
//             carosel.scrollLeft = posizione;
//         }
//         requestAnimationFrame(anima);
//     }
//     requestAnimationFrame(anima);

//     const touch = window.matchMedia('(hover: none)').matches;

//     if (!touch) {
//         // DESKTOP: il mouse sopra il carosello lo ferma
//         carosel.addEventListener('mouseenter', () => inPausa = true);
//         carosel.addEventListener('mouseleave', () => inPausa = false);
//     } else {
//         // TELEFONO: un tocco su una card ferma e ingrandisce, il tocco successivo riprende
//         document.addEventListener('click', (e) => {
//             if (inPausa) {
//                 inPausa = false;
//                 carosel.querySelectorAll('.ingrandita')
//                     .forEach(c => c.classList.remove('ingrandita'));
//                 return;
//             }
//             const card = e.target.closest('.CardDiconodinoi');
//             if (card && carosel.contains(card)) {
//                 inPausa = true;
//                 card.classList.add('ingrandita');
//             }
//         });
//     }
