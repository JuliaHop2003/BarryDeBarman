console.log('Hallo Wereld');

/* Variabelen */
var legeImg = document.querySelector('#legeImg');

var shotjeButton = document.querySelector('#shotjeButton');
var bierButton = document.querySelector('#bierButton');
var wijnButton = document.querySelector('#wijnButton');
var mixjeButton = document.querySelector('#mixjeButton');
var cocktailButton = document.querySelector('#cocktailButton');

var barkeeperTekst = document.querySelector('#praten');

var dronkenschap = 0;

var kosten = 0;
var updateKosten = document.querySelector('#kosten');

var budget = 30;
var updateBudget = document.querySelector('#bedrag');

var wijzers = ['wijzer1.png','wijzer2.png', 'wijzer3.png', 'wijzer4.png', 'wijzer5.png', 'wijzer6.png', 'wijzer7.png', 'wijzer8.png', 'wijzer9.png', 'wijzer10.png', 'wijzer11.png'];
var wijzer = document.querySelector('#wijzer');

huidigeWijzer = 0;
wijzer.src = 'images/' + wijzers[huidigeWijzer];

/* Functies */

function updateToestand() {
    console.log('kosten: ' + kosten)
    console.log('dronken: ' + dronkenschap)

    if (kosten > 30) {
        kosten = 30;
    }

    if (budget < 0) {
        budget = 0;
    }

    updateKosten.textContent = kosten;
    updateBudget.textContent = budget;

    huidigeWijzer = dronkenschap;
    if (huidigeWijzer > 11) {
        huidigeWijzer = 11;
    }
    wijzer.src = 'images/' + wijzers[huidigeWijzer];

    if (huidigeWijzer > 8) {
        wijzer.src = 'images/wijzer11.png';
    }

    if (dronkenschap > 6) {
        barkeeperTekst.textContent = 'Heb je niet al genoeg gehad?';
    }
}

function shotjeBestellen() {
    if (budget < 4) {
        barkeeperTekst.textContent = 'Sorry, u heeft te weinig budget';
        legeImg.src = 'images/leeg.png';
    }
    else {
        console.log('Shotje bestellen');
        legeImg.src = 'images/shotje.png';
        kosten = kosten + 4;
        budget = budget - 4;
        dronkenschap = dronkenschap + 4;
        updateToestand()
    }
}

function bierBestellen() {
    if (budget < 3) {
        barkeeperTekst.textContent = 'Sorry, u heeft te weinig budget';
        legeImg.src = 'images/leeg.png';
    }
    else {
        console.log('Bier bestellen');
        legeImg.src = 'images/bier.png';
        kosten = kosten + 3;
        budget = budget - 3;
        dronkenschap = dronkenschap + 2;
        updateToestand()
    }
}

function wijnBestellen() {
    if (budget < 3) {
        barkeeperTekst.textContent = 'Sorry, u heeft te weinig budget';
        legeImg.src = 'images/leeg.png';
    }
    else {
        console.log('Wijn bestellen');
        legeImg.src = 'images/wijn.png';
        kosten = kosten + 3;
        budget = budget - 3;
        dronkenschap = dronkenschap + 2;
        updateToestand()
    }
}

function mixjeBestellen() {
    if (budget < 6) {
        barkeeperTekst.textContent = 'Sorry, u heeft te weinig budget';
        legeImg.src = 'images/leeg.png';
    }
    else {
        console.log('Mixje bestellen');
        legeImg.src = 'images/mixje.png';
        kosten = kosten + 6;
        budget = budget - 6;
        dronkenschap = dronkenschap + 2;
        updateToestand()
    }
}

function cocktailBestellen() {
    if (budget < 12) {
        barkeeperTekst.textContent = 'Sorry, u heeft te weinig budget';
        legeImg.src = 'images/leeg.png';
    }
    else {
        console.log('Cocktail bestellen');
        legeImg.src = 'images/cocktail.png';
        kosten = kosten + 12;
        budget = budget - 12;
        dronkenschap = dronkenschap + 2;
        updateToestand()
    }
}

/* Events */
shotjeButton.addEventListener('click', shotjeBestellen);

bierButton.addEventListener('click', bierBestellen);

wijnButton.addEventListener('click', wijnBestellen);

mixjeButton.addEventListener('click', mixjeBestellen);

cocktailButton.addEventListener('click', cocktailBestellen);