var Book = /** @class */ (function () {
    function Book(isbn, title, author) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }
    Book.prototype.print = function () {
        console.log("Book ISBN: " + this.isbn + ", title: " + this.title + " and author: " + this.author);
    };
    return Book;
}());
var js = new Book(123, "Java Script", "Someone");
js.print();
console.log("ISBN: " + js.isbn);
