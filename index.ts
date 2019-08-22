// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Algorithm Challenge 4</h1>`;
function addTwoDigits(n: any): number {
  const values = [];
  const j = n.toString();
  const v = j.split('');
  for (let k = 0; k < v.length; k++) {
    values.push(parseInt(v[k]));
  }
  console.log("object", values);
}

console.log(addTwoDigits(294));