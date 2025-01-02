const myLibrary = [];

function Book(name, author, pages, hasRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

Book.prototype.info = () =>
  `${this.name}, ${this.author}, ${this.pages}, ${this.hasRead}`;

function addBookToLibrary(name, author, pages, hasRead) {
  const book = new Book(name, author, pages, hasRead);
  myLibrary.push(book);
}

addBookToLibrary("a", "b", 1, true);
addBookToLibrary("a", "b", 1, false);

const bookContainer = document.getElementById("books-container");

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div")
    card.classList.add("card")

    const title = document.createElement("h3");
    title.textContent = `Title: ${myLibrary[i].name}`;
    card.appendChild(title);

    const author = document.createElement("h3");
    author.textContent = `Author: ${myLibrary[i].author}`;
    card.appendChild(author);

    const pages = document.createElement("h3");
    pages.textContent = `Pages: ${myLibrary[i].pages}`;
    card.appendChild(pages);

    const hasRead = document.createElement("h3");
    hasRead.textContent = `Read: ${myLibrary[i].hasRead}`;
    card.appendChild(hasRead);

    bookContainer.appendChild(card)
  }
}

displayBooks();

const newBookButton = document.getElementById("new-book");
const modal = document.getElementById("modal")

newBookButton.addEventListener("click", function() {
  modal.showModal();
})
