  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

console.log(SpeechRecognition);

const recognition = new SpeechRecognition;
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
	let p = document.createElement('p');
	const transcript = Array.from(e.results)
		.map(result => result[0])
		.map(result => result.transcript)
		.join('');

	console.log(transcript);

	p.textContent = transcript;

	if (e.results[0].isFinal) {
		words.appendChild(p);
		p = document.createElement('p');
	}
});

recognition.addEventListener('end', recognition.start);

recognition.start();