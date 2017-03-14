function StopWatch() {
	var self = this;
	self.counter = 0; // miliseconds
	self.startTime = 0;
	self.timerId = 0;
	self.pausedPeriod = 0;
	self.lastPauseTime = 0;
	
	self.start = function() { // start button handler
		if (tabloStart.innerHTML == 'Start') {
			self.lastPauseTime = self.startTime = self.curTime();
			self.pausedPeriod = 0;
		}
		self.pausedPeriod = self.pausedPeriod + self.curTime() - self.lastPauseTime;
		tabloStart.innerHTML = "Pause";
		
		timerId = setInterval(self.updCounter, 30);
		
		tabloStart.removeEventListener('click', self.start);
		tabloStart.addEventListener('click', self.pause);
	};
	
	self.pause = function() { // start button handler when it has innerHTML 'Pause'
		clearInterval(timerId);
		self.lastPauseTime = self.curTime();
		tabloStart.innerHTML = 'Cont..';
		tabloStart.removeEventListener('click', self.pause);
		tabloStart.addEventListener('click', self.start);
	}

	self.clear = function() { 
		clearInterval(timerId);
		self.pausedPeriod = 0;
		tabloStart.innerHTML = 'Start';
		tabloSec.innerHTML = '00:00:00';
		tabloMili.innerHTML = '0';
		tabloStart.removeEventListener('click', self.pause);
		tabloStart.addEventListener('click', self.start);
	};
	
	self.updateTablo = function(c) {
		var hours = Math.floor( ( c / 3600000 ) % 24 );
			hours = hours < 10 ? "0" + hours : hours;
		var mins = Math.floor( ( c / 60000 ) % 60 );
			mins = mins < 10 ? "0" + mins : mins;
		var secs = Math.floor( ( c / 1000 ) % 60 );
			secs = secs < 10 ? "0" + secs : secs;
		var ms = c % 1000;

		tabloSec.innerHTML = hours + ":" + mins  + ":" + secs;
		tabloMili.innerHTML = ms;
	}

	self.updCounter = function() { // setInterval handler
		self.counter = self.curTime() - self.startTime - self.pausedPeriod;
		self.updateTablo(self.counter);
	}

	self.curTime = function() {
		var curDate = new Date(); 
		return (curDate.getHours()*60*60 + curDate.getMinutes()*60 + curDate.getSeconds())*1000 + curDate.getMilliseconds();
	}
}

var sw = new StopWatch();

var tabloSec = document.querySelector('.tablo__sec');
var tabloMili = document.querySelector('.tablo__ms');
var tabloStart = document.querySelector('.tablo__start-pause');
var tabloClear = document.querySelector('.tablo__clear');

tabloStart.addEventListener('click', sw.start);
tabloClear.addEventListener('click', sw.clear);