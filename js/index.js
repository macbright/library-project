let myLibrary = [];

function Book(title, author, pages, publisher, isbn, image, hasBeenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publisher = publisher;
    this.isbn = isbn;
    this.image = image;
    this.hasBeenRead = hasBeenRead;
}
const book1 = {
    title: "Millionaire habbits",
    author: "Bright Okike",
    pages: 600,
    publisher: "British multinational publisher",
    isbn: '9971-5-0210-0',
    image: "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/03/1488480428eloquent-js.jpg",
    hasBeenRead: "Read"
}
const book2 = {
    title: "Best concepts of Ruby on Rails",
    author: "Forison",
    pages: 500,
    publisher: "British multinational publisher",
    isbn: '9971-5-0210-0',
    image: "https://images-na.ssl-images-amazon.com/images/I/713elKMGFkL.jpg",
    hasBeenRead: "Not Read"
}


let newBook = [book1, book2];
myLibrary = [book1, book2]


function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let publisher = document.getElementById('publisher').value;
    let isbn = document.getElementById('isbn').value;
    let image = document.getElementById('image').value;
    let hasBeenRead = document.getElementById('hasBeenRead').value;
    if (!title) {
        return (alert('At least the title  must be added.'))
    }
    let myBook = new Book(title, author, pages, publisher, isbn, image, hasBeenRead);
    let arr = [myBook]
    myLibrary.push(myBook);
    newBook.push(myBook);
    render(arr);
    newBook = []


}


Book.prototype.changeReadStatus = function() {
    if (this.hasBeenRead === 'Read') {
        return this.hasBeenRead = 'Not read'
    } else {
        return this.hasBeenRead = 'Read'
    }
}

let form = document.querySelector('.submit');
form.addEventListener('click', (e) => {
    e.preventDefault;
    addBookToLibrary()
    clear();
});

function render(books) {
    for (let i = 0; i < books.length; i++) {
        let display = document.createElement('div');
        display.classList.add("display");
        const imageDiv = document.createElement('div');
        const image = document.createElement('img');
        imageDiv.classList.add('image-div');
        image.classList.add("image");
        if (books[i].image === '') {
            image.src = "https://images-na.ssl-images-amazon.com/images/I/713elKMGFkL.jpg";
        } else {
            image.src = books[i].image;
        }

        imageDiv.appendChild(image);
        display.appendChild(imageDiv);


        const title = document.createElement('h4')
        title.classList.add('book-author');
        title.innerHTML = `Title:    ${books[i].title}`;
        display.appendChild(title);


        const author = document.createElement('p')
        author.classList.add('book-author');
        author.innerHTML = `Author:         ${books[i].author}`;
        display.appendChild(author);

        const pages = document.createElement('p')
        pages.classList.add('book-author');
        pages.innerHTML = `Pages:      ${books[i].pages}`;
        display.appendChild(pages);

        const publisher = document.createElement('p')
        publisher.classList.add('book-author');
        publisher.innerHTML = `Publisher:      ${books[i].publisher}`;
        display.appendChild(publisher);

        const isbn = document.createElement('p')
        isbn.classList.add('book-author');
        isbn.innerHTML = `ISBN NUMBER:      ${books[i].isbn}`;
        display.appendChild(isbn);


        const readBtn = document.createElement('button')
        readBtn.classList.add('btn', 'btn-success', 'mr-5');
        if (books[i].hasBeenRead === '') {
            readBtn.innerHTML = 'Not Read'
        } else {
            readBtn.innerHTML = books[i].hasBeenRead;
        }

        display.appendChild(readBtn);
        readBtn.addEventListener('click', function(e) {
            if (e.target.innerHTML === 'Read') {
                return e.target.innerHTML = 'Not read'
            } else {
                return e.target.innerHTML = 'Read'
            }
        })


        const deleteBut = document.createElement('button');
        deleteBut.innerHTML = 'Delete Book'
        deleteBut.classList.add('delete-me')
        display.appendChild(deleteBut);
        let bookss = document.querySelector('.bookss')
        bookss.appendChild(display)

        deleteBut.addEventListener('click', () => {
            let displayAll = document.getElementsByClassName('display')
            for (let j = 0; j < displayAll.length; j++) {
                console.log(i, j);
                if (i == j) {
                    bookss.removeChild(displayAll[j])
                } else {
                    bookss.removeChild(displayAll[j])
                }
            }

        })
        display = '';
    }

}
render(newBook);


const inputs = document.querySelectorAll('input');

function clear() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}
const bookss = document.querySelector('.bookss')
const formSubmitter = document.querySelector('.form-wrap')
const toggleForm = document.querySelector('.submit-book')
toggleForm.addEventListener('click', function() {
    formSubmitter.style.display = 'block'
    bookss.style.opacity = 0.1
})

function closeForm() {
    formSubmitter.style.display = 'none'
    bookss.style.opacity = 1
}