const readlineSync = require('readline-sync');


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function faireChoix() {

    let choix = 0

    do {
        choix = readlineSync.questionInt("1 - pour tirer nouvelle carte ou 2 - pour arreter la partie ")
    }
    while (choix != 1 && choix != 2)
    return choix
}

function blackjack() {
    let scoreJoueur = getRandom(1, 11)
    const scoreBanque = getRandom(16, 21)
    let continuer = true

    do {
        console.log('Votre score est de: ' + scoreJoueur)
        if (scoreJoueur > 21) {
            console.log('Perdu ! le score de la banque est: ' + scoreBanque)
            break
        }
        if (scoreJoueur === 21) {
            console.log('Gagne ! le score de la banque est: ' + scoreBanque)
            break
        }
        let choix = faireChoix()
        if (choix === 1) {
            scoreJoueur = scoreJoueur + getRandom(1, 11)
        }
        if (choix === 2) {
            continuer = false
        }

    }
    while (continuer)

    if (scoreBanque === scoreJoueur) {
        console.log('Push ! avec un score de ' + scoreJoueur)
    } else if (scoreJoueur > scoreBanque ) {
        console.log('Gagne ! le score de la banque est: ' + scoreBanque)
    }else if (scoreJoueur < scoreBanque) {
        console.log('Perdu ! le score de la banque est: ' + scoreBanque)
    }

}


blackjack()