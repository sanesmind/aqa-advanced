const car1 = {
    brand: "Aston Martin",
    model: "Vanquish",
    year: "2025"
};

const car2 = {
    brand: "Ferari",
    model: "360",
    owner: "5 Previous owners"
};

const car3 = {...car1, ...car2};

console.log(car3);