interface Book {
    isbn: number,
    title: string,
    author?: string
}

let js: Book = {isbn:123, title: "Java Script"}
console.log(`Book ISBN: ${js.isbn}, title: ${js.title} and author: ${js.author}`)

let ts: Book = {isbn: 234, title: "Type Script", author: "Someone"}
console.log(`Book ISBN: ${ts.isbn}, title: ${ts.title} and author: ${ts.author}`)
