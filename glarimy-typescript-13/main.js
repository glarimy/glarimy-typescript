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
class SimpleLibrary extends AbstractLibrary {
    find(isbn) {
        return new Promise((resolve, reject) => {
            let book = this._entries.find(e => e.isbn == isbn);
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
let library = new SimpleLibrary();
library.add(new Book("123", "Java Script", 100));
library.add(new Book("isbn:678", "Type Script", 120));
library.add(new Book(234, "Angular", 80));
library.list().then(books => books.forEach(e => e.print()));
library.find(234).then(b => b.print).catch(m => console.log(m));
library.find(345).then(b => b.print).catch(m => console.log(m));
