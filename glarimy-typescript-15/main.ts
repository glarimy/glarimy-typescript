import { Book, Library } from './api';
import { SimpleLibrary } from './simplelibrary';

let library: Library = new SimpleLibrary();
library.add(new Book("123", "Java Script", 100));
library.add(new Book("isbn:678", "Type Script", 120));
library.add(new Book(234, "Angular", 80));

library.find(234).then(b=> b.print()).catch(m=> console.log(m));
library.find(345).then(b => b.print()).catch(m => console.log(m));