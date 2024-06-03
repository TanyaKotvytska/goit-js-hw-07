function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

  document.querySelector('button[data-create]').addEventListener('click', function() {
  const amountInput = document.querySelector('input[type="number"]');
  const amount = parseInt(amountInput.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    amountInput.value = ''; 
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

document.querySelector('button[data-destroy]').addEventListener('click', destroyBoxes);