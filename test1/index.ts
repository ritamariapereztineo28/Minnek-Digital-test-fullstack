const arr = [
  "n",
  2, //%
  "&",
  "a",
  "l",
  9,
  "$",
  "q",
  47,
  "i", //$
  "a",
  "j",
  "b",
  "z", //&
  "%",
  8,
];

const spliceFunction = (result, addPosition, value) => {
  result.splice(addPosition, 0, value);
};
const arrReverse = (arr, inverseArray = [], specialCharactersArr = []) => {
  arr.map((i) => {
    const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(i);
    if (specialCharacters === false) {
      inverseArray.push(i);
    } else {
      specialCharactersArr.push(i);
    }
  });
  const result = inverseArray.reverse();
  spliceFunction(result, 2, specialCharactersArr[0]);
  spliceFunction(result, 6, specialCharactersArr[1]);
  spliceFunction(result, 14, specialCharactersArr[2]);

  console.log("El resultado esperado es : ", result);
};
arrReverse(arr, [], []);
