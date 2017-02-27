// alert('pow.js is here');

function powButtonClicked() {
  // do..while циклы введены, чтобы не позволить ввести некоректные исходные данные
  var x = '';
  do { 
    x = prompt('Пожалуйста введите число, которое возводится в степень (должно быть число): ', x);
  } while ( x === null || x === '' || isNaN(x) );
  
  var y = ''; 
  do {
     y = prompt('Пожалуйста введите степень, в которою возводится число (должно быть число): ', y);
  } while ( y === null || y === '' || !isNatural(y) );

  console.log('Result of pow(' + x + ', ' + y + ') is: ' + pow(x, y) );
  return false; // на всякий случай false

}

function pow(base, exp) {
  // проверки на исключительные случаи возведения в степень
  if (base != 0 && exp == 0) {
    return 1;
  } else if (base == 0 && exp == 0) {
    return 'undefined value';
  } else if (base == 0) {
    return 0;
  }

  var result = 1;
  for (var i = 1; i <= exp; i++) {
    result *= base;
  }

  return result;
}

function isNatural(num) {
  return num >= 0 && Math.floor(num) === +num;
}
