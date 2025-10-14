async function fetchToDo(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return response.json();

    }
    catch (error) {
        console.log(error.message);
    }
}

async function fetchUser(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response.json();

    }
    catch (error) {
        console.log(error.message);
    }
}

console.log(await fetchToDo(1));

console.log(await fetchUser(1));

const allResult = Promise.all([fetchToDo(1), fetchUser(1)]).then((result) => {console.log(result);});
console.log(allResult);

const raceResult = Promise.race([fetchToDo(1), fetchUser(1)]).then((result) => {console.log(result);});
console.log(raceResult);