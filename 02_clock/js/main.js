window.onload = function() {
	var now = new Date;
	var seconds = now.getSeconds();
	var minutes = now.getMinutes();
	var hours = now.getHours();

	console.log(hours + ' ' + minutes + ' ' + seconds);

	// sanitize hourse
	if(hours >= 12) hours -= 12;

	//Set hours
	const hourHand = document.querySelector(`.hour-hand`);	
	hourHand.style.transform = "rotate(" + (90 + (hours * 30)) +"deg)";
	const minuteHand = document.querySelector(`.minute-hand`);	
	minuteHand.style.transform = "rotate(" + (90 + (minutes * 6)) +"deg)";
	const secondHand = document.querySelector(`.second-hand`);
	secondHand.style.transform = "rotate(" + (90 + (seconds * 6)) +"deg)";

}