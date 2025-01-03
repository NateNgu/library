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

const bookContainer = document.getElementById("books-container");

function displayBooks() {
  bookContainer.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-card-num", `${i}`);

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
    hasRead.textContent = `Status: ${myLibrary[i].hasRead}`;
    card.appendChild(hasRead);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("button");
    deleteButton.classList.add("delete");
    card.appendChild(deleteButton);
    deleteButton.addEventListener("click", function() {
      const cards = document.getElementsByClassName("card");
      const cardNum = cards[i].getAttribute("data-card-num")
      cards[cardNum].remove();
      myLibrary.splice(cardNum, 1);
    })

    bookContainer.appendChild(card);
  }
}

const newBookButton = document.getElementById("new-book");
const modal = document.getElementById("modal");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
const deleteButton = document.getElementsByClassName("delete");

newBookButton.addEventListener("click", function () {
  modal.showModal();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const status = document.getElementById("read-status").value;

  addBookToLibrary(title, author, pages, status);
  displayBooks();
  console.log(deleteButton);

  modal.close();
});
