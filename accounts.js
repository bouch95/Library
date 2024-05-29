function findAccountById(accounts, id) {
  for (let x in accounts) {
    if (accounts[x].id === id) return accounts[x];
  }
}



function sortAccountsByLastName(accounts) {

    const sorted = accounts.sort((accountA, accountB) => accountA.name.last.localeCompare(accountB.name.last));
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

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
