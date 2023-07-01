// /*Permet d'instancier une variable et de lui affecter une valeur*/
// let myVariable;
// myVariable = 'Bob';

// let iceCream = 'chocolat';
// if (iceCream === 'chocolat') {
//   alert("J'adore la glace au chocolat !");
// } else {
//   alert("Ooooh, mais j'aurais préféré au chocolat.");
// }

// myVariable = document.querySelector('h1');
// /* Affichons la valeur de la variable dans la console */
// console.log(myVariable);

// function multiply(num1, num2){
//     let result = num1 * num2;
//     return result;
// }

// console.log(multiply(20, 20));

// let myHTML = document.querySelector('html');
// myHTML.addEventListener('click', function() {alert('Aïe, arrêtez de cliquer !!')});

// Je récupère l'élément sur lequel je veux détecter le clic
let myElement = document.querySelector('.right-image');

myElement.addEventListener('click', function() {
    // Je récupère le css de l'élément
    let myImage = window.getComputedStyle(myElement);
    let mySrc = myImage.backgroundImage;

    if (mySrc === 'url("file:///Users/thomas/Documents/Projet%20Perso/JavaScript/image/sword.jpeg")'){
        myElement.style.backgroundImage = 'url("file:///Users/thomas/Documents/Projet%20Perso/JavaScript/image/zelda.jpeg")';
    } else {
        myElement.style.backgroundImage = 'url("file:///Users/thomas/Documents/Projet%20Perso/JavaScript/image/sword.jpeg")';
    }
});

// Je récupère le button
let myButton = document.querySelector('button');
// Je récupère le titre
let myHeading = document.querySelector('h1');

function userName() {
    let myName = prompt('Entrez votre nom.');
    localStorage.setItem('name', myName); /* On stocke le nom dans le navigateur et on l'associe à la clé 'name' */
    myHeading.textContent = 'Le Jeu du Moment est Zelda Breath Of The Wild, ' + myName;
}

if (localStorage.getItem('name')){
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Le Jeu du Moment est Zelda Breath Of The Wild, ' + storedName;
}

myButton.addEventListener('click', function() {
    userName();
});
