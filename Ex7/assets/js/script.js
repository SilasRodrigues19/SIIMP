const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

let number_one = document.querySelector('#number_one');
let number_two = document.querySelector('#number_two');

const sumOfAll = (number_one, number_two) => {
  
  if (number_one === number_two) return number_one;

  if (number_one > number_two) return 0;

  let sum = 0;

  for (let i = number_one; i <= number_two; i++) {
    sum += Number(i);
  }

  return sum;

}

const handleSum = () => {

  if (number_one.value === '') {
    number_one.focus();
    return;
  }

  if (number_two.value === '') {
    number_two.focus();
    return;
  }
  
  const sum = sumOfAll(number_one.value, number_two.value);
  showMessage(`${number_one.value} + ${number_two.value} = ${sum}`);

  number_one.value = '';
  number_two.value = '';
}


const showMessage = msg => {
  const output = document.querySelector('#output');
  const pElement = document.createElement('p');
  pElement.innerHTML = msg;
  output.append(pElement);
};
