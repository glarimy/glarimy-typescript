var Book = /** @class */ (function () {
    function Book(isbn, title, author, price, reference) {
        this._isbn = isbn;
        this._title = title;
        this._author = author;
        this._price = price;
        this._reference = reference;
    }
    Book.prototype.print = function () {
        console.log("Book ISBN: " + this._isbn + ", title: " + this._title + " and author: " + this._author);
    };
    Object.defineProperty(Book.prototype, "isbn", {
        get: function () {
            return this._isbn;
        },
        set: function (isbn) {
            this._isbn = isbn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "author", {
        get: function () {
            return this._author ? this._author : "";
        },
        set: function (author) {
            this._author = author;
        },
        enumerable: true,
        configurable: true
    });
    return Book;
}());
var js = new Book(123, "Java Script", "Someone", 100, true);
js.print();
console.log("Book ISBN: " + js.isbn);
//console.log(`Book Price ${js.price}`);
js.author = "Someone else";
console.log("Book Author: " + js.author);
