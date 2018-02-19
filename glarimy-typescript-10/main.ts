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

let js:Book = new Book("123", "Java Script", 100);
js.print();

let ts:Book = new Book("isbn:678", "Type Script", 120);
ts.print();

//Book._currency = "$"

let ng:Book = new Book(234, "Angular", 80);
ng.print();