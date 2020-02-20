const scoreLibrary = require('./scoreLibrary');

const caculateSignupTimeForPreviousLibraries = currentLibraries =>
  currentLibraries.reduce(
    (totalTime, library) => totalTime + library.signupTime,
    0,
  );



const backtrackingTree = (library, libraryScore, nextLibrary, currentLibraries, endDate, scannedBooks, maximum) => {
    const signupTime = caculateSignupTimeForPreviousLibraries(currentLibraries);
    const libraryScore = scoreLibrary(
      library,
      signupTime,
      endDate,
      scannedBooks,
    ); 
    const libraryAdded = [currentLibraries, library];
    const candidates = [libraryAdded, library];

    // candidates.forEach(candidate => {
      // if candid
    // })
}
