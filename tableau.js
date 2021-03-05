const readlineSync = require('readline-sync');

function afficheMenu() {
    console.log('\n\nBonjour, Veuillez choisir un nombre:')
    console.log('1 - exercice 1: init tableau zéro')
    console.log('2 - exercice 2: init tableau voyelle')
    console.log('3 - exercice 3 - Saisie 9 valeurs')
    console.log('3b - exercice 3 - Saisie 9 valeurs - while')
    console.log('3c - exercice 3 - Saisie 9 valeurs')
    console.log('4 - exercice 4 - suite exemple 1')
    console.log('5 - exercice 5 - suite exemple 2')
    console.log('6 - exercice 6 - suite U(n) = 2 + n ')
    console.log('7 - exercice 7 - 5, 10, 15, 20, ...')
    console.log('8 - exercice 8 -  3, 8, 13, 18 ...')
    console.log('9 - exercice 9 - Fibonacci')
    console.log('10 - exercice 10 - somme et moyenne')
    console.log('11 - exercice 11 - nombre négatif et positif (comptage)')
    console.log('11b - exercice 11 - nombre négatif et positif (affichage + comptage)')
    console.log('12 - exercice 12 - tableau + 1')
    console.log('13 - exercice 13 - le plus grand')
    console.log('14 - exercice 14 - les notes supérieure à la moyenne')
    console.log('15 - exercice 15 - essayez de devinez')
    console.log('16 - exercice 16 - algo essayez de deviner')
    console.log('17 - exercice 17 - somme de 2 tableaux')
    console.log('18 - exercice 18 - Schtroumpf')
    console.log('19 - exercice 19 - mario course')
    console.log('0 - quitter')
    console.log('\n')
}

// let quitter = false;
// do {

//     afficheMenu();
//     const elementMenu = readlineSync.question('?');

//     switch (elementMenu) {
//         case '1': {
//             exercice1b();
//             break;
//         }
//         case '2': {
//             exercice2();
//             break;
//         }
//         case '3': {
//             exercice3();
//             break;
//         }
//         case '3b': {
//             exercice3b();
//             break;
//         }
//         case '3c': {
//             exercice3c();
//             break;
//         }
//         case '3d': {
//             exercice3d();
//             break;
//         }
//         case '4': {
//             exercice4();
//             break;
//         }
//         case '5': {
//             exercice5();
//             break;
//         }
//         case '6': {
//             exercice6();
//             break;
//         }
//         case '7': {
//             exercice7();
//             break;
//         }
//         case '8': {
//             exercice8();
//             break;
//         }
//         case '9': {
//             exercice9();
//             break;
//         }
//         case '10': {
//             exercice10();
//             break;
//         }
//         case '11': {
//             exercice11();
//             break;
//         }
//         case '11b': {
//             exercice11b();
//             break;
//         }
//         case '12': {
//             exercice12();
//             break;
//         }
//         case '13': {
//             exercice13();
//             break;
//         }
//         case '14': {
//             exercice14();
//             break;
//         }
//         case '15': {
//             exercice15();
//             break;
//         }
//         case '16': {
//             exercice16();
//             break;
//         }
//         case '17': {
//             exercice17();
//             break;
//         }
//         case '18': {
//             exercice18();
//             break;
//         }
//         case '19': {
//             exercice19();
//             break;
//         }
//         case '0': {
//             quitter = true;
//             break;
//         }
//         default: {
//             console.log("votre saisie ne correspond pas au menu");
//             break;
//         }
//     }
// }
// while (!quitter);


//Ecrire un algorithme qui déclare et remplisse un tableau de 7 valeurs numériques en les mettant toutes à zéro.
// a l'initialisation
function exercice1() {
    const monTableau = [0, 0, 0, 0, 0, 0, 0];
    console.log(monTableau);
}

// avec une boucle
function exercice1b() {
    const monTableau = [];
    for (let i = 0; i < 7; i++) {
        monTableau[i] = 0;
    }
    console.log(monTableau);

}

//Ecrire un algorithme qui déclare un tableau vide et le remplit ensuite avec les voyelles de l'alphabet
function exercice2() {
    const tableauVoyelles = [];

    tableauVoyelles[0] = 'a';
    tableauVoyelles[1] = 'e';
    tableauVoyelles[2] = 'i';
    tableauVoyelles[3] = 'o';
    tableauVoyelles[4] = 'u';
    tableauVoyelles[6] = 'y';

    console.log(tableauVoyelles.length);
    console.log(tableauVoyelles);

}

