// https://leetcode.com/problems/median-of-two-sorted-arrays/#/description

const findMedianSortedArrays = (nums1, nums2) => {
  const length1 = nums1.length;
  const length2 = nums2.length;
  
  let median1;
  let median2;
  
  if (length1 % 2 === 0) {
    const lowerLimit = Math.floor(length1 / 2) - 1;
    median1 = (nums1[lowerLimit] + nums1[lowerLimit + 1]) / 2;
  }
  else {
    median1 = nums1[Math.floor((length1 / 2) - 1)]
  }
  
  if (length2 % 2 === 0) {
    const lowerLimit = Math.floor(length2 / 2) - 1;
    median2 = (nums2[lowerLimit] + nums2[lowerLimit + 1]) / 2;
  }
  else {
    median2 = nums2[Math.floor(length2 / 2)]
  }
  
  return (median1 + median2) / 2;
};

// nums1 = [1, 2]
// nums2 = [3, 4]

console.log(findMedianSortedArrays([1, 3], [2, 3, 4]));
