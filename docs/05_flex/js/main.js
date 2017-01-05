window.onload = function() {
	const panels = document.querySelectorAll('.panel');
	panels.forEach(input => input.addEventListener('click', toggleOpen));
	panels.forEach(input => input.addEventListener('transitionend', toggleActive));
	panels.forEach(input => input.addEventListener('mouseenter', addHint));
	panels.forEach(input => input.addEventListener('mouseleave', removeHint));

}

function addHint(){
	if(!this.classList.contains('open')){
		this.classList.add('hint');
	} 
}

function removeHint(){
	this.classList.remove('hint'); 
}

function toggleActive(e){
	if(e.propertyName.includes('flex')){
		this.classList.toggle('open-active'); 
	}
}

function toggleOpen() {
		this.classList.remove('hint');
		this.classList.toggle('open'); 
}