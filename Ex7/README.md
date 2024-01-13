Exercício 7

Crie uma página em HTML e PHP ou
JAVASCRIPT que receba dois valores
inteiros (negativos e/ou positivos). Ao clicar
em OK, uma função deverá retornar a soma
de todos os números ENTRE os dois
números digitados pelo usuário (incluindo os
próprios números do usuário). ● Somente números inteiros serão
testados.
● Se os dois números forem iguais,
retorne qualquer um deles.
● Se o segundo número for menor que o
primeiro, retorne 0.

[![Preview][project-screenshot]][project-link]


Explicação:

Criei 2 variáveis `number_one` e `number_two`, sendo cada uma um input que o usuário vai digitar um valor.

Criei uma função chamada `sumOfAll` que recebe 2 parâmetros que também chamei de `number_one` e `number_two`, posteriormente vou chamar essa função em outra função e passar os valores dos inputs nos parâmetros.

Dentro dessa função eu faço 2 verificações

Um if para verificar se os parâmetros são iguais e ai retorno o primeiro

Outro if para verificar se o primeiro parâmetro é maior que o segundo e ai retorno 0

Após isso eu crio fora dos ifs uma variável chamada `sum` e crio um for logo em seguida

No for eu inicializo o `i` com o valor do primeiro parâmetro, `i++` para incrementar até que o valor de `i` seja maior que o segundo parâmetro, em cada volta do for, o valor de `i` vai ser somado à variável `sum` e por fim eu retorno o valor de `sum`

```js
  let sum = 0;

  for (let i = number_one; i <= number_two; i++) {
    sum += Number(i);
  }

  return sum;
```

Eu converti o valor de `i` usando a função nativa `Number` porque o método de concatenação `+=` trata a operação como se fosse uma String, então precisa desse cuidado por conta do JS não se importar com tipagem.

Criei uma segunda função chamada `handleSum`, ela é chamada no evento de onclick quando eu clico no botão `Confirmar`.

Dentro dessa função faço 2 validações pra garantir que os inputs não esteja vazios.

Em seguida eu crio uma constante chamada `sum` e agora sim eu utilizo a função que eu criei anteriormente `sumOfAll` e nos 2 parâmetros esperados pela função eu passo o valor dos 2 inputs:

```js
 const sum = sumOfAll(number_one.value, number_two.value);
```

Por fim eu só exibo os valores em tela, e aí novamente estou usando a função utilitaria chamada `showMessage` que eu reaproveitei dos exercícios anteriores, mas só serve para criar elementos, lidar com o DOM e inserir os resultados em tela.



<!-- MD Links & Images -->

[project-screenshot]: ./public/preview.png
[project-link]: https://teste-siimp.vercel.app/Ex7/exercicio_7.html