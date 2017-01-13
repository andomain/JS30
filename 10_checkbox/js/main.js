const checkBoxes = [...document.querySelectorAll('.inbox input[type="checkbox"]')];

let prevIndex = undefined;

function checkHandler(e) {
	const index = checkBoxes.indexOf(this);

	if(e.shiftKey && this.checked) checkAll(index, prevIndex);
	
	if(this.checked) prevIndex = index;
	else prevIndex = undefined;
}

const checkAll = (a,b) => {
	if(a && b === undefined) return;
	[min, max] = [Math.min(a,b), Math.max(a,b)];
	checkBoxes.slice(min,max+1).forEach(box => box.checked = true);
}

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', checkHandler));