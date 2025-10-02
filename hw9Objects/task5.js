const users = [
    {name:"Sarah", age: 23, degree: "engineer"},
    {name:"Rosa", age: 29, degree: "biologist"},
    {name:"Jenny", age: 25, degree: "science"
    }]
for (const {name, age, degree} of users) {
    console.log(`This is ${name}! She is ${age} y.o. and she has ${degree} degree!`)
}