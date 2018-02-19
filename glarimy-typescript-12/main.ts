interface Library {
    add(book:Book):void;
    find(isbn:number):Book;
    list():Book[];
}

abstract class AbstractLibrary  {
    protected _entries: Book[];

    constructor(){
        this._entries = [];
    }
    add(book: Book): void{
        this._entries.push(book);
    }
    list(): Book[]{
        return this._entries;
    }
}

class SimpleLibrary extends AbstractLibrary {
    find(isbn: number): Book {
        return this._entries.find(e => e.isbn == isbn);
    }
}

class Book {
    private _isbn: number;
    private _title: string;
    private _price: number;
    static readonly _currency: string = "Rs";

    constructor(isbn:any, title:any, price: number){
        if(typeof isbn == "number")
            this._isbn = isbn;
        else if(typeof isbn == "string"){
            isbn = parseInt(isbn);
                if(!isNaN(isbn))
                    this._isbn = isbn;
        }
        this._title = title;
        this._price = price;
    }

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

    set isbn(isbn:number) {
        this._isbn = isbn;
    }

    set title(title:string) {
        this._title = title
    }

    set price(price:number) {
        this._price = price;
    }
}

let library:Library = new SimpleLibrary();
library.add(new Book("123", "Java Script", 100));
library.add(new Book("isbn:678", "Type Script", 120));
library.add(new Book(234, "Angular", 80));

library.list().forEach(e=> e.print());

library.find(234).print();