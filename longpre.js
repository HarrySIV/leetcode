function longestCommonPrefix(strs) {
  let result = '';
  for (let i = 0; i < strs[0].length; i++) {
    const badLetter = strs.find((str) => {
      return strs[0][i] !== str[i];
    });
    if (!badLetter && badLetter !== '') {
      result += strs[0][i];
    } else break;
  }
  return result;
}

const todo3 = ['abab', 'aba', ''];
console.log(longestCommonPrefix(todo3));
