const filename2 = "d_tough_choices.txt";
const sortBooks = require("./sortBooks");
// sortedBooksByScore = sortBooks.sortedBooksByScore;

const array = require("fs")
  .readFileSync(filename2, "utf-8")
  .split("\n")
  .filter(Boolean);

console.log("read done");
const [, , totalAvailableDays] = array[0].split(" ");
let allGlobalBooks = [];
console.log("split DONE");
const getLibraryValue = libData => {
  // total avaliab
  return 0;
};

const getLibrariesData = arrayOfData => {
  const libraries = [];
  const currentLibrary = 0; // we need to change library after every 2 lines
  let obj = {};
  arrayOfData.forEach((line, index) => {
    console.log(index);
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

var queue = 0;
var numbersOfLibrary = 0;
const sortedBooks = sortBooks.sortBooksByScore(allGlobalBooks);
const allBooks = [];
librariesData.map(lib => {
  const booksToScann = [];
  queue = queue + Number(lib.signupTime);
  console.log(queue);
  var daysLeft = totalAvailableDays - queue;
  if (daysLeft <= 0) return false;
  numbersOfLibrary++;
  // here we will sort books of library
  var elemetIndexToPush = 0;
  const libSortedBooks = sortBooks.sortBooks(sortedBooks, lib.books);
  for (var i = daysLeft; i <= totalAvailableDays; i++) {
    for (var j = 0; j < lib.perDay; j++) {
      if (libSortedBooks[elemetIndexToPush]) {
        booksToScann.push(libSortedBooks[elemetIndexToPush]);
        elemetIndexToPush++;
      }
    }
  }
  allBooks.push(booksToScann);
});
var result = numbersOfLibrary + "\n";

for (var x = 0; x < numbersOfLibrary; x++) {
  result = result + x + " " + allBooks[x].length + "\n";
  console.log(x);
  allBooks[x].map(book => {
    result = result + book + " ";
  });
  result = result + "\n";
}

try {
  require("fs").writeFileSync("result_c.txt", result);
  //file written successfully
} catch (err) {
  console.error(err);
}
