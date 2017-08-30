// https://leetcode.com/problems/reverse-integer/#/description

const reverse = num => {
  let multiplier = 1;
  let numString = `${num}`;
  let reversedString = "";
  
  if (num < 0) {
    multiplier = -1;
    numString = numString.slice(1, numString.length);
  }
  
  for (let i = 0; i < numString.length; i++) {
    const char = numString[i];
    
    if (char === "0" && reversedString.length > 0 || char !== "0") {
      reversedString = `${char}${reversedString}`;
    }
  }
  
  return multiplier * parseInt(reversedString);
};

console.log(reverse(-1005));
