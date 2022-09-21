let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);                       // calls constructor(Book) creating new Book
  myLibrary.push(book);                                                 // pushes contents to array
}

function displayBooksOnPage() {
  const books = document.querySelector(".books");                       // returns the first element that matches in html (div class "books")

  myLibrary.forEach(myLibrary => {                                       // calls function for each element in array
    const card = document.createElement("div");                           // creates div element
    card.classList.add("card");                                          // adds class to div element = "card"
    books.appendChild(card);                                              // child of books (books-> card)
    for (let key in myLibrary) {                                        // loops through array 
      console.log(`${key}: ${myLibrary[key]}`);                         // {} - keep track of current string of key and prints out. [] - prints value of key. ex - title: the Hobbit
      const para = document.createElement("p");                           // creates p element
      para.textContent = (`${key}: ${myLibrary[key]}`);                 // adds key + value in p element
      card.appendChild(para);                                             // child of card (books-> card-> p)
    }
  })
}

addBookToLibrary("The Hobbit", "JRR Tolkien", "295 Pages", "Not read");
addBookToLibrary("The Hobbit", "JRR Tolkien", "295 Pages", "Not read");
addBookToLibrary("The Hobbit", "JRR Tolkien", "295 Pages", "Not read");
addBookToLibrary("The Hobbit", "JRR Tolkien", "295 Pages", "Not read");
addBookToLibrary("The Hobbit", "JRR Tolkien", "295 Pages", "Not read");

console.log("End of code array", myLibrary);
displayBooksOnPage();

