/* 
@Params <ARRAY> sortedBooksByScore the array that contain score of each bock
@Params <ARRAY> libraryBooks  the books of library
@return <ARRAY> sorted books from hight score to low 
*/
function sortBooks(sortedBooksByScore, libraryBooks) {
  const orderedBooks = [];
  sortedBooksByScore.map(book => {
    if (libraryBooks.includes(book.index)) {
      orderedBooks.push(book.index);
    }
  });
  return orderedBooks;
}

/* 
@param1 <ARRAY>  scoreOfAllBooks the input of score of each book
return [{index,score}] sorted books with their score
*/
function sortBooksByScore(scoreOfAllBooks) {
  const result = [];
  scoreOfAllBooks.map((score, index) => {
    result.push({ index, score });
  });
  result.sort((a, b) => {
    return b.score - a.score;
  });

  return result;
}

module.exports.sortBooks = sortBooks;
module.exports.sortBooksByScore = sortBooksByScore;
