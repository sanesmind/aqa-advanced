import Book from "./Book.js";
import EBook from "./EBook.js";

//task 1:
let book = new Book("1984", "George Orwell", 1949);
book.printInfo();

book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
book.printInfo();

book = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
book.printInfo();
console.log("----------------------------------------------------------");

//task 2:
book = new EBook("1984", "George Orwell", 1949, "PDF");
book.printInfo();
console.log("----------------------------------------------------------");

//task 3:
book.author = 123
book.name = 321
book.yearOfPublishing = "rw"
book.fileFormat = "dwor"

console.log(`${book.name}  ${book.author}  ${book.yearOfPublishing}  ${book.fileFormat}`);

console.log("----------------------------------------------------------");

//task 4:
const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book3 = new EBook("To Kill a Mockingbird", "Harper Lee", 1960, "PDF");

const oldestBook = Book.findOldestBook([book1, book2, book3,]);
console.log(oldestBook);

console.log("----------------------------------------------------------");

//task 5:
const eBook1 = EBook.convertToEBook(book1, "Word")
console.log(eBook1);