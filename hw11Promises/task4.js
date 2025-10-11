class JsonPlacaholderThen {

    static fetchToDo() {
        return fetch(`https://jsonplaceholder.typicode.com/todos/1`)
            .then(response => response.json())
            .then(todo => {
                return todo
            })
            .catch((error) => {console.log(error.message)});
    }
    static fetchUser() {
        return fetch(`https://jsonplaceholder.typicode.com/users/1`)
            .then(response => response.json())
            .then(user => {
                return user
            })
            .catch((error) => {console.log(error.message)});
    }
}

JsonPlacaholderThen.fetchToDo().then((todo) => {console.log(todo)});

JsonPlacaholderThen.fetchUser().then((user) => {console.log(user)});

class JsonPlacaholderAwait {

    static async fetchToDo() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            return response.json();

        }
        catch (error) {
            console.log(error.message);
        }
    }
    static async fetchUser() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            return response.json();
        }
        catch (error) {
            console.log(error.message);
        }
    }
}

JsonPlacaholderThen.fetchToDo().then((todo) => {console.log(todo)});

JsonPlacaholderThen.fetchUser().then((user) => {console.log(user)});