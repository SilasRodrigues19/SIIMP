Exercício 4

Crie uma página em HTML e PHP ou JAVASCRIPT que receba um
valor numérico inteiro maior do que zero e liste todos os números
do 1 até o número informado. No entanto:
● Se o número for divisível por 3, substitua o número da
listagem pela palavra HELLO.
● Caso o número for divisível por 5, substitua o número da
listagem pela palavra WORLD.
● Caso o número for divisível por ambos (3 e 5), substitua o
número da listagem pelas palavras HELLO WORLD, como
mostrado no exemplo ao lado:


[![Preview][project-screenshot]][project-link]


Explicação:

Criei uma função chamada `verifyIfIsDivisibleBy` que recebe um número e retorna uma string.
O objetivo é verificar se o número é divisível por 3, se é divisível por 5 ou se é divisível por ambos, pra cada uma dessas 3 situações o código retorna a string correspondente, ou retorna o número em si, caso não se encaixe nas verificações de divisão 

Me incomoda um pouco esse tanto de if e else if, eu costumo utilizar o ChatGPT para refatorar funções assim e de repente criar algo mais "clean", se fosse um projeto pessoal talvez o resultado seria algo assim:

```js

const verifyIfIsDivisibleBy = num => {
  const conditions = {
    'HELLO WORLD': num % 3 === 0 && num % 5 === 0,
    'HELLO': num % 3 === 0,
    'WORLD': num % 5 === 0
  };

  return Object.keys(conditions).find(key => conditions[key]) || num;
};

```

Como é um teste, mantive o código com os else if porque foi a maneira que eu criei mesmo sem auxílio de IA, eu também gosto de utilizar if ternário as vezes mas pra esse exemplo acho que a legibilidade do código não fica boa, então mantive com if else.


Criei uma função chamada `generateNumberList()` que será executada durante o evento de click
do botão `Confirmar`.

Fluxo da função:

Eu começo criando uma variável chamada `inputValue` para guardar o valor numérico digitado pelo usuário e uma variável chamada `listResult` que é uma <ul>, que posteriormente vou criar alguns <li> para inserir dinamicamente dentro desse <ul>

Crio um if para fazer uma validação bem simples, para garantir que o `inputValue` seja
um valor válido e positivo e dentro desse if vem toda a parte lógica:


Eu tive uma certa dificuldade em começar a lógica, eu pensei em criar um array de 1
até o valor digitado no input porém não sabia muito bem de que forma eu iria fazer isso.

Lembrei de um projeto de jogo da velha, onde eu tinha um componente chamado `Square` que era visualmente um quadrado e eu utilizei `Array.from` passando o valor 9 que é a quantidade necessária para montar o tabuleiro do jogo da velha e fiz um `map` para renderizar 9 `Square`.

O código em questão é esse abaixo, dei uma olhada para consulta e adaptei para esse exercício.

[Link desse código de referência](https://github.com/SilasRodrigues19/TicTacToe/blob/9fd91184fe0fa8273e58f6ca7498f8a88be61581/src/pages/index.astro#L19)

```astro
---
import Square from '../components/Square.astro';

interface Props {
  TIC_TAC_TOE_SQUARES: number;
}

const { TIC_TAC_TOE_SQUARES = 9 } = Astro.props;
---

<div class="grid grid-cols-3 gap-4 mb-6">
    { 
      Array.from({ length: TIC_TAC_TOE_SQUARES }).map((_, index) => <Square key={index} />)
    }
</div>
```

Criei uma constante chamada `numbers` onde eu recebo o retorno desse `Array.from` que é montado a partir do comprimento do `inputValue` e no retorno eu somo +1 ao índice já que ele começa do 0.

Em seguida eu faço um `forEach` nessa const `numbers` pra percorrer toda a lista numérica obtida e aplicar a lógica

Dentro do `forEach` eu crio uma variável `li` para criar uma lista.

Uso o método `appendChild` para passar os números tratados com a função `verifyIfIsDivisibleBy` que já retorna a frase caso o número esteja na verificação de divisão.

Por fim eu pego meu `listResult` e uso o método `appendChild` novamente para que meu <ul> receba todas as <li> que foram criadas


```js

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

```




<!-- MD Links & Images -->

[project-screenshot]: ./public/preview.png
[project-link]: https://teste-siimp.vercel.app/Ex4/exercicio_4.html