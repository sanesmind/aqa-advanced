function divide (numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Can't divide by zero");
    }
    else if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both entries should be numbers");
    }
    else {
        return  console.log(numerator / denominator)
    }

}
try {
    divide(2, 0);
    }
    catch (error){
        console.error(error.message);
    }

try {
    divide(10, "test");
}
catch (error){
    console.error(error.message);
}

try {
    divide(81, 9);
}
catch (error){
    console.error(error.message);
}

finally {
    console.log("Робота завершена")
}
