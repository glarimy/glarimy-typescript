class Book {
    private _isbn: number;
    private _title: string;
    private _author?: string;
    protected _price: number;
    public _reference: boolean;

    constructor(isbn:number, title:string, author:string, price:number, reference: boolean){
        this._isbn = isbn;
        this._title = title;
        this._author = author;
        this._price = price;
        this._reference = reference;
    }

    public print(): void {
        console.log(`Book ISBN: ${this._isbn}, title: ${this._title} and author: ${this._author}`)
    }

    get isbn() {
        return this._isbn;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author?this._author : "";
    }

    set isbn(isbn:number) {
        this._isbn = isbn;
    }

    set title(title:string) {
        this._title = title
    }

    set author(author: string) {
        this._author = author;
    }

}

let js:Book = new Book(123, "Java Script", "Someone", 100, true);
js.print();
console.log(`Book ISBN: ${js.isbn}`);
//console.log(`Book Price ${js.price}`);

js.author = "Someone else";
console.log(`Book Author: ${js.author}`);
