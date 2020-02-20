const filename = "a.txt";
const filename2 = "a.txt";
const sortBooks = require("./sortBooks");
// sortedBooksByScore = sortBooks.sortedBooksByScore;

const array = require("fs")
  .readFileSync(filename2, "utf-8")
  .split("\n")
  .filter(Boolean);

const [totalUniqueBooks, totalLibraries, totalAvailableDays] = array[0].split(
  " "
);
const booksScores = array[1].split(" ");
let allGlobalBooks = [];

const getLibraryValue = libData => {
  // total avaliab
  return 0;
};

const getLibrariesData = arrayOfData => {
  const libraries = [];
  const currentLibrary = 0; // we need to change library after every 2 lines
  let obj = {};
  arrayOfData.forEach((line, index) => {
    if (index % 2 !== 0) {
      const books = line.split(" ");
      obj["books"] = books;
      allGlobalBooks = [...allGlobalBooks, ...books];
      obj["value"] = getLibraryValue(obj);
      libraries.push(obj);
      obj = {};
    } else {
      const [totalBooks, signupTime, perDay] = line.split(" ");
      obj["totalBooks"] = totalBooks;
      obj["signupTime"] = signupTime;
      obj["perDay"] = perDay;
    }
  });
  return libraries;
};

array.shift();
array.shift();
const librariesData = getLibrariesData(array);

console.log({
  allGlobalBooks,
  allBoksLength: allGlobalBooks.length,
  totalUniqueBooks,
  totalLibraries,
  totalAvailableDays,
  librariesData
});

var queue = 0;
var numbersOfLibrary = 0;
const sortedBooks = sortBooks.sortBooksByScore(allGlobalBooks);
const allBooks = [];
librariesData.map(lib => {
  const booksToScann = [];
  queue = queue + Number(lib.signupTime);
  var daysLeft = totalAvailableDays - queue;
  if (daysLeft <= 0) return false;
  numbersOfLibrary++;
  // here we will sort books of library
  var elemetIndexToPush = 0;
  const libSortedBooks = sortBooks.sortBooks(sortedBooks, lib.books);
  for (var i = daysLeft; i <= totalAvailableDays; i++) {
    for (var j = 0; j < lib.perDay; j++) {
      booksToScann.push(libSortedBooks[elemetIndexToPush]);
      elemetIndexToPush++;
    }
  }
  allBooks.push(booksToScann);
});
console.log({ allBooks });
