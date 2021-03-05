const readlineSync = require('readline-sync');


const alphabet = 'abcdefghijklmnopqrstuvwxyz ';


function chiffrageDeCesar(phrase, decallage) {
    let resultat='';

    for(let indexPhrase=0; indexPhrase < phrase.length; indexPhrase++) {
        const lettreCourante = phrase[indexPhrase];

        for(let indexAlphabet = 0; indexAlphabet < alphabet.length; indexAlphabet ++){
            if(lettreCourante === alphabet[indexAlphabet]){
                let positionDecalage = decallage + indexAlphabet;
                if( positionDecalage >= alphabet.length) {
                    positionDecalage = positionDecalage - alphabet.length
                } 

                resultat = resultat + alphabet[positionDecalage]
            }
        }
    }

    return resultat
}

function dechiffrageDeCesar(phrase, decallage) {
    let resultat='';

    for(let indexPhrase=0; indexPhrase < phrase.length; indexPhrase++) {
        const lettreCourante = phrase[indexPhrase];

        for(let indexAlphabet = 0; indexAlphabet < alphabet.length; indexAlphabet ++){
            if(lettreCourante === alphabet[indexAlphabet]){
                let positionDecalage = indexAlphabet - decallage;
                if( positionDecalage < 0) {
                    positionDecalage = positionDecalage + alphabet.length
                } 

                resultat = resultat + alphabet[positionDecalage]
            }
        }
    }

    return resultat
}

function main() {
    console.log('Taper 1 pour chiffrer.')
    console.log('Taper 2 pour dechiffrer.')
    const choix = readlineSync.questionInt('Quel est votre choix ?');
    const phrase = readlineSync.question('Veuillez saisir une phrase ?');
    const decalage = readlineSync.questionInt('Veuillez saisir un decalage ?');

    if (choix === 1){

        const result = chiffrageDeCesar(phrase, decalage)
        console.log(result)
    } else {
        const result = dechiffrageDeCesar(phrase, decalage)
        console.log(result)
    }

}

main()

