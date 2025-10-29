/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    const left = nums[i];
    const right = nums[j];

    if (left === 0 && right !== 0) {
      nums[j] = left;
      nums[i] = right;
      i += 1;
      j += 1;
    } else if (left === 0 && right === 0) {
      j += 1;
    } else if (left !== 0 && right === 0) {
      i += 1;
    } else {
      i += 1;
      j += 1;
    }
  }
};
