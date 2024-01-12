Exercício 3

Crie uma página em HTML e PHP ou
JAVASCRIPT que receba um valor numérico
maior do que zero e retorne a soma de todos
os dígitos, como no exemplo ao lado:


[![Preview][project-screenshot]][project-link]


Explicação:

Criei uma função chamada `getSumOfDigits()` que será executada durante o evento de click
do botão `Confirmar`.

Fluxo da função:

Eu começo criando uma variável chamada `inputValue` para guardar o valor numérico digitado pelo usuário.

Em seguida faço uma validação que irá testar se `inputValue` é negativo, vazio ou `null`, caso esteja em uma dessas 3 condições, será exibida uma mensagem de erro e o código para a execução.

Posteriormente vem a parte da lógica do código, onde eu declaro uma variável chamada `sum` inicializada em 0 porque dentro do for eu vou concatenar os valores e essa variável será preenchida com o resultado da soma.

```js

let sum = 0;
  for (let i = 0; i < inputValue.length; i++) {
    sum += parseInt(inputValue[i]);
  }
  output.innerHTML = sum;

/*

 Nesse for eu passo os 3 parâmetros necessários:
 i (increment) inicializando em 0
 i++ para ir incrementando o valor de i até ele ser maior que inputValue.length que ai para a execução do for (i < inputValue.length)

 A variável sum dentro do for vai ser somada com o próximo valor da interação do loop, se o valor de InputValue for 456, o sum vai adicionar 4 na primeira interação do loop, adicionar 5 na segunda interação e adicionar 6 na terceira interação, resultando em 15 que é a soma de todos

*/


```

Por fim, eu tenho um `<span>` com `id` output que eu atribuo ao `textContent` dele, o valor que eu recebi na variável `sum`




<!-- MD Links & Images -->

[project-screenshot]: ./public/preview.png
[project-link]: https://teste-siimp.vercel.app/Ex2/exercicio_2.html