// https://leetcode.com/problems/longest-substring-without-repeating-characters/#/description

const lengthOfLongestSubstring = s => {
  const splitString = s.split("");
  let startingIndex = 0;
  let usedChars = [];
  return splitString.reduce((longest, char, index) => {
    if (!usedChars.includes(char)) {
      usedChars.push(char);
    }
    else {
      const subsetLength = index - startingIndex;
      if (subsetLength > longest) {
        longest = subsetLength;
      }
      startingIndex = index;
      usedChars = [char];

    }
    return longest;
  }, 0)
};

console.log(lengthOfLongestSubstring("bbbbb"));
