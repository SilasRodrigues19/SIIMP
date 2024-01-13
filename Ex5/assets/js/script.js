const form = document.querySelector('#form');


form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const isPalindrome = () => {
  
  let inputValue = document.querySelector('#word').value.trim();
  let output = document.querySelector('#output');

  output.innerHTML = '';
  const alphaNumericOnly = inputValue.toLowerCase().match(/[a-z]/g);

  if (!alphaNumericOnly) {
    output.innerHTML = 'Números não são permitidos, forneça uma palavra ou frase.'
    return
  }
  
  //console.log(alphaNumericOnly.join(''), alphaNumericOnly.reverse().join(''));

  const isPalindrome = alphaNumericOnly.join('') === alphaNumericOnly.reverse().join('');

  const pElement = document.createElement('p');

  output.append(pElement);

  if (isPalindrome) {
    pElement.innerHTML += `${inputValue} - <span class="is-palindrome">É um palíndromo</span>`;
    return
  } 

  pElement.innerHTML += `${inputValue} - <span class="not-palindrome">Não é um palíndromo</span>`;

}