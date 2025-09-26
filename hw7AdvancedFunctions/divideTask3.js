function divide (numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Can't divide by zero");
    }
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both entries should be numbers");
    }

    return  numerator / denominator

}
try {
    const result = divide(10, 0);
    console.log("Result is: " + result)
} catch (error){
        console.error(error.message);
} finally {
    console.log("Робота завершена")
}

try {
    const result = divide(10, "test");
    console.log("Result is: " + result)
} catch (error){
    console.error(error.message);
} finally {
    console.log("Робота завершена")
}

try {
    const result = divide(81, 9);
    console.log("Result is: " + result)
} catch (error){
    console.error(error.message);
} finally {
    console.log("Робота завершена")
}
