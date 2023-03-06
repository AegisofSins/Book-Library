//Declarations
const submitBtn =  document.getElementById('submit');
const inputForm = document.getElementById('form');
const cards = document.getElementById('cards');
let library = [];

//classes

class Book {
  constructor(
    title,
    author,
    pages,
    isRead
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    }

  addBook () {
    library.push(this)
    }

}

//Click events

submitBtn.onclick = e => {
  e.preventDefault();
  let newBook = getBookFromInput();
  newBook.addBook();
  createCard()
  inputForm.reset();
}

//Get book from input

const getBookFromInput = () => {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const isRead = document.getElementById('isRead').checked
  return new Book(title, author, pages, isRead);
}

//Create and style book cards

function createCard () {
  let div = document.createElement("div");
  cards.appendChild(div);
  div.classList.add("bookcard");
}





