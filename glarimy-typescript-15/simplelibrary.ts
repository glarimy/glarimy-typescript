import { Book } from './api';
import { AbstractLibrary } from './abstractlibrary';

export class SimpleLibrary extends AbstractLibrary {
    constructor() {
        super();
    }

    find(isbn: number): Promise<Book> {
        return new Promise<Book>((resolve, reject) => {
            let book: Book = this._entries.filter(e => e.isbn == isbn)[0];
            if (book == null)
                reject("Book Not Found with ISBN : " + isbn);
            else
                resolve(book);
        });
    }
}