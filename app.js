let count = 0;

const countEl = document.getElementById('count');
const historyList = document.getElementById('history-list');

function updateDisplay() {
  countEl.textContent = count;
}

function addToHistory(message) {
  const li = document.createElement('li');
  li.textContent = message;
  historyList.prepend(li);
}

document.getElementById('increment').addEventListener('click', () => {
  count++;
  updateDisplay();
  addToHistory(`Added 1 → count is now ${count}`);
});

document.getElementById('decrement').addEventListener('click', () => {
  count--;
  updateDisplay();
  addToHistory(`Subtracted 1 → count is now ${count}`);
});

document.getElementById('reset').addEventListener('click', () => {
  count = 0;
  updateDisplay();
  historyList.innerHTML = '';
  addToHistory('Reset counter to 0');
});
