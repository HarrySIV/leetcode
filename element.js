function removeElement(nums, val) {
  if (nums.length < 2) {
    if (nums[0] === val) {
      return 0;
    } else {
      return 1;
    }
  }
  const newNums = nums.sort((a, b) => {
    if (a !== val) {
      return -1;
    }
    if (a === val) {
      return 1;
    }
  });
  let k = 0;
  let i = 0;
  while (newNums[i] !== val && i < newNums.length) {
    k++;
    i++;
  }
  return k;
}

const todo = [[3, 2, 2, 3], 3];
console.log(removeElement(...todo));
