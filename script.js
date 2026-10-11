// Colores disponibles. Cada clic "rota" un lugar: el color de cada
// alumno pasa al siguiente (ej: YENP azul -> verde -> rojo ...).
const COLORS = [
    '#1e88e5', // azul
    '#43a047', // verde
    '#e53935', // rojo
    '#fb8c00', // naranja
    '#8e24aa', // morado
    '#00acc1', // cian
    '#fdd835', // amarillo
    '#d81b60', // rosa
    '#6d4c41', // marron
    '#546e7a', // gris azulado
    '#7cb342', // verde claro
    '#3949ab'  // indigo
];

// Se llama explicitamente al nombre de cada clase.
const students = [
    document.querySelector('.YENP'),
    document.querySelector('.CFGE'),
    document.querySelector('.DBT'),
    document.querySelector('.CGL'),
    document.querySelector('.KFG'),
    document.querySelector('.JDL'),
    document.querySelector('.XGM'),
    document.querySelector('.KLRC')
];
const button = document.querySelector('.btn-color');

// Cuantos lugares se corrio la rueda de colores.
let shift = 0;

// Cada alumno toma el color de la lista segun su posicion + el corrimiento.
function applyColors() {
    students.forEach((student, i) => {
        student.style.setProperty('--hover-color', COLORS[(i + shift) % COLORS.length]);
    });
}

button.addEventListener('click', () => {
    shift = shift + 1;
    applyColors();
});

// Aplica los colores iniciales al cargar la pagina.
applyColors();
