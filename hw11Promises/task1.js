function printTextWithDelay(text, delay) {
    setTimeout(()=>console.log(text), delay);
}

printTextWithDelay("Hello, World!", 3000);
printTextWithDelay("Hello, John!", 1000);
printTextWithDelay("Hello, Jane!", 2000);