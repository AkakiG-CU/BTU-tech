// 1 & 2.
function createBook(title, author, yearPublished, isRead) {
  return {
    title: title,
    author: author,
    yearPublished: yearPublished,
    isRead: isRead,
    readBook: function() {
      this.isRead = true;
      console.log(`You have read "${this.title}"`);
    }
  };
}

// 3.
const library = [
  createBook("1984", "George Orwell", 1949, true),
  createBook("Crime and Punishment", "Fyodor Dostoevsky", 1866, false)
  createBook("The Little Prince", "Antoine de Saint-Exupéry", 1943, false)
];

// 4. 
console.log("Unread books:");
for (let i = 0; i < library.length; i++) {
  if (!library[i].isRead) {
    console.log(library[i].title);
  }
}