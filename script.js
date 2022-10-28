// VARIABLES

const main = document.querySelector("#main");
const addDiv = document.querySelector("#addDiv");
const addButton = document.querySelector("#addButton");

let myLibrary = [
    {title: "Book 1 meredenerese ne", 
    author: "Author 1 nenenenenenen", 
    pages: 100, 
    read: true},

    {title: "El camino de Santiago de Compostela", 
    author: "Author 21 apellido apellido", 
    pages: 200, 
    read: true},

    {title: "Book 3", 
    author: "Author 3", 
    pages: 300, 
    read: false},

    {title: "Book 4", 
    author: "Author 4", 
    pages: 400, 
    read: false}
];

// FUNCTIONS

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.read = Boolean(read);
}

function addBook(book) {
    let newBook = book();
    myLibrary.push(newBook);
}

function display(arr) {
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
});
