let arr = [1, 3, 0, '', 8, 16, NaN, null, true, false, '15', undefined];
let countEvenOddNumbers = arr => {
  let zero = 0, even = 0, odd= 0;
  arr.forEach(i => {
    if (typeof i === 'number' && !isNaN(i)) {
      if (i === 0) {
        zero++;
      } else if (i%2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
  });
  console.log(`number of null elements in array is: ${zero}`);

  console.log(`number of even elements in array is: ${even}`);
    
  console.log(`number of odd elements in array is: ${odd}`);
}
countEvenOddNumbers(arr);

// Есть несколько замечаний к решению:
// 1. Не хватает проверки на NaN. Особенность этого значения в том, что оно имеет тип number, при том, что не является числом. Поэтому только проверки на typeof недостаточно.
// 2. Использование метода map для обычного подсчёта значений - избыточно. Метод map предназначен для изменения элементов массива и создания на его основе нового массива. Для простого перебора лучше использовать обычный цикл или метод forEach.
// 3. При объявлении нескольких переменных сразу можно использовать более краткую форму записи
// Выше все перечисленное исправила