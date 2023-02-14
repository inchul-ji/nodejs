const { odd, even } = require('./var');
const checkNumber = require('./func') // 변수명이기 때문에 마음대로 작성 가능,


function checkStringOddOrEven(str) {
  if(str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));