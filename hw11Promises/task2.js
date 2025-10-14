function fetchToDo(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())

        .catch((error) => {console.log(error.message);});
}

function fetchUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())

        .catch((error) => {console.log(error.message);});
}

// fetchToDo()
//     .then((todo) => {console.log(todo)})
//
// fetchUser()
//     .then((user) => {console.log(user)})

const allResult = Promise.all([fetchToDo(1), fetchUser(1)]).then((result) => {console.log(result);});
console.log(allResult);

const raceResult = Promise.race([fetchToDo(1), fetchUser(1)]).then((result) => {console.log(result);});
console.log(raceResult);