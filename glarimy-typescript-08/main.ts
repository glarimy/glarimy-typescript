class Book {
    private _isbn: number;
    private _title: string;

    constructor(isbn:any, title:any){
        if(typeof isbn == "number")
            this._isbn = isbn;
        else if(typeof isbn == "string"){
            isbn = parseInt(isbn);
                if(!isNaN(isbn))
                    this._isbn = isbn;
        }
        this._title = title;
    }

    public print(): void {
        console.log(`Book ISBN: ${this._isbn}, title: ${this._title}`);
    }

    get isbn() {
        return this._isbn;
    }

    get title() {
        return this._title;
    }

    set isbn(isbn:number) {
        this._isbn = isbn;
    }

    set title(title:string) {
        this._title = title
    }

}

let js:Book = new Book("123", "Java Script");
js.print();

let ts:Book = new Book("isbn:678", "Type Script");
ts.print();

let ng:Book = new Book(234, "Angular");
ng.print();