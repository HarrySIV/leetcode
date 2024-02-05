function removeDuplicates(nums) {
  const uniques = [];
  for (let i = 0; i < nums.length; i++) {
    let isUnique = true;
    for (let j = 0; j < uniques.length; j++) {
      if (nums[i] === uniques[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      uniques.push(nums[i]);
    }
  }
  nums = uniques;
  return uniques.length;
}

const todo = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const todo2 = [1, 1, 2];
removeDuplicates(todo2);
