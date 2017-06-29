// https://leetcode.com/problems/longest-palindromic-substring/#/description

const longestPalindrome = string => {
  const stringLength = string.length;
  const splitString = string.split("");
  const reverseSplitString = string.split("").reverse();
  let startingIndex = 0;
  let checking = false;
  
  return splitString.reduce((longest, char, index) => {
    reverseSplitString.forEach((reverseChar, reverseIndex) => {
      if (reverseChar === char) {
        const palLength = stringLength - reverseIndex - index;
        
        const firstSubset = splitString.slice(index, index + palLength);
        const secondSubset = reverseSplitString.slice(reverseIndex, reverseIndex + palLength);
        
        if (isEqual(firstSubset, secondSubset) && firstSubset.length > longest.length) {
          longest = firstSubset;
        }
      }
    });
    return longest;
  }, "");  
};

const isEqual = (sub1, sub2) => sub1.every((char, index) => char === sub2[index]);
console.log("winner", longestPalindrome("abcddc"));


