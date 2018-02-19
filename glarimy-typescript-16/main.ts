
interface Library {
    add(book: Book): Promise<void>;
    find(isbn: number): Promise<Book>;
    list(): Promise<Book[]>;
}

abstract class AbstractLibrary {
    add(book: Book): Promise<void> {
        return new Promise<void>((resolve, reject)=>{
            let payload = {
                isbn: book.isbn,
                title: book.title,
                price: book.price
            };
            let xhr = new XMLHttpRequest();
            xhr.open('post', 'library/book', true);
            xhr.setRequestHeader('Content_Type', 'application/json');
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4){
                    if(xhr.status == 201){
                        resolve();
                    }else{
                        reject();
                    }
                }
            };
            xhr.send(JSON.stringify(payload));
        });
    }

    list(): Promise<Book[]> {
        return new Promise<Book[]>(
            (resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('get', 'books.json', true);
                xhr.onreadystatechange = () => {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            let books = JSON.parse(xhr.responseText);
                            resolve(books);
                        } else {
                            reject();
                        }
                    }
                };
                xhr.send();
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
            let xhr = new XMLHttpRequest();
            xhr.open('get', 'book.json', true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        let book = JSON.parse(xhr.responseText);
                        resolve(new Book(book.isbn, book.title, book.price));
                    } else {
                        reject();
                    }
                }
            };
            xhr.send();
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