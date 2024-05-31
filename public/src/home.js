function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const booksOut = [];
  books.forEach((book) => {
    if (!book.borrows[0].returned) {
      booksOut.push(book);
    }
    
  });
return booksOut.length;
}
function getMostCommonGenres(books) {
  
  // Grabs the GENRES and puts them in an ARRAY in ALPHA order
  const alphaBooks = books.sort((a, b) => (a.genre > b.genre ? 1 : -1));
  const justGenres= alphaBooks.map((alphaBook) => alphaBook.genre);
  const countUniqueStrings = justGenres.reduce((acc, string) => {  
    acc[string] = (acc[string] || 0) + 1;  
    return acc;}, {});
   
  const copyCountUniqueStrings = countUniqueStrings;
  
  // Convert the object into an array and sort by value
  const sortedEntries = Object.entries(countUniqueStrings).sort((a, b) => b[1] - a[1]);

  // Map the sorted entries to an array of objects with "name" and "count" keys
  const sortedArray = sortedEntries.map(entry => ({ name: entry[0], count: entry[1] }));
  const sortedArrayOfFive = [];
sortedArrayOfFive.push(sortedArray[0]);
sortedArrayOfFive.push(sortedArray[1]);
sortedArrayOfFive.push(sortedArray[2]);
sortedArrayOfFive.push(sortedArray[3]);
sortedArrayOfFive.push(sortedArray[4]);
//console.log(sortedArray);
  

return sortedArrayOfFive;
}

function getMostPopularBooks(books) {


// Create a new object with only two keys: 'key1' and 'key2Length'
const popularBooks = [];

for (let i = 0; i < books.length; i++) {
const popBooks = {
  name: books[i].title,
  count: books[i].borrows.length // The length of the embedded array
};
popularBooks.push(popBooks);
}
//console.log(popularBooks[]);

const alphaBooks = popularBooks.sort((a, b) => (a.count < b.count ? 1 : -1));
const alphaBooksOfFive = [];
alphaBooksOfFive.push(alphaBooks[0]);
alphaBooksOfFive.push(alphaBooks[1]);
alphaBooksOfFive.push(alphaBooks[2]);
alphaBooksOfFive.push(alphaBooks[3]);
alphaBooksOfFive.push(alphaBooks[4]);
return alphaBooksOfFive;


}

function getMostPopularAuthors(books, authors) {

const completeAuthor = [];

for (let i = 0; i < authors.length; i++) {
  
// full AUTHOR name and ID
  const newAuthors = {
  id: authors[i].id,
  name: authors[i].name.first + " " + authors[i].name.last
  }
  completeAuthor.push(newAuthors);
  
};
//console.log(completeAuthor);

// popular BORROWS per AUTHOR ID
const popularBooks = [];
for (let i = 0; i < books.length; i++) {
const popBooks = {
  id: books[i].authorId,
  count: books[i].borrows.length // The length of the embedded array
};
popularBooks.push(popBooks);
}

let combinedBowwers = popularBooks.reduce((accumulator, current) => {
  let existingEntry = accumulator.find(entry => entry.id === current.id);
  if (existingEntry) {
    existingEntry.count += current.count;
  } else {
    accumulator.push({...current});
  }
  return accumulator;
}, []);

//console.log(combinedBowwers[0]);
const newPopAuthors = []
for (let i =0; i < combinedBowwers.length; i++) {
  for (let j = 0; j < completeAuthor.length; j++) {
      if (completeAuthor[j].id === combinedBowwers[i].id) {
        const newObject = {
        name: completeAuthor[j].name,
        count: combinedBowwers[i].count
        }
        newPopAuthors.push(newObject);

      }
    }
    
}
//console.log(newPopAuthors[0]);

const alphaBooks = newPopAuthors.sort((a, b) => (a.count < b.count ? 1 : -1));
const alphaBooksOfFive = [];
alphaBooksOfFive.push(alphaBooks[0]);
alphaBooksOfFive.push(alphaBooks[1]);
alphaBooksOfFive.push(alphaBooks[2]);
alphaBooksOfFive.push(alphaBooks[3]);
alphaBooksOfFive.push(alphaBooks[4]);
return alphaBooksOfFive;


}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
