const form = document.querySelector('#form');

let output = document.querySelector('#output');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const getBiggerWord = () => {
  const inputValue = document.querySelector('#word').value;
  const words = inputValue.split(' ');

  // console.log(words);

  let biggerWord = '';
  let biggerWordLength = 0;

  words.forEach((word) => {
    if (word.length > biggerWordLength) {
      biggerWord = word;
      biggerWordLength = word.length;
    }
  });

  output.textContent = biggerWord;
}