interface Library {
    add(book: Book): void;
    find(isbn: number): Promise<Book>;
    list(): Promise<Book[]>;
}

abstract class AbstractLibrary {
    protected _entries: Book[];

    constructor() {
        this._entries = [];
    }

    add(book: Book): Promise<void> {
        return new Promise<void>((resolve, reject)=>{
            this._entries.push(book);
            resolve();
        });
    }

    list(): Promise<Book[]> {
        return new Promise<Book[]>(
            (resolve, reject) => {
                resolve(this._entries);
            });
    }
}

function Loggable(target:any, methodName: string, descriptor?:PropertyDescriptor) {
    console.log(`Replacing ${target[methodName].name}`);
}

class SimpleLibrary extends AbstractLibrary {
    constructor(){
        super();
    }

    find(isbn: number): Promise<Book> {
        return new Promise<Book>((resolve, reject)=>{
            let book:Book = this._entries.filter(e => e.isbn == isbn)[0];
            if(book == null)
                reject("Book Not Found with ISBN : " + isbn);
            else
                resolve(book);
        });
    }
}

class Book {
    public _isbn: number;
    private _title: string;
    private _price: number;
    static readonly _currency: string = "Rs";

    constructor(isbn: any, title: any, price: number) {
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

    @Loggable
    public print(): void {
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

    set isbn(isbn: number) {
        this._isbn = isbn;
    }

    set title(title: string) {
        this._title = title
    }

    set price(price: number) {
        this._price = price;
    }
}

let library: Library = new SimpleLibrary();
library.add(new Book("123", "Java Script", 100));
library.add(new Book("isbn:678", "Type Script", 120));
library.add(new Book(234, "Angular", 80));

library.find(234).then(b=> b.print()).catch(m=> console.log(m));
library.find(345).then(b => b.print()).catch(m => console.log(m));