var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class AbstractLibrary {
    constructor() {
        this._entries = [];
    }
    add(book) {
        return new Promise((resolve, reject) => {
            this._entries.push(book);
            resolve();
        });
    }
    list() {
        return new Promise((resolve, reject) => {
            resolve(this._entries);
        });
    }
}
function Loggable(target, methodName, descriptor) {
    console.log(`Replacing ${target[methodName].name}`);
    console.log(target);
}
class SimpleLibrary extends AbstractLibrary {
    constructor() {
        super();
    }
    find(isbn) {
        return new Promise((resolve, reject) => {
            let book = this._entries.filter(e => e.isbn == isbn)[0];
            if (book == null)
                reject("Book Not Found with ISBN : " + isbn);
            else
                resolve(book);
        });
    }
}
class Book {
    constructor(isbn, title, price) {
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
    print() {
        console.log(`Book ISBN: ${this._isbn}, title: ${this._title}, price: ${Book._currency} ${this._price}`);
    }
    get isbn() {
        return this._isbn;
    }
    get title() {
        return this._title;
    }
    get price() {
        return this._price;
    }
    set isbn(isbn) {
        this._isbn = isbn;
    }
    set title(title) {
        this._title = title;
    }
    set price(price) {
        this._price = price;
    }
}
Book._currency = "Rs";
__decorate([
    Loggable
], Book.prototype, "print", null);
let library = new SimpleLibrary();
library.add(new Book("123", "Java Script", 100));
library.add(new Book("isbn:678", "Type Script", 120));
library.add(new Book(234, "Angular", 80));
library.find(234).then(b => b.print()).catch(m => console.log(m));
library.find(345).then(b => b.print()).catch(m => console.log(m));
