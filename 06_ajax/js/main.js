const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// Fetch the JSON endpoint
//  - Returns a promise
//  - Then convert blob to JSON data
//  - Returns a promise
//  - Spread JSON data into cities array
fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data));

function findMatches(wordToMatch, cities){
	return cities.filter(place => {
		// Figure out if city/state matches what was searched
		const regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	})
}

function displayMatches(){
	const matches = findMatches(this.value, cities);
	const html = matches.map(item => {
		const regex = new RegExp(this.value,'gi');
		const cityName = item.city.replace(regex,`<span class='hl'>${this.value}</span>`);
		const stateName = item.state.replace(regex,`<span class='hl'>${this.value}</span>`);

		return `
		<li>
			<span class="name">${cityName}, ${stateName}</span>
			<span class="population">${numberWithCommas(item.population)}</span>
		</li>
		`;
	}).join('');

	searchSuggestions.innerHTML = html;

}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const searchInput = document.querySelector('.search');
const searchSuggestions = document.querySelector('.suggestions');

// console.log(searchInput);
searchInput.addEventListener('change', displayMatches ); 
searchInput.addEventListener('keyup', displayMatches ); 