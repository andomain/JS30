const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

const walk = 100; // 100px

function shadow(e){
  const { offsetWidth: width, offsetHeight: height } = hero;
  let {offsetX: x, offsetY: y } = e;

  // If target is not the hero container then add the offset of the h1 element
  if(this !== e.target ){
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round(((x / width) * walk) - (walk / 2));
  const yWalk = Math.round(((y / height) * walk) - (walk / 2));

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,0,.7),
                           ${-xWalk}px ${yWalk}px 0 rgba(0,255,0,.7),
                           ${xWalk}px ${-yWalk}px 0 rgba(0,0,255,.7),
                           ${-xWalk}px ${-yWalk}px 0 rgba(255,0,255,.7)
                           `;
}

hero.addEventListener('mousemove', shadow);