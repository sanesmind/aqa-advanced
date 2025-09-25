function handleNum(num, getEvenNumber, getOddNumber) {
    if (num % 2 === 0) {
        return getEvenNumber();
    }
    else {
        return getOddNumber()
    }
}

function handleEvenNumber(){
    console.log("number is even")
}

function handleOddNumber(){
    console.log("number is odd")
}


handleNum(12, handleEvenNumber, handleOddNumber);