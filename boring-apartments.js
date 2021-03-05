const readlineSync = require('readline-sync');

function containsOnly(num, digit) {
    let result = true
    for (let i = 0; i < num.length; i++) {
        if(num[i] !== digit){
            result = false;
            break;
        }
    }
    return result
}

function isBoringNumber(num) {
    if (!isNaN(num) && num > 0 && num <= 9999 && containsOnly(num, num[0])) {
        return true
    }
    return false
}

function readBoringNumber() {
    let boringNumber;
    do {
        boringNumber = readlineSync.question("Veuillez saisir un numero ennuyeu ?")
    }
    while (isBoringNumber(boringNumber) === false)
    return boringNumber
}

function nbAppuisTaille(length) {
    switch(length){
        case 1: {
            return 1
        }
        case 2: {
            return 3
        }
        case 3: {
            return 6
        }
        case 4: {
            return 10
        }
    }
}

function calcNbAppuis(boringNumber){
    if(boringNumber[0] > 1){
        return (boringNumber[0] -1) * 10 + nbAppuisTaille(boringNumber.length)
    } else {
        return nbAppuisTaille(boringNumber.length)
    }
}

const numeroATrouver = readBoringNumber()
const nbAppuis = calcNbAppuis(numeroATrouver)
console.log(nbAppuis)