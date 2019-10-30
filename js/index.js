let myLibrary = [];

function Book(title, author, pages, publisher, isbn, image) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publisher = publisher;
    this.isbn = isbn;
    this.image = image;
}
const book1 = {
    title: "Millionaire habbits",
    author: "Bright Okike",
    pages: 600,
    publisher: "British multinational publisher",
    isbn: '9971-5-0210-0',
    image: "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/03/1488480428eloquent-js.jpg"
}
const book2 = {
    title: "Best concepts of Ruby on Rails",
    author: "Forison",
    pages: 500,
    publisher: "British multinational publisher",
    isbn: '9971-5-0210-0',
    image: "https://images-na.ssl-images-amazon.com/images/I/713elKMGFkL.jpg"
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
    let myBook = new Book(title, author, pages, publisher, isbn, image);
    let arr = [myBook]
    myLibrary.push(myBook);
    newBook.push(myBook);
    render(arr);
    newBook = []


}

let form = document.querySelector('.submit');
form.addEventListener('click', (e) => {
    e.preventDefault;
    addBookToLibrary()
    clear();
});

function render(newbook) {
    for (let i = 0; i < newbook.length; i++) {
        let display = document.createElement('div');
        display.classList.add("display");
        const imageDiv = document.createElement('div');
        const image = document.createElement('img');
        imageDiv.classList.add('image-div');
        image.classList.add("image");
        image.src = newbook[i].image;
        imageDiv.appendChild(image);
        display.appendChild(imageDiv);


        const title = document.createElement('h4')
        title.classList.add('book-author');
        title.innerHTML = `Title:    ${newbook[i].title}`;
        display.appendChild(title);


        const author = document.createElement('p')
        author.classList.add('book-author');
        author.innerHTML = `Author:         ${newbook[i].author}`;
        display.appendChild(author);

        const pages = document.createElement('p')
        pages.classList.add('book-author');
        pages.innerHTML = `Pages:      ${newbook[i].pages}`;
        display.appendChild(pages);

        const publisher = document.createElement('p')
        publisher.classList.add('book-author');
        publisher.innerHTML = `Publisher:      ${newbook[i].publisher}`;
        display.appendChild(publisher);

        const isbn = document.createElement('p')
        isbn.classList.add('book-author');
        isbn.innerHTML = `ISBN NUMBER:      ${newbook[i].isbn}`;
        display.appendChild(isbn);

        const deleteBut = document.createElement('button');
        deleteBut.innerHTML = 'Delete Book'
        deleteBut.classList.add('delete-me')
        display.appendChild(deleteBut);

        deleteBut.addEventListener('click', () => {
            let displayAll = document.getElementsByClassName('display')
            for (let j = 0; j < displayAll.length; j++) {
                if (i === j) {
                    console.log(displayAll[i])
                    bookss.removeChild(displayAll[i])

                }
            }

            // if () {}


        })

        let bookss = document.querySelector('.bookss')
        bookss.appendChild(display)

        display = '';


    }

}

const inputs = document.querySelectorAll('input');
render(newBook);

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