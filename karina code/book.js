let myLibrary = [];
let delet = document.querySelector("#deleted");


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.check = check;
};

function displayBooks() {
    let booksList = document.querySelector(".list-books");
    booksList.innerHTML = "";
    for (i = 0; i < myLibrary.length; i++) {
        let card = myLibrary[i];
        let bookCard = document.createElement("div");
        bookCard.innerHTML =
            <div class="card-body">
                <h3 class="column">Title: ${card.title}</h3>
                <h5 class="column"> Author: ${card.author}</h5>
                <h5 class="column"> Pages: ${card.pages}</h5>
                <h5 class="column" id="read"></h5>
                <button class="btn-remove">Remove</button>
            </div>;
        booksList.appendChild(bookCard);

    };
};



function checkBook() {
    let read = document.getElementById("read");
    if (this.check == true) {
        read.textContent = "Read: Yes"
    } else {
        read.textContent = "Not Read"

    }
};

function addBookLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let check = document.querySelector("#check").checked;
    let newBook = new Book(title, author, pages, check);
    myLibrary.push(newBook);
    console.log(myLibrary);
}


let form = document.getElementById("form");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    addBookLibrary();
    displayBooks();

});