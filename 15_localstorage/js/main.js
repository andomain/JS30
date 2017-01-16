const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const buttons = document.querySelector('.buttons');
const clearButton = buttons.querySelector('[name="clearAll"]');
const checkButton = buttons.querySelector('[name="checkAll"]');

function addItem(e){
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  }
  this.reset();

  items.push(item);
  updatePage();
}

function populateList(plates = [], platesList){
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for"item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e){
  if(!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;

  items[index].done = !items[index].done;
  updatePage();
}

function updateAll(){
  const boolVal = this.dataset.effect == 'check';

  items.forEach(item => item.done = boolVal );
  updatePage();
}

const updatePage = () => {
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);    
}

populateList(items, itemsList);

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

clearButton.addEventListener('click', updateAll);
checkButton.addEventListener('click', updateAll);
