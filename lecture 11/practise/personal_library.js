// Personal Library Example
function createBook(title, author, yearPublished) {
  return {
    title,
    author,
    yearPublished,
    isRead: false,
    readBook() {
      this.isRead = true;
      console.log(`You have read ${this.title}`);
    }
  };
}

const book1 = createBook('Clean Code', 'Robert C. Martin', 2008);
const book2 = createBook('JavaScript: The Good Parts', 'Douglas Crockford', 2008);
const book3 = createBook('Eloquent JavaScript', 'Marijn Haverbeke', 2018);

const library = [book1, book2, book3];

// Print titles of books not yet read
for (const book of library) {
  if (!book.isRead) {
    console.log(book.title);
  }
}
