// Your code here.
function countBs(string) {
  return countChar(string, 'B');
}

function countChar(string, letter) {
  let count = 0;

  for (i = 0; i < string.length; i++) {
    if (string[i] == letter) {
    	count++;
    }
  }

  return count;
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
