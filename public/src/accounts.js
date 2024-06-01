function findAccountById(accounts, id) {
  for (let x in accounts) {
    if (accounts[x].id === id) return accounts[x];
  }
}

function sortAccountsByLastName(accounts) {
 
  const sorted = accounts.sort((a, b) => a.name.last > b.name.last ? 1 : -1);
  return sorted; 
}

function getTotalNumberOfBorrows(account, books) {
  const borrower = account.id;
  const borrowedBooks = books.filter((book) =>
    book.borrows.some((borrow) => borrow.id === borrower)
  );
  return borrowedBooks.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  
  let results = books.filter((book) => 
    book.borrows.find((borrow) => borrow.id === account.id && !borrow.returned));
  
  const listBooks = [];
  for (let i = 0; i < results.length; i++) {
    const foundAuthor = authors.find((author) => results[i].authorId === author.id);
  
    const foundBorrows = results[i].borrows;

    const foundBook = results[i];
    
    const frontBook = {
      id: foundBook.id,
      title: foundBook.title,
      genre: foundBook.genre,
      authorId: foundBook.authorId,
    };
        
    const combinedObjects = {
      ...frontBook,
      author: foundAuthor,
      borrows: foundBorrows,
    };
    listBooks.push(combinedObjects); 
  }  
   return listBooks;
}

//////// TEST  TEST  TEST  /////////

const bookTests = [
  {
    id: "5f447132d487bd81da01e25e",
    title: "sit eiusmod occaecat eu magna",
    genre: "Science",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      },
]
    
const accountTests = [
  {
    id: "5f446f2e2cfa3e1d234679b9",
    picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
    age: 25,
    name: {
      first: "Esther",
      last: "Tucker",
    },
    company: "ZILLACON",
    email: "esther.tucker@zillacon.me",
    registered: "Thursday, May 28, 2015 2:51 PM",
  },
]

function BooksByAccount(booksTests, accountsTests) {
   
  let results = bookTests.filter((bookTest) => 
    bookTest.borrows.find((borrow) => borrow.id === accountTest.id && !borrow.returned));
  //Check to see if found the right book
  return true;
console.log(BooksByAccount(booKsTests, accountsTests));

  module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