// Ecrire un algorithme qui déclare un tableau. On fait ensuite saisir 9 valeurs entières par l’utilisateur qu'on vient insérer dans le tableau.
function exercice3() {

    const tableauEntier = [];

    for (let i = 0; i < 9; i++) {
        const valeur = readlineSync.questionInt("Veuillez saisir un nombre ");
        tableauEntier[i] = valeur;
    }
    console.log(tableauEntier);
}

// Ecrire un algorithme qui déclare un tableau. On fait ensuite saisir des valeurs entières par l’utilisateur qu'on vient insérer dans le tableau. 
// La saisie s'arrete quand l'utilisateur saisi 0
function exercice3b() {

    const tableauEntier = [];
    let nombre = -1;
    let i = 0;

    while (nombre != 0) {
        nombre = readlineSync.questionInt("Veuillez saisir un nombre ");
        tableauEntier[i] = nombre;
        i += 1
    }
    console.log(tableauEntier);

}

//sans zéro
function exercice3c() {

    const tableauEntier = [];
    let nombre;
    let i = 0;

    while (nombre != 0) {
        nombre = readlineSync.questionInt("Veuillez saisir un nombre ");
        if (nombre != 0) {
            tableauEntier[i] = nombre;
            i += 1
        }
    }
    console.log(tableauEntier);
}

//for + condition nombre
function exercice3d() {
    const tableauEntier = [];
    let nombre;
    let i;

    for (i = 0; i < 5 && nombre != 0; i++) {
        nombre = readlineSync.questionInt("Veuillez saisir un nombre ");
        if (nombre != 0) {
            tableauEntier[i] = nombre;
        }
    }
    console.log(tableauEntier);
}

// Que fait cet algorithme ? 
// Peut-on simplifier cet algorithme avec le même résultat ?
function exercice4() {
    const nb = [];
    let i;
    for (i = 0; i < 5; i++) {
        nb[i] = i * i;
    }
    for (i = 0; i < 5; i++) {
        console.log(nb[i])
    }
}

// -> Afficher 0 puis 1 puis 4 puis 9 puis 16
// suite U(n) = n * n
/*
tableau qui s'appelle nb, il est vide
une variable i
un boucle1 : 
i = 0
nb[0] = 0 * 0 -> 0
nb = [0]
i = 1
nb[1] = 1 * 1 -> 1
nb = [0, 1]
i = 2
nb[2] = 2 * 2 -> 4
nb = [0, 1, 4]
i = 3
nb[3] = 3 * 3 -> 9
nb = [0, 1, 4, 9]
i = 4
nb[4] = 4 * 4 -> 16
nb = [0, 1, 4, 9, 16]
i=5
i < 5 -> faux !
boucle1 terminé
boucle2 :
i = 0
0
i = 1
1
i = 2
4
i = 3
9
i = 4
16
i = 5
fin boucle2
*/
function exercice4b() {
    const nb = [];
    let i;
    for (i = 0; i < 5; i++) {
        nb[i] = i * i;
        console.log(nb[i])

    }
}

// Que fait cet algorithme ? 
// Peut-on simplifier cet algorithme avec le même résultat ?
function exercice5() {
    const n = [];
    n[0] = 1;
    for (let k = 1; k <= 6; k++) {
        n[k] = n[k - 1] + 2;
    }
    for (let i = 0; i < 7; i++) {
        console.log(n[i])
    }
}

