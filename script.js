// VARIABLES

const main = document.querySelector("#main");
const addDiv = document.querySelector("#addDiv");
const addButton = document.querySelector("#addButton");
const submit = document.querySelector("#submit");
const alert1 = document.querySelector("#alert");
const darker = document.querySelector("#darker");
const returnButton = document.querySelector("#return");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

let id = 0;

// FUNCTIONS

function giveId() {
    let newId = id;
    id++;
    return newId;
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = Number(pages);
        this.read = Boolean(read);
        this.id = giveId();
    }

    changeRead() {
        if (this.read === true) {
            this.read = false;
        } else {
            this.read = true;
        }
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    add(book) {
        this.books.push(book);
    }

    remove(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
}

const myLibrary = new Library();

function display(arr) {
    main.innerHTML = "";
    for (el of arr) {
        let article = document.createElement("article");
        main.appendChild(article);
        article.classList.add("book");

        let div1 = document.createElement("div");
        article.appendChild(div1);
        div1.classList.add("div1");

        let aTitle = document.createElement("h2");
        div1.appendChild(aTitle);
        aTitle.innerText = el.title;

        let aAuthor = document.createElement("h2");
        div1.appendChild(aAuthor);
        aAuthor.innerText = el.author;
        aAuthor.style.fontStyle = "italic";

        let aPages = document.createElement("h2");
        div1.appendChild(aPages);
        aPages.innerText = el.pages;

        let div2 = document.createElement("div");
        article.appendChild(div2);
        div2.classList.add("div2");

        let aRead = document.createElement("button");
        /* aRead.setAttribute("data-id", el.id); */
        div2.appendChild(aRead);
        aRead.onclick = el.changeRead;
        aRead.classList.add("aReadClass");
        if (el.read === true) {
            aRead.innerText = "Read";
            aRead.classList.add("green");
        } else {
            aRead.innerText = "Not read";
            aRead.classList.add("red");
        }

        let remove = document.createElement("button");
        remove.setAttribute("data-id", el.id);
        div2.appendChild(remove);
        remove.classList.add("removeButton");
        remove.innerText = "Remove";
        remove.onclick = el.remove;
    }
}
display(myLibrary.books);

const aReadClass = document.querySelector(".aReadClass");
const removeButton = document.querySelector(".removeButton");

// EVENTS

addButton.addEventListener("click", () => {
    addDiv.style.display = "flex";
    darker.style.display = "flex";
});

submit.addEventListener("click", () => {
    if (title.checkValidity() && author.checkValidity() && pages.checkValidity()) {
        let bookCreation = new Book(title.value, author.value, pages.value, read.checked);
        myLibrary.add(bookCreation);
        display(myLibrary);
        addDiv.style.display = "none";
        darker.style.display = "none";
        alert1.innerText = "";
    } else {
        alert1.innerText = "Fill out all the fields";
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
    alert1.innerText = "";
    addDiv.style.display = "none";
    darker.style.display = "none";
});

aReadClass.addEventListener("click", () => {
    let attr = aReadClass.getAttribute("data-id");
    let bookToChange = myLibrary.find(book => book.id == attr);
    bookToChange.changeRead();
    display(myLibrary);
});

removeButton.addEventListener("click", () => {
    
});
