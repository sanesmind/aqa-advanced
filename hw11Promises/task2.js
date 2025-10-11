function fetchToDo() {
    return fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        .then(response => response.json())
        .then(todo => {
            return todo
        })
        .catch((error) => {console.log(error.message)});
}

function fetchUser() {
    return fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then(response => response.json())
        .then(user => {
            return user
        })
        .catch((error) => {console.log(error.message)});
}

// fetchToDo()
//     .then((todo) => {console.log(todo)})
//
// fetchUser()
//     .then((user) => {console.log(user)})

const allResult = Promise.all([fetchToDo(), fetchUser()]).then((result) => {console.log(result)})

const raceResult = Promise.race([fetchToDo(), fetchUser()]).then((result) => {console.log(result)})