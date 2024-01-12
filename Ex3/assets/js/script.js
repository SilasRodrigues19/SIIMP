const form = document.querySelector('#form');

let output = document.querySelector('#output');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const getSumOfDigits = () => {
  let inputValue = document.querySelector('#digits').value;

  if (inputValue < 0 || inputValue === '' || inputValue === null) {
    output.textContent = 'Insira números positivos maiores que zero';
    return;
  }

  let sum = 0;
  for (let i = 0; i < inputValue.length; i++) {
    console.log(i);
    sum += parseInt(inputValue[i]);
  }
  output.textContent = sum;
}