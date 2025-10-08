export default class Book {
    constructor(name, author, yearOfPublishing) {
        this._name = name;
        this._author = author;
        this._yearOfPublishing = yearOfPublishing;
    }
    printInfo(){
        console.log(`Book: ${this.name}, Author: ${this.author}, Was published in: ${this.yearOfPublishing}`);
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (typeof name !== "string") {
            console.log(`${name} a name is not changed, please enter a string`);
            return;
        }
        this._name = name;
    }

    get author() {
        return this._author;
    }

    set author(author) {
        if (typeof author !== "string") {
            console.log(`${author} an author is not changed, please enter a string`);
            return;
        }
        this._author = author;
    }

    get yearOfPublishing() {
        return this._yearOfPublishing;
    }

    set yearOfPublishing(yearOfPublishing) {
        if (typeof yearOfPublishing !== "number") {
            console.log(`${yearOfPublishing} is not a number year is not changed`);
            return;
        }
        this._yearOfPublishing = yearOfPublishing;
    }

    static findOldestBook(books) {
        return books.reduce((oldestBook, book) => {
            return oldestBook.yearOfPublishing < book.yearOfPublishing ? oldestBook : book
        });
    }
}