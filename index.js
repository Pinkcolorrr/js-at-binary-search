// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function binarySearch(list, wantedValue) {
  if (!list?.length) {
    return null;
  }

  let min = 0;
  let max = list.length - 1;

  while (min <= max) {
    const center = Math.floor((min + max) / 2);
    const guessValue = list[center];

    if (guessValue === wantedValue) {
      return center;
    }

    if (guessValue < wantedValue) {
      min = center + 1;
    }

    if (guessValue > wantedValue) {
      max = center - 1;
    }
  }

  return null;
}

const list = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearch(list, 5));
