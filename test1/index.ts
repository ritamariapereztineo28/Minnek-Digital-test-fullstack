const arrTest1 = [
  "n",
  2, //%
  "&",
  "a",
  "l",
  9,
  "$",
  "q",
  47,
  "i",//$
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
const arrReverse = (arr, reverseResult = [], arr3 = []) => {
  arr.map((i) => {
    const validationArr = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(i);
    if (validationArr === false) {
      reverseResult.push(i);
    } else {
      arr3.push(i);
    }
  });
  const result = reverseResult.reverse();
  spliceFunction(result, 2, arr3[0]);
  spliceFunction(result, 6, arr3[1]);
  spliceFunction(result, 14, arr3[2]);

  console.log("El resultado esperado es : ",result)
};
arrReverse(arrTest1,[],[]);
