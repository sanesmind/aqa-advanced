function handleNum(num, onEvenNumber, onOddNumber) {
    if (num % 2 === 0) {
        return onEvenNumber();
    }
    else {
        return onOddNumber()
    }
}

function handleEvenNumber(){
    console.log("number is even")
}

function handleOddNumber(){
    console.log("number is odd")
}


handleNum(12, handleEvenNumber, handleOddNumber);