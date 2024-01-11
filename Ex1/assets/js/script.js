const noAccentLettersRegex = /^[a-zA-Z\s]*$/;
const form = document.querySelector('#form');

let output = document.querySelector('#output');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const removeVowels = () => {
  const inputElement = document.querySelector('#palavra');
  const inputValue = inputElement.value;


  if (!noAccentLettersRegex.test(inputValue)) {
    inputElement.classList.add('error');
    output.textContent = 'Use palavras sem acentuação.';
    throw new Error('Por favor, digite apenas letras sem acento.');
  }

  inputElement.classList.remove('error');

  const newInputValue = inputValue.replace(/[aeiou]/gi, '');

  output.textContent = newInputValue;
};
