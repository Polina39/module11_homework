let arr = [1, 3, 0, '', 8, 16];
let countEvenOddNumbers = arr => {
  let zero = 0;
  let even = 0;
  let odd = 0;
  arr.map(i => {
    if (i === 0) return zero++;
    if (typeof i !== 'number') return null;
    if (i%2 === 0) return even++;
    return odd++;
  });
  console.log(`number of null elements in array is: ${zero}`);

  console.log(`number of even elements in array is: ${even}`);
    
  console.log(`number of odd elements in array is: ${odd}`);
}
countEvenOddNumbers(arr);
