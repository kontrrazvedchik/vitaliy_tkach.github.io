//alert('script connected');


var test = {
	head : "Тест по программированию",
	q : ["Вопрос №1", 
		"Вопрос №2",
		"Вопрос №3"
		],
	answers: [
			["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
			["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
			["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"]
		],
	submit: "Проверить мои результаты",

	renderIn : function(ctx) {
		var mainDiv = document.createElement('div');
		mainDiv.classList.add('main');
		mainDiv.style.width = '600px'; 
		mainDiv.style.margin = '100px auto'; 
		mainDiv.style.border =  '1px solid black';

		var header = this.renderHead();
		var content = this.renderContent();
		var footer = this.renderSubmit();

		mainDiv.appendChild(header);
		var form = document.createElement('form')
		form.action ='#';
		form.method = 'GET';
		form.appendChild(content);	
		form.appendChild(footer);
		mainDiv.appendChild(form);

		ctx.appendChild(mainDiv);
		console.log(ctx, mainDiv)
	},

	renderHead : function() {
		var h = document.createElement('h2');
		h.innerHTML = this.head;
		h.classList.add('header');
		h.style.textAlign = 'center';
		return h;
	},

	renderContent : function() {
		var ol = document.createElement('ol');
		for (var i = 0; i < this.q.length; i++) {
			var li = document.createElement('li');
			li.innerHTML = '<h4>' + this.q[i] + '</h4>';
			for (var j = 0; j < this.answers[i].length; j++) { 
				var alabel = document.createElement('label');
				var ainput = document.createElement('input');
				alabel.style.display = 'block';
				ainput.type = 'checkbox';
				ainput.name = 'qN' + i + 'answer' + j;
				ainput.style.marginRight = '5px';
				alabel.appendChild(ainput);
				alabel.innerHTML += this.answers[i][j];
				li.appendChild(alabel);
				}
			ol.appendChild(li);			
		}
		return ol;
	},

	// <button type="submit" class="btn btn-default">Проверить мои результаты</button>
	renderSubmit : function() {
		var f = document.createElement('input');
		f.setAttribute('type', 'submit');
		f.value = this.submit;
		//f.setAttribute('value', this.submit);
		f.classList.add('btn');
		f.classList.add('btn-default');
		f.style.display = 'block';
		f.style.margin = '10px auto';
		return f;	
	}

}

test.renderIn(document.querySelector('body'));