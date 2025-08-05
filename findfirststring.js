//Given a string, find the first character that does not repeat anywhere in the string. Return None if all characters repeat.



//Input: "Hello"

//Output: "H"
//Input: "Swiss"
//Output: "w"

function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeatingChar("Hello"));
console.log(firstNonRepeatingChar("Swiss")); 
