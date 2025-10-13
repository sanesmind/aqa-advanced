class JsonPlacaholderThen {

    static fetchToDo(id) {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(todo => {
                return todo
            })
            .catch((error) => {console.log(error.message)});
    }
    static fetchUser(id) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(user => {
                return user
            })
            .catch((error) => {console.log(error.message)});
    }
}

JsonPlacaholderThen.fetchToDo(1).then((todo) => {console.log(todo)});

JsonPlacaholderThen.fetchUser(1).then((user) => {console.log(user)});

class JsonPlacaholderAwait {

    static async fetchToDo(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            return response.json();

        }
        catch (error) {
            console.log(error.message);
        }
    }
    static async fetchUser(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            return response.json();
        }
        catch (error) {
            console.log(error.message);
        }
    }
}

JsonPlacaholderThen.fetchToDo(1).then((todo) => {console.log(todo)});

JsonPlacaholderThen.fetchUser(1).then((user) => {console.log(user)});