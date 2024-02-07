async function addTwoPromises(promise1, promise2) {
  return promise1.then((value1) => promise2.then((value2) => value1 + value2));
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then((value) => console.log(value));
