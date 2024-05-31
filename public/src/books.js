function findAuthorById(authors, id) {
  const found = authors.find((author) => author.id === id);
  return found;   
}

function findBookById(books, id) {
  const found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  const all = [];
  const booksOut = [];
  const booksIn = [];
  books.forEach((book) => {
    if (book.borrows[0].returned) {
      booksIn.push(book);
    } else {
      booksOut.push(book);
    }
  })

  all.push(booksOut);
  all.push(booksIn);
  return all;

}
function getBorrowersForBook(book, accounts) {
  
  const bookAccounts = [];
  
  const {borrows} = book;

  borrows.forEach((borrow) => {
    //const bookInfo = borrow;
    
    accounts.forEach((account) => {
    
      if (borrow.id === account.id) {
                 
        const combinedInfo = {
          ...borrow,
          ...account,
        }
            
        if (bookAccounts.length < 10) {
          bookAccounts.push(combinedInfo);
        }       
      } 
    });
  });
  return bookAccounts;
};


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
