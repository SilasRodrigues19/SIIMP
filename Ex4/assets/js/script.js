const form = document.querySelector('#form');

let output = document.querySelector('#output');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});


/**
 * 
  * @param {number} num
  * @returns {string}
  * if the number is divisible by 3 and 5, return 'HELLO WORLD'
  * if the number is divisible by 3, return 'HELLO'
  * if the number is divisible by 5, return 'WORLD'

 */

const verifyIfIsDivisibleBy = num => {

  if (num % 3 === 0 && num % 5 === 0) {
    return 'HELLO WORLD';
  } else if (num % 3 === 0) {
    return 'HELLO';
  } else if (num % 5 === 0) {
    return 'WORLD';
  } else {
    return num;
  }
  
}


const generateNumberList = () => {
  let inputValue = document.querySelector('#digits').value;
  let listResult = document.querySelector('.list_result');

  if (!isNaN(inputValue) && inputValue > 0) {

    listResult.innerHTML = '';

    const numbers = Array.from({ length: inputValue }, (_, index) => {
      // console.log(index + 1);
      return index + 1;
    });

    numbers.forEach((number) => {
      let li = document.createElement('li');

      // console.log(verifyIfIsDivisibleBy(number));

      li.appendChild(document.createTextNode(verifyIfIsDivisibleBy(number)));
      listResult.appendChild(li);
    });
  }
};
