function romanToInt(s) {
  const romanToNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const romanArray = [...s];
  let result = 0;
  function reduceRomanNumeral() {
    if (romanToNum[romanArray[0]] < romanToNum[romanArray[1]]) {
      result += romanToNum[romanArray[1]] - romanToNum[romanArray[0]];
      romanArray.concat(romanArray.splice(0, 2));
    } else {
      result += romanToNum[romanArray[0]];
      romanArray.shift();
    }
    if (romanArray.length > 0) {
      reduceRomanNumeral();
    }
  }
  reduceRomanNumeral();
  return result;
}

const todo1 = 'MCMXCIV';

console.log(romanToInt(todo1));
