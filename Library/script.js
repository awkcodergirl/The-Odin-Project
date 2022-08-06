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
    showBooksInLibrary();
    updateSideCardInfo();
}


function showBooksInLibrary(){
    let currentBookList = document.getElementById("currentBookList");
    let titletd = "", authortd = "", pagestd = "", statustd = "", deletetd = "", tr = "";
    let binIcon = "", statusIcon = "";
    currentBookList.innerHTML = "";

    myLibrary.forEach(function(book){
        tr = document.createElement("tr");

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
        statusIcon = document.createElement("p");
        statustd.appendChild(statusIcon);
        statusIcon.className = "status";
        statusIcon.textContent = book.status;
        tr.appendChild(statustd);

        // For delete column
        deletetd = document.createElement('td');
        binIcon = document.createElement("p");
        deletetd.appendChild(binIcon);
        binIcon.className = "deleteButton";
        binIcon.textContent = book.deleteButton;
        tr.appendChild(deletetd);
        
        binIcon.style.cursor = "pointer";
        binIcon.style.width = "35px";
        binIcon.style.textAlign = "center";

        deleteBookFromLibrary(binIcon);

        statusIcon.style.cursor = "pointer";
        statusIcon.style.width = "35px";
        statusIcon.style.textAlign = "center";

        changeStatus(statusIcon);

        currentBookList.appendChild(tr);
    });

}

function deleteBookFromLibrary(binIcon){
    binIcon.addEventListener('click', (event) => {
        const { target } = event;
        const tr = target.parentNode.parentNode.rowIndex - 1;

        if (target.classList.contains('deleteButton')){
            myLibrary.splice(tr, 1);
        }

        showBooksInLibrary();
        updateSideCardInfo();
    });
}

function changeStatus(statusIcon){
    statusIcon.addEventListener('click', (event) => {
        const { target } = event;
        const tr = target.parentNode.parentNode.rowIndex - 1;

        if (target.classList.contains('status')){
            if (myLibrary[tr].status == "❌"){
                myLibrary[tr].status = "✔️"
            } else {
                myLibrary[tr].status = "❌"
            }
        }

        showBooksInLibrary();
        updateSideCardInfo();
    });
}

function updateSideCardInfo(){
    let read = 0, notRead = 0;
    myLibrary.forEach(function(book){
        if (book.status == "✔️"){
            read++;
        } else if(book.status == "❌"){
            notRead++;
        }
    });

    booksRead.textContent = read;
    booksNotRead.textContent = notRead;
    totalBooks.textContent = myLibrary.length;
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