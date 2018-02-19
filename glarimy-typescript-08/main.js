var Book = /** @class */ (function () {
    function Book(isbn, title) {
        if (typeof isbn == "number")
            this._isbn = isbn;
        else if (typeof isbn == "string") {
            isbn = parseInt(isbn);
            if (!isNaN(isbn))
                this._isbn = isbn;
        }
        this._title = title;
    }
    Book.prototype.print = function () {
        console.log("Book ISBN: " + this._isbn + ", title: " + this._title);
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
    return Book;
}());
var js = new Book("123", "Java Script");
js.print();
var ts = new Book("isbn:678", "Type Script");
ts.print();
var ng = new Book(234, "Angular");
ng.print();