// -> 1 3 5 7 9 11 13
// suite U(n) = U(n-1) + 2, avec U(0) = 1
/*
tableau qui s'appelle n et qui est vide
on insere une premiere valeur dans le tableau qui vaut 1
n = [1]
boucle1 :
variable k vaut 1
k = 1
n[1] = n[0] + 2; -> 3
n = [1, 3]
k = 2
n[2] = n[1] + 2; -> 5
n = [1, 3, 5]
k = 3
n[3] = n[2] + 2; -> 7
n = [1, 3, 5, 7]
k = 4
n[4] = n[3] + 2; -> 9
n = [1, 3, 5, 7, 9]
k = 5
n[5] = n[4] + 2; -> 11
n = [1, 3, 5, 7, 9, 11]
k = 6
n[6] = n[5] + 2; -> 13
n = [1, 3, 5, 7, 9, 11, 13]
k = 7
fin boucle1
boucle2
i = 0
1
i = 1
3
i = 2
5
i = 3
7
i = 4
9
i = 5
11
i = 6
13
i = 7
fin boucle 2
*/
function exercice5b() {

    const n = [];
    n[0] = 1;
    console.log(n[0]);
    for (let k = 1; k < 7; k++) {
        n[k] = n[k - 1] + 2;
        console.log(n[k])
    }
}

// Ecrire un algorithme qui calcule et affiche la somme des valeurs renseignées par l'utilisateur (cf. exercice 3b), ainsi que la moyenne. 
function exercice10() {
    const tableauEntier = [];
    let nombre = -1;
    let i = 0, somme = 0;


    while (nombre != 0) {
        nombre = readlineSync.questionInt("Veuillez saisir un nombre ");
        tableauEntier[i] = nombre;
        i += 1;
        somme += valeur;

    }
    console.log(tableauEntier);
    console.log(`somme: ${somme}, moyenne: ${somme / tableauEntier.length}`);

}

// Ecrivez un algorithme permettant à l’utilisateur de saisir un nombre quelconque de valeurs, qui devront être stockées dans un tableau. 
// L’utilisateur doit donc commencer par entrer le nombre de valeurs qu’il compte saisir. Il effectuera ensuite cette saisie. 
// Enfin, une fois la saisie terminée, le programme affichera le nombre de valeurs négatives et le nombre de valeurs positives
function exercice11() {

    const nbNombre = readlineSync.questionInt('Bonjour, combien de nombre souhaitez-vous saisir ?');
    let positif = 0, negatif = 0;
    const tableau = [];

    for (let i = 0; i < nbNombre; i++) {
        const nombre = readlineSync.questionInt(`Veuillez saisir le nombre ${i + 1}: `);
        tableau[i] = nombre;
        if (nombre > 0) {
            positif++;
        }
        else if (nombre < 0) {
            negatif++;
        }
    }
    console.log(`Nombre positif: ${positif}, nombre négatif: ${negatif}`)
}

function exercice11b() {

    const nbNombre = readlineSync.questionInt('Bonjour, combien de nombre souhaitez-vous saisir ?');
    const tableauPositif = [], tableauNegatif = [], tableau = [];

    for (let i = 0; i < nbNombre; i++) {
        const nombre = readlineSync.questionInt(`Veuillez saisir le nombre ${i + 1}: `);
        tableau[i] = nombre;
        if (nombre > 0) {
            tableauPositif[tableauPositif.length] = nombre;
        }
        else if (nombre < 0) {
            tableauNegatif[tableauNegatif.length] = nombre;
        }
    }

    console.log(`Nombre positif:${tableauPositif} (${tableauPositif.length}), nombre négatif: ${tableauNegatif} (${tableauNegatif.length})`)
}


function getTableauSaisi() {
    const tableau = [];
    let saisie = 0;
    let i = 0;

    while (!isNaN(saisie)) {
        saisie = readlineSync.question("Veuillez saisir un nombre ");
        if (!isNaN(saisie)) {
            tableau[i++] = parseInt(saisie);
        }
    }
    return tableau;
}


// Ecrivez un algorithme qui permette la saisie d’un nombre quelconque de valeurs, sur le principe de l'exercice 3. 
// Toutes les valeurs doivent être ensuiteaugmentées de 1, et le nouveau tableau sera affiché à l’écran.
function exercice12() {

    const tableau = getTableauSaisi();

    console.log(tableau)

    const newTableau = [];
    for (i = 0; i < tableau.length; i++) {
        newTableau[i] = tableau[i] + 1;
    }
    console.log(newTableau)


}

