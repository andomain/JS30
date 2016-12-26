//  Char Codes
// A : 97
// S : 115
// D : 100
// F : 102
// G : 103
// H : 104
// J : 105
// K : 106
// L : 107

window.addEventListener("keypress", keyPressHandler, false);
window.addEventListener("keyup", keyUpHandler, false);

function keyUpHandler(e){
	var playing = document.getElementsByClassName('play');
    var keyList = Array.prototype.slice.call(playing);

	keyList.forEach(function(el){
		el.classList.remove('play');
	})
}

function keyPressHandler(e){
	switch(e.charCode) {
		case 97 :
			document.getElementById('k1').classList.add('play');
			playSound('assets/clap.wav');
			break;
		case 115 :
			document.getElementById('k2').classList.add('play');
			playSound('assets/hihat.wav');
			break;
		case 100 :
			document.getElementById('k3').classList.add('play');
			playSound('assets/kick.wav');
			break;
		case 102 :
			document.getElementById('k4').classList.add('play');
			playSound('assets/openhat.wav');
			break;
		case 103 :
			document.getElementById('k5').classList.add('play');
			playSound('assets/boom.wav');
			break;
		case 104 :
			document.getElementById('k6').classList.add('play');
			playSound('assets/ride.wav');
			break;
		case 106 :
			document.getElementById('k7').classList.add('play');
			playSound('assets/snare.wav');
			break;
		case 107 :
			document.getElementById('k8').classList.add('play');
			playSound('assets/tom.wav');
			break;
		case 108 :
			document.getElementById('k9').classList.add('play');
			playSound('assets/tink.wav');
			break;
		default :
			break;
	}
}

function playSound(sample){
	var sound = new Audio(sample);
	sound.play();
}
