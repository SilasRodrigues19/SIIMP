Exercício 1

Crie uma página em HTML e PHP/JAVASCRIPT que receba uma
palavra e que remova todas as vogais desta palavra, como no
exemplo abaixo
PS.: Nenhuma palavra com acentos e caracteres especiais será
testada:


[![Preview][project-screenshot]][project-link]


Explicação:

Criei uma função chamada `getBiggerWord()` que será executada durante o evento de click
do botão `Confirmar`.

Fluxo da função:

Eu começo criando duas constantes `inputValue` que guarda o valor que seria toda a frase que o usuário vai inserir no input e `words` que eu recebo todo o valor de `inputValue` e uso o método `split` para separar a frase através de espaçamentos e criar um array com cada palavra em uma posição do array. Exemplo:

```plaintext

input: essa é uma frase de exemplo

// após usar o método split

output: ['essa', 'é', 'uma', 'frase', 'de', 'exemplo']

```

Posteriormente eu crio 2 variáveis de "controle", `biggerWord` eu inicializo com uma string vazia e durante o `forEach` ela será preenchida com a maior palavra e `biggerWordLength` eu inicializo em 0 mas durante o `forEach` ela recebera a palavra de maior comprimento (length)

```js

words.forEach((word) => {
    if (word.length > biggerWordLength) {
      biggerWord = word;
      biggerWordLength = word.length;
    }
  });

/*

 Nesse forEach eu percorro o meu array "words" que contém todas as palavras e no parâmetro "word" eu acesso cada uma dentro do forEach.

 Dentro do if, no primeiro momento a condição será verdadeira já que "biggerWordLength" inicializa em 0

 Sendo verdadeira, "biggerWord" vai receber o valor de "word" e "biggerWordLength" recebe o comprimento de "word"

 Se a condição for falsa, as variáveis não são alteradas mas isso garante que permaneça a maior palavra dentro de "biggerWord" e o maior comprimento em número dentro de "biggerWordLength"

*/


```

Por fim, eu tenho um `<span>` com `id` output que eu atribuo ao `textContent` dele, o valor que eu recebi na variável `biggerWord`




<!-- MD Links & Images -->

[project-screenshot]: ./public/preview.png
[project-link]: #