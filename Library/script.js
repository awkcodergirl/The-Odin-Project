const addButton = document.getElementById("add-book-button");
let title = document.getElementById("name-of-book");
let author = document.getElementById("name-of-author");
let pages = document.getElementById("number-of-pages");
let statusCheckbox = document.getElementById("status-checkbox");
let openFormButton = document.getElementById("plus-icon");
let closeFormButton = document.getElementById("cross-icon");
let openSideBar = document.getElementById("hamburger-menu");
let closeSideBar = document.getElementById("close-side-form");
let booksRead = document.getElementById("read");
let booksNotRead = document.getElementById("not-read");
let totalBooks = document.getElementById("total");
let myLibrary = [];
let titletd = "", authortd = "", pagestd = "", statustd = "", deletetd = "";


addButton.addEventListener("click", addBookToLibrary);
openFormButton.addEventListener("click", openForm);
closeFormButton.addEventListener("click", closeForm);
openSideBar.addEventListener("click", openInfoBar);
closeSideBar.addEventListener("click", closeInfoBar);

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
    myLibrary.push(new Book(title.value, author.value, pages.value, readStatus, "🗑️"));

    // Display in Book List Table
    displayBook();
    updateSideCardInfo();
}


function displayBook(){
    let tr = document.createElement("tr");
    // let titletd = "", authortd = "", pagestd = "", statustd = "", deletetd = "";
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
    deletetd = document.createElement('td');
    deletetd.className = "deleteButton";
    deletetd.textContent = book.deleteButton;
    tr.appendChild(deletetd);

    // deletetd.addEventListener("click", function(e){
    //     console.log(e);
    // });

    statustd.addEventListener("click", changeStatus);

    let currentBookList = document.getElementById("currentBookList");
    currentBookList.appendChild(tr);
}

// function deleteBookFromLibrary(){
// }

function updateSideCardInfo(){
    let read = 0, notRead = 0, total = 0;
    myLibrary.forEach(function(book){
        if (book.status == "✔️"){
            read++;
        } else if(book.status == "❌"){
            notRead++;
        }
        total++;
    });

    console.log(`read ${read}`);
    console.log(`not read ${notRead}`);
    console.log(`total ${total}`);
    
    booksRead.textContent = read;
    booksNotRead.textContent = notRead;
    totalBooks.textContent = total;
}

function openForm() {
    document.getElementById("add-books-form").style.display = "block";
}
  
function closeForm() {
    document.getElementById("add-books-form").style.display = "none";
}

function openInfoBar(){
    document.getElementById("side-form").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}

function closeInfoBar() {
    document.getElementById("side-form").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function changeStatus(){
    console.log("here ❌");
    if (readStatus = "✔️"){
        statustd.textContent = "❌";
    }
}