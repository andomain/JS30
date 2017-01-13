let pressed = [];
const secretCode = 'hello';

window.addEventListener('keyup', (e) => {
	pressed.push(e.key);
	pressed.splice(-secretCode.length - 1,pressed.length -secretCode.length);
	if(pressed.join('').includes(secretCode) ){
		for(var i = 0; i < 10; i++){
			cornify_add();
		}
	}
});