// VARIABLES

const main = document.querySelector("#main");
const addDiv = document.querySelector("#addDiv");
const addButton = document.querySelector("#addButton");
const submit = document.querySelector("#submit");
const alert = document.querySelector("#alert");
const darker = document.querySelector("#darker");
const returnButton = document.querySelector("#return");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

let myLibrary = [];

// FUNCTIONS

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = Number(pages);
        this.read = Boolean(read);
    }
}

function addBook(book) {
    myLibrary.push(book);
}

function display(arr) {
    main.innerHTML = "";
    for (book of arr) {
        let article = document.createElement("article");
        main.appendChild(article);
        article.classList.add("book");

        let div1 = document.createElement("div");
        article.appendChild(div1);
        div1.classList.add("div1");

        let aTitle = document.createElement("h2");
        div1.appendChild(aTitle);
        aTitle.innerText = book.title;

        let aAuthor = document.createElement("h2");
        div1.appendChild(aAuthor);
        aAuthor.innerText = book.author;
        aAuthor.style.fontStyle = "italic";

        let aPages = document.createElement("h2");
        div1.appendChild(aPages);
        aPages.innerText = book.pages;

        let div2 = document.createElement("div");
        article.appendChild(div2);
        div2.classList.add("div2");

        let aRead = document.createElement("button");
        div2.appendChild(aRead);
        if (book.read) {
            aRead.innerText = "Read";
            aRead.classList.add("green");
        } else {
            aRead.innerText = "Not read";
            aRead.classList.add("red");
        }

        let remove = document.createElement("button");
        div2.appendChild(remove);
        remove.classList.add("removeButton");
        remove.innerText = "Remove";
    }
}
display(myLibrary);

// EVENTS

addButton.addEventListener("click", () => {
    addDiv.style.display = "flex";
    darker.style.display = "flex";
});

submit.addEventListener("click", () => {
    if (title.checkValidity() && author.checkValidity() && pages.checkValidity()) {
        let bookCreation = new Book(title.value, author.value, pages.value, read.checked);
        addBook(bookCreation);
        display(myLibrary);
        addDiv.style.display = "none";
        darker.style.display = "none";
        alert.innerText = "";
    } else {
        alert.innerText = "Fill out all the fields";
    }
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
});

returnButton.addEventListener("click", () => {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
    alert.innerText = "";
    addDiv.style.display = "none";
    darker.style.display = "none";
});