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
    listBooks.push(combine(results[i], foundAuthor)); 
  }  
   return listBooks;
}

function combine(foundBook, foundAuthor) {
  return ({
           ...foundBook, 
           author: foundAuthor
         });
}

  module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
