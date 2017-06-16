// https://leetcode.com/problems/two-sum/#/description

const twoSum = (nums, target) => {
  return nums.reduce((added, num, numIndex) => {
    if (num <= target && added.length === 0) {
      nums.forEach((indiv, indivIndex) => {
        if (num !== indiv && num + indiv === target) {
          added.push(numIndex);
          added.push(indivIndex);
        }
      });
    }
    return added;
  }, []);  
}
console.log(twoSum([5, 33, 1, 4], 9));
