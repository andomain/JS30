const divs = document.querySelectorAll('div');

function logText(e){
	console.log(this.classList.value);
	// Stop event bubbling up
	// e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, { 
	capture: false,
	once: true 
}));

// Event capture propagates DOWN the heirarchy.
// Event then bubbles UP

// Event listener options 
//	capture : dispatch the event on the capture, i.e. propagating down
//  once : event handler unbinds itself once fired