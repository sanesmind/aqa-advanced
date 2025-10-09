import Book from "./Book.js";

export default class EBook extends Book {

    constructor(name, author, yearOfPublishing, fileFormat) {
        super(name, author, yearOfPublishing);
        this._fileFormat = fileFormat;
    }

    printInfo() {
        console.log(`Book: ${this.name}, Author: ${this.author}, Was published in: ${this.yearOfPublishing}, File format is: ${this.fileFormat}`);
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(fileFormat) {
        if (fileFormat !== "PDF" || fileFormat !== "Word" || fileFormat !== "epub") {
            console.log(`${fileFormat} is not a valid format, choose PDF or Word or epub`);
            return;
        }
        this._fileFormat = fileFormat;
    }

    static convertToEBook(book, fileFormat) {
        return new EBook(book.name, book.author, book.yearOfPublishing, fileFormat);
    }
}