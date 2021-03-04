const readlineSync = require('readline-sync');

function chiffrageDeCesar(phrase, decallage) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz ';
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


function main() {

    const phrase = readlineSync.question('Veuillez saisir une phrase ?');
    const decalage = readlineSync.questionInt('Veuillez saisir un decalage ?');

    const result = chiffrageDeCesar(phrase, decalage)

    console.log(result)
}

main()