// Ecrivez un algorithme permettant, toujours sur le même principe, à l’utilisateur de saisir un nombre de valeurs. 
// Le programme, une fois la saisie terminée,renvoie la plus grande valeur en précisant quelle position elle occupe dans le tableau. 
// On prendra soin d’effectuer la saisie dans un premier temps, et la recherche de la plus grande valeur du tableau dans un second temps
function exercice13() {

    const tableau = getTableauSaisi();
    console.log(tableau)

    //recherche du plus grand
    let plusGrand = -1;
    for (let i = 1; i <= 5; i++) {
        let number = readlineSync.questionInt(`Saisissez le nombre ${i}: `);
        if (number > plusGrand) {
            plusGrand = number;
        }
    }
    console.log(`le plus grand etait ${plusGrand}`);

}

function getMoyenneTableau(tableau) {
    let somme = 0;

    // calcul de la somme du tableau
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }

    return somme / tableau.length;
}

//Toujours et encore sur le même principe, écrivez un algorithme permettant, à l’utilisateur de saisir les notes d'une classe. 
//Le programme, une fois la saisieterminée, renvoie le nombre de ces notes supérieures à la moyenne de la classe.
function exercice14() {

    const tableau = getTableauSaisi();

    // calcul moyenne
    const moyenne = getMoyenneTableau(tableau);
    console.log(`moyenne : ${moyenne}`)

    const noteSupMoy = [];
    // note sup a la moyenne
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] > moyenne) {
            //console.log(tableau[i])
            noteSupMoy[noteSupMoy.length] = tableau[i];
        }
    }
    console.log(`Notes supérieures: ${noteSupMoy}`)
}

//On souhaite maintenant faire la recherche à l'aide d'un algorithme. 
// Le programme décide d'un nombre aléatoire entre 1 et 50 et essaie ensuite de deviner ce nombre. 
// On affiche alors le nombre de tentative qu'il a fallu et les nombre qui ont été testé avant de trouver la solution.
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));    
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(23, 46))

function displayPetitGrand(random, expected) {
    if (random > expected) {
        console.log("le nombre que vous avez saisi est trop petit !")
        return
    }
    console.log("le nombre que vous avez saisi est trop grand !")
}

function exercice15() {

    let expectedResult;
    let randomNumber = getRandomInt(50);
    let continueBoucle = true;

    const tableau = []

    do {
        expectedResult = readlineSync.questionInt("Saisi un nombre : ");
        tableau[tableau.length] = expectedResult

        if (randomNumber === expectedResult) {
            console.log('vous avez trouver le résultat ');
            continueBoucle = false;
        } else {
            displayPetitGrand(randomNumber, expectedResult)
        }


    }
    while (continueBoucle)
    //while (randomNumber != expectedResult)

    console.log(tableau)
    console.log(tableau.length)

}


// On souhaite maintenant faire la recherche à l'aide d'un algorithme. 
// Le programme décide d'un nombre aléatoire entre 1 et 50 et essaie ensuite de deviner ce nombre. 
// On affiche alors le nombre de tentative qu'il a fallu et les nombre qui ont été testé avant de trouver la solution.

function solutionForceBrutExo16(randomNumber) {
    let continueBoucle = true;
    let essais = [];

    for (let i = 1; i <= 50 && continueBoucle; i++) {
        essais[essais.length] = i
        if (i === randomNumber) {
            console.log('vous avez trouver le résultat ');
            continueBoucle = false;
        }
    }

    console.log(essais)
    console.log(essais.length)

}

function solutionAleatoireExo16(randomNumber) {
    let continueBoucle = true;
    let essais = [];

    do {
        let guessNumber = getRandomInt(50);
        essais[essais.length] = guessNumber
        if (guessNumber === randomNumber) {
            console.log('vous avez trouver le résultat ');
            continueBoucle = false;
        }

    }
    while (continueBoucle)

    console.log(essais)
    console.log(essais.length)
}

function milieuDuTableau(x, y) {
    return Math.ceil(Math.abs((x - y) / 2))
}

// console.log(milieuDuTableau(1,7)) // 3
// console.log(milieuDuTableau(1,12)) // 6
// console.log(milieuDuTableau(25, 50)) // 13
// console.log(milieuDuTableau(1,50)) // 25


