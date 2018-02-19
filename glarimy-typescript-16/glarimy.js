let library = new SimpleLibrary();
addEventListener('load', function () {
    library.list().then(function (books) {
        let table = document.createElement('table');
        table.id = 'table';
        table.innerHTML = '<tr><th>ISBN</th><th>Title</th></tr>';
        document.getElementById('list').appendChild(table);
        let div = document.createElement('div');
        div.id = 'detail';
        document.getElementById('list').appendChild(div);

        for (let i = 0; i < books.length; i++) {
            let book = books[i];
            let row = document.createElement('tr');
            row.id = book.isbn;
            row.className = 'link';
            row.innerHTML = `<td>${book.isbn}</td><td>${book.title}</td>`;
            document.getElementById('table').appendChild(row);
            document.getElementById(row.id).addEventListener('click', function (e) {
                library.find(parseInt(e.target.parentNode.id))
                .then(b => document.getElementById('detail').innerHTML = `${b.isbn} [${b.title}: ${Book._currency} ${b.price}]`);
            });
        }
    });

    document.getElementById('addLink').addEventListener('click', function (e) {
        document.getElementById('addForm').style.display = 'block';
        document.getElementById('list').style.display = 'none';
        e.preventDefault();

    });

    document.getElementById('homeLink').addEventListener('click', function (e) {
        document.getElementById('addForm').style.display = 'none';
        document.getElementById('list').style.display = 'block';
        e.preventDefault();
    });

    document.getElementById('addBtn').addEventListener('click', function (e) {
        let book = new Book(
            document.getElementById('isbn').value,
            document.getElementById('title').value,
            parseInt(document.getElementById('price').value)
        );
        document.getElementById('isbn').value = '';
        document.getElementById('title').value = '';
        document.getElementById('price').value = '';

        library.add(book);
        let row = document.createElement('tr');
        row.id = book.isbn;
        row.className = 'link';
        row.innerHTML = `<td>${book.isbn}</td><td>${book.title}</td>`;
        document.getElementById('table').appendChild(row);
        row.addEventListener('click', function (e) {
            library.find(parseInt(e.target.parentNode.id))
            .then(b => document.getElementById('detail').innerHTML = `${b.isbn} [${b.title}: ${Book._currency} ${b.price}]`);
        });
        document.getElementById('addForm').style.display = 'none';
        document.getElementById('list').style.display = 'block';
        e.preventDefault();
    });
})