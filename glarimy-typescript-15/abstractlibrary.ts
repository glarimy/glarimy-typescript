import {Book, Library} from './api';

export abstract class AbstractLibrary implements Library{
    protected _entries: Book[];

    constructor() {
        this._entries = [];
    }

    add(book: Book): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._entries.push(book);
            resolve();
        });
    }

    list(): Promise<Book[]> {
        return new Promise<Book[]>(
            (resolve, reject) => {
                resolve(this._entries);
            });
    }

    abstract find(isbn:number):Promise<Book>;
}