function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxesContainer.innerHTML = '';
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  document.getElementById('boxes').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#controls input[type="number"]');
  const createBtn = document.querySelector('button[data-create]');
  const destroyBtn = document.querySelector('button[data-destroy]');

  createBtn.addEventListener('click', () => {
    const inputVal = input.value;
    const amount = parseInt(inputVal, 10);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
    } else {
      alert('Please enter a number between 1 and 100.');
    }

    input.value = ''; 
  });

  destroyBtn.addEventListener('click', destroyBoxes);
});
