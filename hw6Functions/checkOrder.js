function checkOrder(available, ordered){
    if (ordered > available){
        return console.log("Your order is too large, we don’t have enough goods.")
    }
    else if (ordered === 0){
        return console.log("Your order is empty")
    }
    else {
        return console.log("Your order is accepted")
    }
}

checkOrder(30, 760)