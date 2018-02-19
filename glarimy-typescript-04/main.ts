class Book {
    isbn: number;
    title: string;
    author?: string;

    print(): void {
        console.log(`Book ISBN: ${this.isbn}, title: ${this.title} and author: ${this.author}`)        
    }
}

let js = new Book();
js.isbn = 123;
js.title = "Java Script";
js.print();