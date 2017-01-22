const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
	const bounds = this.getBoundingClientRect();
	const coords = {
		width : `${bounds.width}px`,
		height : `${bounds.height}px`,
		left : `${bounds.left + window.scrollX}px`,
		top : `${bounds.top + window.scrollY}px`,
	}
	highlight.style.width = `${coords.width}`;
	highlight.style.height = `${coords.height}`;
	highlight.style.transform = `translate(${coords.left}, ${coords.top})`;
	// highlight.style.left = `${bounds.left}px`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));