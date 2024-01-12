Exercício 1

Crie uma página em HTML e PHP/JAVASCRIPT que receba uma
palavra e que remova todas as vogais desta palavra, como no
exemplo abaixo
PS.: Nenhuma palavra com acentos e caracteres especiais será
testada:


[![Preview][project-screenshot]][project-link]


Explicação:

Criei uma função chamada `removeVowels()` que será executada durante o evento de click
do botão `Confirmar`.

Fluxo da função:

Eu crio 2 constantes para receber o elemento de input `const inputElement` e
outra para receber o valor do elemento de input `const inputValue`

Fiz dessa forma separada porque em determinado momento preciso do elemento em si, porque
fiz uma validação visual pra informar que a palavra tem acentuação e em outro momento
precisarei realmente do value para poder testar.

Criei uma constante para receber o valor digitado pelo usuário `newInputValue`, porém já tratado com a
remoção das vogais. Fiz isso utilizando a função `replace` passando 2 parâmetros, sendo o primeiro uma expressão regular (regEx) e a segunda uma string vazia, pois o regex vai encontrar todas as vogais e irá substituir por uma string vazia. Essa é a parte onde a lógica necessária está de fato aplicada.

```js

inputValue.replace(/[aeiou]/gi, '');

// [aeiou] - um array contendo todas as vogais minúsculas
// /gi - g (global) i (insensitive) o /i faz com que a expressão seja tratata sem diferenciar maiusculas e minusculas

```

Por fim, eu tenho um `<span>` com `id` output que eu atribuo ao `textContent` dele, o valor que eu recebi no meu `newInputValue` que já é o valor tratado pelo método `replace`




<!-- MD Links & Images -->

[project-screenshot]: ./public/preview.png
[project-link]: https://teste-siimp.vercel.app/Ex1/exercicio_1.html