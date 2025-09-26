function printCountDown(num){
    if (num <= 0){
        return
    }
    console.log(num)
    num--
    printCountDown(num)
}


printCountDown(10)