function findLongestWordLength(str) {
  if (str.trim() === "") {
    return 0;
  }
  const words = str.trim().split(" ");
  let longestCount = 0;
  let record = 0;
  for (const word of words) {
    if (word !== "") {
      let count = word.length;
      if (count > record) {
        record = count;
      }
    }
  }
  return record;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog"),
);
