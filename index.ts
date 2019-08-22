// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Algorithm Challenge 4</h1>`;
function addTwoDigits(n: any): number {
  const stringified = n.toString().split('');
  const values = [];
  for (let i = 0; i < stringified.length; i++) {
    values.push(parseInt(stringified[i]));
  }
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum;
}

console.log(addTwoDigits(29));