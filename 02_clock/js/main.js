window.onload = function() {
	const hands = {
		'hour': document.querySelector(`.hour-hand`),
		'minute': document.querySelector(`.minute-hand`),
		'second': document.querySelector(`.second-hand`)
	}
	updateClock(hands);
	var update = window.setInterval(updateClock,1000, hands);
}

function updateClock(hands){
	const now = new Date;

	const time = {
		'seconds': now.getSeconds(),
		'minutes': now.getMinutes(),
		'hours'  : now.getHours()
	}

	hands.hour.style.transform   = `rotate(${((90 + (time.hours * 30)))}deg)`;
	hands.minute.style.transform = `rotate(${((90 + (time.minutes * 6)))}deg)`;
	hands.second.style.transform = `rotate(${((90 + (time.seconds * 6)))}deg)`;

}