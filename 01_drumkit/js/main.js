function keyDownHandler(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	
	if(!audio) return;
	else{
		audio.currentTime = 0; // Rewind
		audio.play();
	}
	key.classList.add('play');
}

function transitionEndHandler(e){
	if(e.propertyName !== 'transform') return;
	else{
		this.classList.remove('play');
	}
}

window.onload = function(){
	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', transitionEndHandler));
}
window.addEventListener("keydown", keyDownHandler);
