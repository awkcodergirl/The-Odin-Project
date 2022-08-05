const addButton = document.getElementById("add-book-button");
let title = document.getElementById("name-of-book");
let author = document.getElementById("name-of-author");
let pages = document.getElementById("number-of-pages");
let statusCheckbox = document.getElementById("status-checkbox");
let myLibrary = [];

addButton.addEventListener("click", addBookToLibrary);

function Book(title, author, pages, status, deleteButton){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.deleteButton = deleteButton;
}

function addBookToLibrary(){
    // Set value of status
    let readStatus;
    if (statusCheckbox.checked){
        readStatus = "✔️";
    } else {
        readStatus = "❌";
    }

    // Store in array
    myLibrary.push(new Book(title.value, author.value, pages.value, readStatus, ""));

    // Display in Book List Table
    displayBook();
}


function displayBook(){
    let tr = document.createElement("tr");
    let titletd = "", authortd = "", pagestd = "", statustd = "", deletetd = "";
    let book = myLibrary[myLibrary.length - 1];

    // myLibrary.forEach(function(book){

    // For title column
    titletd = document.createElement('td');
    titletd.className = "title";
    titletd.textContent = book.title;
    tr.appendChild(titletd);

    // For author column
    authortd = document.createElement('td');
    authortd.className = "author";
    authortd.textContent = book.author;
    tr.appendChild(authortd);
    
    // For pages column
    pagestd = document.createElement('td');
    pagestd.className = "pages";
    pagestd.textContent = book.pages;
    tr.appendChild(pagestd);

    // For status column
    statustd = document.createElement('td');
    statustd.className = "status";
    statustd.textContent = book.status;
    tr.appendChild(statustd);

    // Make delete button for delete column
    book.deleteButton = document.createElement("button");
    book.deleteButton.innerHTML = "Delete";
    deletetd = document.createElement('td');
    deletetd.className = "deleteButton";
    deletetd = book.deleteButton;
    tr.appendChild(deletetd);

    book.deleteButton = addEventListener("click", function(e){
        console.log(e);
    });

    let currentBookList = document.getElementById("currentBookList");
    currentBookList.appendChild(tr);
}

function deleteBookFromLibrary(){
}