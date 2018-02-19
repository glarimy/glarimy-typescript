export class Book {
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
};

export interface Library {
    add(book: Book): void;
    find(isbn: number): Promise<Book>;
    list(): Promise<Book[]>;
};

export function Loggable(target: any, methodName: string, descriptor?: PropertyDescriptor) {
    console.log(`Replacing ${target[methodName].name}`);
};