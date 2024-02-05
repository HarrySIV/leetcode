function threeSum(nums) {
  const result = [];
  if (nums.length < 3) return result;
  const newNums = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < newNums.length; i++) {
    if (newNums[i] > 0) break;
    if (i > 0 && newNums[i] === newNums[i - 1]) continue;
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = newNums[i] + newNums[start] + newNums[end];
      if (sum === 0) {
        result.push([newNums[i], newNums[start], newNums[end]]);
        start++;
        end--;
        while (start < end && newNums[start] === newNums[start - 1]) start++;
        while (start < end && newNums[end] === newNums[end + 1]) end--;
      }
      if (sum < 0) start++;
      if (sum > 0) end--;
    }
  }
  return result;
}
