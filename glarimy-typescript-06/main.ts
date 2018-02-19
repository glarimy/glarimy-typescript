class Book {
    private isbn: number;
    private title: string;
    private author?: string;
    protected price: number;
    public reference: boolean;

    constructor(isbn:number, title:string, author:string, price:number, reference: boolean){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.price = price;
        this.reference = reference;
    }

    public print(): void {
        console.log(`Book ISBN: ${this.isbn}, title: ${this.title} and author: ${this.author}`)
    }
}

let js:Book = new Book(123, "Java Script", "Someone", 100, true);
js.print();
//console.log(`Book ISBN: ${js.isbn}`);
//console.log(`Book Price ${js.price}`);
console.log(`Is it a reference book? ${js.reference}`);