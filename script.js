//Declarations
const submitBtn =  document.getElementById('submit');
const inputForm = document.getElementById('form');
const cards = document.getElementById('cards');
const inputfields = document.querySelectorAll('#title, #author, #pages, #isRead');
const library = [];
window.onload = inputForm.reset();

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
    createCard();
  }
}

//Click events

submitBtn.onclick = e => {
  e.preventDefault();
  checkForm();
}

//Get book from input

function getBookFromInput() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('isRead').checked;
  return new Book(title, author, pages, isRead);
}

//Checking if fields are empty and not sending in submit if they are

 function checkForm() {
   let array = Array.from(inputfields);
   if (array[0].value != '' && array[1].value != '' && array[2].value != ''){
     let newBook = getBookFromInput();
     newBook.addBook();
     inputForm.reset();
   }else{
     alert('Please enter all required fields');
   }
}

//Create and style book cards

function createCard () {
  cards.innerHTML = '';
  library.map(e => {
    let div = document.createElement('div');
    cards.appendChild(div);
    div.classList.add('bookcard');
    let title = document.createElement('h2');
    div.appendChild(title)
    title.innerText = e.title;
    let author = document.createElement('h4');
    div.appendChild(author)
    author.innerText = e.author;
    let pages = document.createElement('h4');
    div.appendChild(pages)
    pages.innerText = e.pages;
    let read = document.createElement('button')
    div.appendChild(read);
    read.classList.add("readBtn")
    read.innerText = e.isRead == true ? 'Read' : 'Not Read';
    read.addEventListener("click", () => {
      read.innerText == 'Not Read' ? read.innerText = 'Read' : read.innerText = 'Not Read';
    }); 
  })
}



