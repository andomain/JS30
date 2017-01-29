const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

let voicesLoaded = false;

function populateFunction() {
	voices = this.getVoices();
	const voiceOptions = voices
		.filter(voice => voice.lang.includes('en'))
		.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
		.join('');
	voicesDropdown.innerHTML = voiceOptions;
	
	// Load the first voice from the list rather than the default
	if(!voicesLoaded){
		msg.voice = voices[0];
		voicesLoaded = true;
	}
}

function setVoice() {
	msg.voice = voices.find(voice => voice.name === this.value);
	toggle();
}

function toggle(startOver = true) {
	speechSynthesis.cancel();
	if(startOver) {
		speechSynthesis.speak(msg);
	}
}

function setOption() {
	msg[this.name] = this.value;
	toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateFunction);
voicesDropdown.addEventListener('change', setVoice);
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => {toggle.bind(false)});

options.forEach(option => option.addEventListener('change', setOption));