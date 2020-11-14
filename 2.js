function getPrimeNimber(setNum) {

    if (setNum > 1000){
      console.log ('Данные неверны');
    } else if (setNum === 0){
        console.log('Это Ноль');
    } else {
        for (let i = 2; i <= Math.sqrt(setNum); i++ )  {
            if (setNum % i === 0) {
             return console.log(setNum + ' - не простое число');
            }
        }
     console.log(setNum + ' - простое число');
    }
  }
  getPrimeNimber(10);