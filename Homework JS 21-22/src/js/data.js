(() => {
		let testData = { 
		logo: 'dist/img/logo.png',
		mainTitle: 'ТЕСТ',
		questions: [
		{
			title: 'Вопрос №1',
			options: [
				'Вариант ответа №1.1',
				'Вариант ответа №1.2 (правильный)',
				'Вариант ответа №1.3 (правильный)'
			],
			trueValue: [1,2]
		},
		{
			title: 'Вопрос №2',
			options: [
				'Вариант ответа №2.1',
				'Вариант ответа №2.2 (правильный)',
				'Вариант ответа №2.3'
			],
			trueValue: [1]
		},
		{
			title: 'Вопрос №3',
			options: [
				'Вариант ответа №3.1',
				'Вариант ответа №3.2 (правильный)',
				'Вариант ответа №3.3',
				'Вариант ответа №3.4 (правильный)',
				'Вариант ответа №3.5'				
			],
			trueValue: [1, 3]
		},
		{
			title: 'Вопрос №4',
			options: [
				'Вариант ответа №4.1',
				'Вариант ответа №4.2 (правильный)',	
				'Вариант ответа №4.3',
				'Вариант ответа №4.4'
			],
			trueValue: [1]
		},
		{
			title: 'Вопрос №5',
			options: [
				'Вариант ответа №5.1',
				'Вариант ответа №5.2 (правильный)',	
				'Вариант ответа №5.3',
				'Вариант ответа №5.4 (правильный)',	
				'Вариант ответа №5.5 (правильный)'	
			],
			trueValue: [1, 3, 4]
		}],
		submit: 'Проверить результат'
	}

	if (typeof(Storage) !== "undefined") {
		if (!localStorage.test) {
			localStorage.setItem("test", JSON.stringify(testData));
		}
	} else {
		alert ("The browser doesn't support local storage!");
	}
})();