function test(randomNumber) {

    console.log('il faut trouver:' + randomNumber)
    let choix = milieuDuTableau(1, 50) // 1) 25
    console.log('Premier choix: ' + choix)
    let avantDernier = 0

    //tant que choix != randomNumber
    //1) 42 - 25 - 0
    //2) 42 - 38 - 25
    //3) 42 - 
    while (randomNumber != choix) {
        //
        if (randomNumber > choix) {
            let temp = choix
            if (avantDernier === 0) {
                avantDernier = 50
            }
            choix = choix + milieuDuTableau(choix, avantDernier) 
            avantDernier = temp
        } else if (randomNumber < choix) {
            let temp = choix
            if (avantDernier === 0) {
                avantDernier = 1
            }
            choix = choix - milieuDuTableau(avantDernier, choix)
            avantDernier = temp
        }
        console.log(choix) // 13
        console.log(avantDernier) //25
        console.log('***********************')
    }
}

// test(1)
// test(getRandomInt(50))
// test(50)

function solutionDichotomieExo16(randomNumber) {
    let essais = [];

    let guessNumber = 25;
    essais[essais.length] = guessNumber

    while (guessNumber != randomNumber) {
        if (guessNumber < randomNumber) {
            guessNumber = Math.floor((51 - guessNumber) / 2) + guessNumber
        } else {
            guessNumber = guessNumber - Math.floor((25 - guessNumber) / 2)
        }
        console.log(randomNumber + ' ##################### ' + guessNumber)
        essais[essais.length] = guessNumber
        debugger;
    }

    console.log('vous avez trouver le résultat ');
    console.log(essais)
    console.log(essais.length)
}

function exercice16() {
    let randomNumber = getRandomInt(50);
    // 1ere solution, force brute for 1 - 50 
    //solutionForceBrutExo16(randomNumber);
    // 2eme solution, aleatoire
    //solutionAleatoireExo16(randomNumber);
    // 3eme soltuion, algo de recherche dichotomique 
    // https://fr.wikipedia.org/wiki/Recherche_dichotomique
    test(randomNumber);

}

// soit une suite : U(n) = 2 + n
// faites un algorithme qui permettra de déterminer les 8 premières valeurs de la suite et affichez les valeurs

function U(n) {
    return 2 + n;
}

function exercice6() {
    const nb = [];
    for (let n = 0; n < 7; n++) {
        nb[n] = U(n);
    }
    console.log(nb);
}

// soit la suite : 5, 10, 15, 20 ...
// Ecrire un algorithme qui permet de déterminer les 10 premières valeurs de cette suite et affichez les valeurs.
function exercice7() {

}


// soit la suite : 3, 8, 13, 18 ...
// Ecrire un algorithme qui permet de déterminer les 10 premières valeurs de cette suite et affichez les valeurs.
function exercice8() {

}


// Soit la suite de Fibonacci définie comme ceci : U(n) = U(n-1) + U(n-2) avec U(0) = 0 et U(1) = 1.
// Ecrire un algorithme qui permettra de déterminer les 6 valeurs suivantes de la suite et affichez les valeurs
function exercice9() {

}

// Ecrivez un algorithme constituant un tableau, à partir de deux tableaux de même longueur préalablement saisis. Le nouveau tableau sera la somme des éléments des deux tableaux de départ.
// Tableau 1 : 4 8 7 9 1 5 4 6
// Tableau 2 : 7 6 5 2 1 3 7 4
// Tableau à constituer : 11 14 12 11 2 8 11 10
function exercice17() {

    // Definir deux tableaux
    const tableau1 = [4,8,7,9,1,5,4,6]
    const tableau2 = [7,6,5,2,1,3,7,4]

    let result = []

    // Verifier que les 2 tableaux ont la meme longueur
    if (tableau1.length != tableau2.length) {
        console.log('Les tableaux doivent avoir la meme taille')
        return
    }

    // parcourir les tableaux
    for(let i = 0; i< tableau1.length; i++) {
        // Additionner les elements au meme index
        result[i]= tableau1[i] + tableau2[i]
    }

    //Afficher le resultat
    console.log(result)
}

