import {Perro, Gato} from './Animal.js';  

// Create a Dog instance
const miPerro = new Perro('Rex', 'German Shepherd');
// Create a Cat instance
const miGato = new Gato('Pirracas', 'Gato callejero');



// Get buttons from the DOM
const perroButton = document.getElementById('perroButton');
// Get buttons from the DOM
const gatoButton = document.getElementById('gatoButton');


// Add event listeners for button clicks
perroButton.addEventListener('click', () => {
    miPerro.hablar();  // Llamar al método de la clase Perro
});

// Add event listeners for button clicks
gatoButton.addEventListener('click', () => {
    miGato.hablar();  // Llamar al método de la clase Perro
});