//  Declare empty array for library
let myLibrary = [];

//  Object
function Book(Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
}

//  Function for adding a new book to the array (library) and pushes contents to array
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);                       
  myLibrary.push(book);                                                 
  displayBooksOnPage();
}

//  Function to display library array to cards and returns books element in html
function displayBooksOnPage() {
  const books = document.querySelector(".books");                                     

  //  Remove all previous displayed DOM cards before looping over array again
  const removeExtraDivs = document.querySelectorAll(".card");
  for (let i = 0; i < removeExtraDivs.length; i++) {
    removeExtraDivs[i].remove();
  }

  //  Loops over library array to display cards
  //  Calls function for each element in array, creates a div element, adds class card to div element and card is child of books (books -> card)
  let index = 0;
  myLibrary.forEach(myLibrarys => {                                                 
    const card = document.createElement("div");                            
    card.classList.add("card");                                         
    books.appendChild(card);                                             
   
    //  Creates a remove button and add class attribute for each array card
    //  Creates a button element, adds a class remove-book-button with the text 'Remove'
    const removeBookButton = document.createElement("button");
    removeBookButton.classList.add("remove-book-button");
    removeBookButton.textContent = "Remove";
   
    //  Links the data attribute of remove button to the array and card
    removeBookButton.dataset.linkedArray = index;
    card.appendChild(removeBookButton);

    //  Starts event listener/remove array item from array and card from parent div through data link
    removeBookButton.addEventListener("click", removeBook);

    function removeBook() {
      let retrieveBook = removeBookButton.dataset.linkedArray;
      myLibrary.splice(parseInt(retrieveBook), 1);
      card.remove();
      displayBooksOnPage();
    }

    //  Creates a read button and add class attribute for each array card
    const readBookButton = document.createElement("button");
    readBookButton.classList.add("read-book-button");
    readBookButton.textContent = "Read status";
    
    //  Links the data attribute of the toggle read button to the array and card
    readBookButton.dataset.linkedArray = index;
    card.appendChild(readBookButton);

    //  Creates event listener/toggle logic for array objects to change read status
    readBookButton.addEventListener("click", toggleRead);

    function toggleRead() {
      let retrieveStatus = readBookButton.dataset.linkedArray;
      Book.prototype = Object.create(Book.prototype);
      const toggleStatus = new Book();

      //  Checks to see what read status is active to toggle from
      if (myLibrary[parseInt(retrieveStatus)].Read == "Yes") {
        toggleStatus.Read = "No";
        myLibrary[parseInt(retrieveStatus)].Read = toggleStatus.Read;
      } else if (myLibrary[parseInt(retrieveStatus)].Read == "No") {
        toggleStatus.Read = "Yes";
        myLibrary[parseInt(retrieveStatus)].Read = toggleStatus.Read;
      }
      displayBooksOnPage();
  }

    //  Loops over the object keys/values and display each card
    //  (Loops thorugh array), {} keeps track of current string of key + prints out and [] prints value of key
    //  Creates a p element -> adds key + value to p element -> p is child of card (books -> card -> p)
    for (let key in myLibrarys) {                                        // loops through array 
      console.log(`${key}: ${myLibrarys[key]}`);                       
      const para = document.createElement("p");                          
      para.textContent = (`${key}: ${myLibrarys[key]}`);                
      card.appendChild(para);                                             
    }
  index++;
  })
}

//  Starts event listener/display form to add a new book to library
//  Selects add-book-button element from html and displays form
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayForm);

function displayForm() {
  document.getElementById("add-book-form").style.display = "";            
}

//  Starts event listener/adds input to array for new entry form
//  Selects submit-button element from html and adds new form to library
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", displayContentForm)

//  Transform form data to variables for intake
function displayContentForm() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  //  If form is empty/incomplete
  if ((title == "") || (author == "") || (pages == "") || (read == "")) {
    return;
  }
  
  //  Calls function to input book data to array and reset form after submitting
  addBookToLibrary(title, author, pages, read);
        //document.getElementById("add-book").reset();// NOT WORKING SINCE NO FORM ELEMENT IN HTML
}

  //  Starts event listener for reset form button
        //const resetButton = document.querySelector(".reset-button");// NOT WORKING SINCE NO FORM ELEMENT IN HTML
        //resetButton.addEventListener("click", resetForm);

        //function resetForm() {
        //document.getElementById("add-book").reset();
        //}