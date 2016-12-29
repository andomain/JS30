function keyDownHandler(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	
	if(!audio) return;
	else{
		audio.currentTime = 0; // Rewind
		audio.play();
	}
	// Fix issue where if key is held down the play class sticks
	if(!hasClass(key, 'play')){
		key.classList.add('play');
	}
}

function transitionEndHandler(e){
	if(e.propertyName !== 'transform') return;
	else{
		this.classList.remove('play');
	}
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

window.onload = function(){
	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', transitionEndHandler));
}

window.addEventListener("keydown", keyDownHandler);