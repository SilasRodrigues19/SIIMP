const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const isPalindrome = () => {
  const inputValue = document.querySelector('#word').value.trim();
  const output = document.querySelector('#output');

  output.innerHTML = '';
  const alphaNumericOnly = inputValue.toLowerCase().match(/[a-z]/g);

  if (!alphaNumericOnly) {
    output.innerHTML =
      'Números não são permitidos, forneça uma palavra ou frase.';
    return;
  }

  const isPalindrome = checkPalindrome(alphaNumericOnly);

  if (isPalindrome) {
    showMessage(
      `${inputValue} - <span class="is-palindrome">É um palíndromo</span>`
    );
    return;
  }

  for (let i = 0; i < alphaNumericOnly.length; i++) {
    const modifiedArray = alphaNumericOnly.filter((_, index) => index !== i);

    console.log(modifiedArray);

    // console.log(`${modifiedArray.join('')} Caracter removido: ${alphaNumericOnly[i]}`);

    if (checkPalindrome(modifiedArray)) {
      // console.log(`${modifiedArray.join('')} Caracter removido: ${alphaNumericOnly[i]}`);
      showMessage(
        `${inputValue} - <span class="can-become-palindrome">Pode se tornar um palíndromo</span>`
      );
      return;
    }
  }


  showMessage(
    `${inputValue} - <span class="not-palindrome">Não é um palíndromo</span>`
  );
};

const checkPalindrome = array => array.join('') === array.slice().reverse().join('');

const showMessage = msg => {
  const output = document.querySelector('#output');
  const pElement = document.createElement('p');
  pElement.innerHTML = msg;
  output.append(pElement);
};
