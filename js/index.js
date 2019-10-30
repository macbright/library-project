let myLibrary = [];

function Book(title, author, pages, publisher, isnb, image) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publisher = publisher;
    this.isnb = isnb;
    this.image = image;
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let publisher = document.getElementById('publisher').value;
    let isbn = document.getElementById('isnb').value;
    let image = document.getElementById('image').value;
    let myBook = new Book(title, author, pages, publisher, isbn, image);
    myLibrary.push(myBook)
    console.log(myLibrary)
}

let form = document.querySelector('.submit');
form.addEventListener('click', (e) => {
    e.preventDefault;
    addBookToLibrary()
})