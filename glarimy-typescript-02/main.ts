interface Book {
    isbn: number,
    title: string
}

let js: Book = {isbn:123, title: "Java Script"};
console.log(`Book ISBN: ${js.isbn} and title: ${js.title}`);
// console.log(`Book ISBN: ${js.isbn}, title: ${js.title} and author: ${js.author}`)

//let ts: Book = {title: "Type Script"};