var Book = /** @class */ (function () {
    function Book(isbn, title, author, price, reference) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.price = price;
        this.reference = reference;
    }
    Book.prototype.print = function () {
        console.log("Book ISBN: " + this.isbn + ", title: " + this.title + " and author: " + this.author);
    };
    return Book;
}());
var js = new Book(123, "Java Script", "Someone", 100, true);
js.print();
//console.log(`Book ISBN: ${js.isbn}`);
//console.log(`Book Price ${js.price}`);
console.log("Is it a reference book? " + js.reference);
