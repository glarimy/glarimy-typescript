class Book {
    isbn: number;
    title: string;
    author?: string;

    constructor(isbn:number, title:string, author:string){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }

    print(): void {
        console.log(`Book ISBN: ${this.isbn}, title: ${this.title} and author: ${this.author}`)
    }
}

let js:Book = new Book(123, "Java Script", "Someone");
js.print();
console.log(`Book ISBN: ${js.isbn}`);