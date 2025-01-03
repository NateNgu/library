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

    const changeStatusButton = document.createElement("button");
    changeStatusButton.textContent = "Change Status";
    changeStatusButton.classList.add("button");
    changeStatusButton.classList.add("changeStatus");
    card.appendChild(changeStatusButton);
    changeStatusButton.addEventListener("click", function (e) {
      e.stopPropagation();
      const dialog = document.getElementById("dialog");
      dialog.showModal();
    });

    const changeStatus = document.getElementsByClassName("changeStatus");
    const changeStatusForm = document.getElementById("changeStatusForm");
    changeStatusForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const cards = document.getElementsByClassName("card");
      const newStatus = document.getElementById("read-status2").value;


      console.table(myLibrary)

      myLibrary[i].hasRead = newStatus;

      displayBooks();
      dialog.close();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("button");
    deleteButton.classList.add("delete");
    card.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
      const cards = document.getElementsByClassName("card");
      cards[i].remove();
      myLibrary.splice(i, 1);
      displayBooks();
    });

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

  modal.close();
});
