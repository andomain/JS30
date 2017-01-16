const bands = ['The Plot in You',
                'The Devil Wears Prada',
                'Pierce the Veil',
                'Norma Jean',
                'The Bled',
                'Say Anything',
                'The Midway State',
                'We Came as Romans',
                'Counterparts',
                'Oh, Sleeper',
                'A Skylit Drive',
                'Anywhere But Here',
                'An Old Dog'];

//  MY SOLUTION
// function stripArticle(bandName){
//   const words = bandName.split(' ');
//   const firstWord = words[0];
//   if (articles.indexOf(firstWord) > -1){
//     bandName = words.slice(1).join(' ');
//   } 
//   return bandName
// }

// Wes' solution
function stripArticle(bandName){
  return bandName.replace(/^(a|the|an)\s+/i, '').trim();
}

const compareFunction = (a,b) => (stripArticle(a) < stripArticle(b) ? -1 : 1);

document.querySelector('#bands').innerHTML = bands.sort(compareFunction).map((band) => {
  return `
    <li>
      <a href="#">${band}</a>
    </li>`;
}).join('');