// Toujours à partir de deux tableaux précédemment saisis, écrivez un algorithme qui calcule le schtroumpf des deux tableaux. 
// Pour calculer le schtroumpf, ilfaut multiplier chaque élément du tableau 1 par chaque élément du tableau 2, et additionner le tout. 
// Par exemple si l'on a :Tableau 1 : 4 8 7 12 Tableau 2 : 3 6
// Le Schtroumpf sera : 3 * 4 + 3 * 8 + 3 * 7 + 3 * 12 + 6 * 4 + 6 * 8 + 6 * 7 + 6 * 12 = 279
function exercice18() {

    // Definir les deux tableaux
    const tableau1 = [4,8,7,12]
    const tableau2 = [3,6]
    let result = 0

    // Parcourir le premier tableau (tableau1)
    for(let i = 0; i < tableau1.length; i++) {
        //Parcourir le second tableau (tableau2)
        for(let j = 0; j < tableau2.length; j++){
            // multiplier les 2 elements et les additionner au resultat
            result = result + tableau1[i] * tableau2[j]
        }
    }

    console.log(result)
}

// Soit le tableau resultat: ['Yoshi', 0, 'Toad', 0, 'Peach', 0, 'Bowser', 0, 'Mario', 0, 'Luigi', 0]; 
// Soit le tableau point : [6, 4, 3, 2, 1, 0] 
// Soit le tableau course (les coureurs sont dans le meme ordre que resultat ) : [ 'Yoshi', 1, 'Toad', 2, 'Peach', 3, 'Bowser', 4, 'Mario', 5, 'Luigi', 6];
// Ecrire un algorithme permettant de retrouver pour chaque coureur le nombre de points correspondant a son classement et de mettre dans le tableau de resultat.
// b. Faite de meme avec la course suivant : [ 'Yoshi', 6, 'Toad', 3, 'Peach', 2, 'Bowser', 5, 'Mario', 4, 'Luigi', 1];
// c. Calculer le vainqueur si on considère les 2 courses

function calculPointCourse(course,resultat) {
    const points = [6, 4, 3, 2, 1, 0];

    for (let indexCourse = 0; indexCourse < course.length; indexCourse += 2) {
        // Trouver la place dans la course
        const nomDuCoureur = course[indexCourse]; // 'Toad' 
        const placeDansLaCourse = course[indexCourse + 1]; // 6
        // Aller chercher le nombre de points correspondant dans le tableau points (valeur dans le tableau points à placeDansLaCourse - 1)
        const nbPoints = points[placeDansLaCourse - 1]; // 0
        
        // Ajouter les points au tableau résultats
        for(let indexResultat = 0; indexResultat < resultat.length; indexResultat +=2) {
            if(resultat[indexResultat] === nomDuCoureur){
                resultat[indexResultat + 1] = resultat[indexResultat + 1] + nbPoints;
            }
        }
    }
}

function testMario() {

    // Definir un tableau avec le resultat de la course1
    // Definir un tableau avec le resultat de la course2
    const resultat = ['Yoshi', 0, 'Toad', 0, 'Peach', 0, 'Bowser', 0, 'Mario', 0, 'Luigi', 0]; 
    
    const course =   ['Yoshi', 1, 'Toad', 2, 'Peach', 3, 'Bowser', 4, 'Mario', 5, 'Luigi', 6];
    const course2 =  ['Yoshi', 6, 'Toad', 3, 'Peach', 2, 'Bowser', 5, 'Mario', 4, 'Luigi', 1];
    const course3 =  ['Toad', 6, 'Yoshi', 3, 'Luigi', 2, 'Bowser', 5, 'Mario', 4, 'Peach', 1];
    // Definir le tableau de reference des points
    
    // Definir un tableau avec le classement general
    calculPointCourse(course,resultat);
    calculPointCourse(course2,resultat);
    calculPointCourse(course3,resultat);

    

    // Parcourir le tableau de la course1, en augmentant de 2 l'index (indexCourse) pour chaque tour (ex: 0 => 'Yoshi', 2 => 'Toad')
        // pour chaque participant, trouver sa place en utilisant l'index(indexCourse) + 1
        // a partir de la place trouver le nombre de points, valeur de la place correspond a index (indexPoint) dans le tableeau de point
        // Trouver le participant dans le classement general en comparant les noms et en augmentant dee 2 l'index (indexClassement) a chaque tour
        // Augmenter le total des point du participant en utilisant index (indexClassement) + 1
        
    // Recommencer pour la course 2

    // Afficher le resultat

    console.log(resultat);
    // Parcourir le tableau course en augmentant de 2 l'index (indexCourse) à chaque tour
    // ex : 'yoshi'= index 0     place yoshi = index 1
    // ex : 'mario'= index 8     place mario = index 9
    
}

//testMario();
