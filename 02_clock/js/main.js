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

	updateHand(hands.hour, time.hours, 30);
	updateHand(hands.minute, time.minutes, 6);
	updateHand(hands.second, time.seconds, 6);	
}

function resetTransition(hand,limit){
	hand.style.transition = limit ? 'inherit' : 'none';
}

function updateHand(hand, time, interval) {
	resetTransition(hand, time);
	hand.style.transform = `rotate(${((90 + (time * interval)))}deg)`;
}