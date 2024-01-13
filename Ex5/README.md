Exercício 5

Crie uma página em HTML e PHP ou
JAVASCRIPT que receba um valor de uma
string e verifique se ela é um palíndromo.
Como no exemplo ao lado.
Retornar a frase em vermelho caso a palavra
e/ou frase não for um palíndromo.
Caso contrário, retornar a frase em azul.


[![Preview][project-screenshot]][project-link]


Explicação:


Criei uma função chamada `isPalindrome()` que será executada durante o evento de click
do botão `Confirmar`.

Fluxo da função:

Eu começo criando uma variável chamada `inputValue` para guardar o valor da string digitada pelo usuário, sem nenhum espaçamento e outra variável chamada `output` que posteriormente eu utilizo para renderizar os elementos dentro dela com `append`.


Em seguida eu crio uma constante chamada `alphaNumericOnly` onde eu pego o valor de `inputValue` transformo em caracteres minúsculos com `toLowerCase()` e em seguida uso o método `match` passando um regEx para garantir que seja uma palavra com caracteres de A-Z

Logo em seguida faço uma validação bem simples com a negação de `alphaNumericOnly` para exibir uma mensagem caso o usuário digite números ao invés de letras.

Após o if acontece a parte lógica que resolve o exercício, eu crio uma constante chamada `isPalindrome` que vai me retornar `true` ou `false`.

Eu pego o valor recebido por `alphaNumericOnly` e uso o método `join('')` com aspas simples, pra transformar a frase ou palavra em um array, com cada caractere em uma posição. E uso o operador `===` para comparar com o mesmo conteúdo, porém utilizado o método `reverse()` antes do `join('')` assim eu garanto que serão 2 arrays com as posições inversas. Se o valor invertido for igual, vai retornar `true` e se for diferente retornará `false`.

Exemplo:

```js
// Input: silas

  const isPalindrome = alphaNumericOnly.join('') === alphaNumericOnly.reverse().join('');
  
  alphaNumericOnly.join('')           // output: ['s', 'i', 'l', 'a', 's']
  alphaNumericOnly.reverse().join('') // output: ['s', 'a', 'l', 'i', 's']

```

Nesse caso ele me retornaria `false`, porque não é um palíndromo.

Em seguida eu crio uma variável chamada `pElement` que é um <p> e com o método `append` eu insiro esse <p> dentro da <div id="output"></div>

Posteriormente eu faço um if para verificar se `isPalindrome` retornou `true` ou `false`, dessa forma eu consigo utilizar o `innerHTML` de forma dinâmica no meu `pElement` e exibir se é ou não um palíndromo, dependendo do valor boolean retornado.


Essa parte da lógica usando `join` eu lembrava de ter feito anteriormente na plataforma freeCodeCamp em uma certificação de JavaScript Algorithms and Data Structures.

Nesse link abaixo o primeiro exercício é de Palíndromo também, eu fiz ele a alguns meses ou alguns anos atrás:

[freeCodeCamp - Palindrome Checker](https://www.freecodecamp.org/certification/silasrodrigues19/javascript-algorithms-and-data-structures)


<!-- MD Links & Images -->

[project-screenshot]: ./public/preview.png
[project-link]: https://teste-siimp.vercel.app/Ex5/exercicio_5.html