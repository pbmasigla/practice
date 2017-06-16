// https://leetcode.com/problems/longest-valid-parentheses/#/description

const longestValidParen = s => {
	const stringArray = s.split("");
  
  let checking = false;
  let startingIndex = 0;
  
  return stringArray.reduce((longest, char, index) => {
  	const nextChar = stringArray[index + 1];
  	if (nextChar && char !== nextChar) {
    	if (char === "(" && !checking) {
      	startingIndex = index;
        checking = true;
      }
    }
    else if (checking) {
			checking = false;
     	const length = index - startingIndex + 1;
      if (length > longest) {
      	longest = length;
      }
		}
    return longest;
  }, 0);
};

console.log(longestValidParen("()"));
