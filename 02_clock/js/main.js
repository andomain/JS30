window.onload = function() {
	updateClock();

	var update = window.setInterval(updateClock,1000);

}

function updateClock(){
	const now = new Date;

	const time = {
		'seconds': now.getSeconds(),
		'minutes': now.getMinutes(),
		'hours'  : now.getHours()
	}

	//Set hours
	const hourHand = document.querySelector(`.hour-hand`);	
	hourHand.style.transform = "rotate(" + (90 + (time.hours * 30)) +"deg)";
	const minuteHand = document.querySelector(`.minute-hand`);	
	minuteHand.style.transform = "rotate(" + (90 + (time.minutes * 6)) +"deg)";
	const secondHand = document.querySelector(`.second-hand`);
	secondHand.style.transform = "rotate(" + (90 + (time.seconds * 6)) +"deg)";

}