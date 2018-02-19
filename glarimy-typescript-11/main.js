var SimpleLibrary = /** @class */ (function () {
    function SimpleLibrary() {
        this._entries = [];
    }
    SimpleLibrary.prototype.add = function (book) {
        this._entries.push(book);
    };
    SimpleLibrary.prototype.list = function () {
        return this._entries;
    };
    return SimpleLibrary;
}());
var Book = /** @class */ (function () {
    function Book(isbn, title, price) {
        if (typeof isbn == "number")
            this._isbn = isbn;
        else if (typeof isbn == "string") {
            isbn = parseInt(isbn);
            if (!isNaN(isbn))
                this._isbn = isbn;
        }
        this._title = title;
        this._price = price;
    }
    Book.prototype.print = function () {
        console.log("Book ISBN: " + this._isbn + ", title: " + this._title + ", price: " + Book._currency + " " + this._price);
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
    Object.defineProperty(Book.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: true,
        configurable: true
    });
    Book._currency = "Rs";
    return Book;
}());
var library = new SimpleLibrary();
library.add(new Book("123", "Java Script", 100));
library.add(new Book("isbn:678", "Type Script", 120));
library.add(new Book(234, "Angular", 80));
library.list().forEach(function (e) { return e.print(); });
