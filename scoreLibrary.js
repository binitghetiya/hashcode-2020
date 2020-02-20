const scoreLibrary = (library, signupDate, endDate, scannedBooks) => {
  const { books, signupTime, capacity } = library;
  // day is the number of days lost in sign up for other libraries

  // no. of days for scanning, (endDate - signupDate) - signup time
  const daysForScanning = (endDate - signupDate) - signupTime;
  if (daysForScanning < 1) return;
  let points = 0;
  let bookIndex = 0
  for (var day=0; day < daysForScanning; day++) {
    // calculate cost of scanning books for this number of days

    books.forEach((book, index) => {
      if (index < bookIndex + capacity) {
        if (!scannedBooks(book)) {
          scannedBooks[book] = true;
          points += book;
        }
      }
    })
  }

  return points;
};

module.exports = scoreLibrary;
