// VARIABLES

const main = document.querySelector("#main");
const addDiv = document.querySelector("#addDiv");
const addButton = document.querySelector("#addButton");

let myLibrary = [
    {title: "Book 1", 
    author: "Author 1", 
    pages: 100, 
    read: true},

    {title: "Book 2", 
    author: "Author 21", 
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

        for (info in book) {
            let h2 = document.createElement("h2");
            article.appendChild(h2);
            h2.innerText = 
        }

    }
}
display(myLibrary);

// EVENTS

addButton.addEventListener("click", () => {
    addDiv.style.display = "flex";
});
