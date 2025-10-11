async function fetchToDo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return response.json();

    }
    catch (error) {
        console.log(error.message);
    }
}

async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return response.json();

    }
    catch (error) {
        console.log(error.message);
    }
}

console.log(await fetchToDo());

console.log(await fetchUser());

const allResult = Promise.all([fetchToDo(), fetchUser()]).then((result) => {console.log(result)})

const raceResult = Promise.race([fetchToDo(), fetchUser()]).then((result) => {console.log(result)})