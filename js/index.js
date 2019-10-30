let myLibrary = [];

function Book(title, author, pages, publisher, isnb) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publisher = publisher;
    this.isnb = isnb;
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let publisher = document.getElementById('publisher').value;
    let isbn = document.getElementById('isnb').value;
    let myBook = new Book(title, author, pages, publisher, isbn);
    myLibrary.push(myBook)
    myLibrary.push("hello")
    // console.log(myBook)
    console.log(myLibrary.length)
}

let form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault;
    addBookToLibrary()
})

