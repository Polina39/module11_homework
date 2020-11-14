function getNum(num1){
  
  return function getNum2 (num2){
    console.log (num1 +num2);
  }
}
const nums = getNum(2);
nums(3);



