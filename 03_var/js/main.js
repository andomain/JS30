window.onload = function() {
	const inputs = document.querySelectorAll('.controls input');
	inputs.forEach(input => input.addEventListener('change', handleUpdate));
	// Future work: mod this so only triggers when clicked and moved
	inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

}

function handleUpdate() {
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}