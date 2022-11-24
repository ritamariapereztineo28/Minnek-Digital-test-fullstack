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
const arrReverse = (
  arr,
  inverseArray = [],
  positionSpecialCharactersArr = [],
  specialCharactersArr = []
) => {
  arr.map((i, key) => {
    const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(i);
    if (specialCharacters === false) {
      inverseArray.push(i);
    } else {
      positionSpecialCharactersArr.push(key);
      specialCharactersArr.push(i);
    }
  });
  const result = inverseArray.reverse();
  spliceFunction(result, positionSpecialCharactersArr[0], specialCharactersArr[0]);
  spliceFunction(result, positionSpecialCharactersArr[1], specialCharactersArr[1]);
  spliceFunction(result, positionSpecialCharactersArr[2], specialCharactersArr[2]);
  console.log("El resultado esperado es : ", result);

};
arrReverse(arr, [], [], []);
