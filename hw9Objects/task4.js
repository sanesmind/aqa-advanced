const person = {
    firstName: "Frank",
    lastName: "Sinatra",
    age: 35
};

person.email = "sinatra.f@mail.com";

delete person.age;

console.log(person);