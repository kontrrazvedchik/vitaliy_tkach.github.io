//alert('names.js is here');

var names = ['', '', '', '', ''];

function namesButtonClicked() {  
  for (var i = 0; i < 5; i++) {
    names[i] = prompt('Введите ' + i + ' имя ', '');
  }
}

function enterButtonClicked() {
  userName = prompt('Как Вас зовут?', '');

  for (var i = 0; i < 5; i++) {
    if (names[i] == userName) {
			alert(userName + ' Вы успешно вошли!');	
      return;    
    }
  }

  alert('ERROR!' + '\n' +
        'Извените, Введенное имя пользователя не существует!');
  return;
}

