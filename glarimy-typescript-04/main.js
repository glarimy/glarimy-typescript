var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.print = function () {
        console.log("Book ISBN: " + this.isbn + ", title: " + this.title + " and author: " + this.author);
    };
    return Book;
}());
var js = new Book();
js.isbn = 123;
js.title = "Java Script";
js.print();
