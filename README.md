## Código dos testes

Nomeei os arquivos `html` conforme orientação: `exercicio_numero.html`, porém organizei dentro de pastas `Ex1, Ex2, Ex3, etc`

Abaixo tem um preview de cada um dos exercícios.

Clicando na imagem na coluna `Código fonte`, redireciona para o diretório do exercício no GitHub.

Clicando na coluna `Site`, redireciona para a página online com o exercício.


| Código fonte                                     | Site                                              |
| ------------------------------------------------ | ------------------------------------------------- |
| Exercício 1 - Código                             | Exercício 1 - Site                                |
| [![Preview][Ex1-preview]][Ex1-source]            | [![Preview][Ex1-preview]][Ex1-demo]               |
| Exercício 2 - Código                             | Exercício 2 - Site                                |
| [![Preview][Ex2-preview]][Ex2-source]            | [![Preview][Ex2-preview]][Ex2-demo]               |
| Exercício 3 - Código                             | Exercício 3 - Site                                |
| [![Preview][Ex3-preview]][Ex3-source]            | [![Preview][Ex3-preview]][Ex3-demo]               |
| Exercício 4 - Código                             | Exercício 4 - Site                                |
| [![Preview][Ex4-preview]][Ex4-source]            | [![Preview][Ex4-preview]][Ex4-demo]               |
| Exercício 5 - Código                             | Exercício 5 - Site                                |
| [![Preview][Ex5-preview]][Ex5-source]            | [![Preview][Ex5-preview]][Ex5-demo]               |
| Exercício 6 - Código                             | Exercício 6 - Site                                |
| [![Preview][Ex6-preview]][Ex6-source]            | [![Preview][Ex6-preview]][Ex6-demo]               |
| Exercício 7 - Código                             | Exercício 7 - Site                                |
| [![Preview][Ex7-preview]][Ex7-source]            | [![Preview][Ex7-preview]][Ex7-demo]               |



## Sobre os exercícios

Exercício 1 - Eu tinha uma lembrança recente de ter feito um exercício chamado `Weather Observation Station 9` na plataforma HackerRank, cujo objetivo era retornar todas as estações que não começassem com vogais e sem duplicadas e ficou algo parecido com isso:

```sql
  SELECT DISTINCT CITY FROM STATION
  WHERE CITY REGEXP '^[^aeiou]';
```

Lembrei dessa parte específica do regEx e adaptei pra utilizar em JS

Exercício 2 - Essa eu não achei tão complicada, só utilizei o método `split` do JS para criar um array com as palavras e posteriormente fiz um `forEach` pra percorrer todas as posições do array e encontrar o valor com o maior `length`

Exercício 3 - Essa caberia um `forEach` também mas acabei fazendo com `for` por um certo "vício" em usar `for`, nesse `for` eu concateno o valor do índice a uma variável então no final do loop vou ter a soma de todos os dígitos, porém precisa converter com `parseInt` ou `Number()` pro JS não entender que é uma `String` porque ai os valores seriam diferentes

Exercício 4 - Essa eu perdi o maior tempo para começar a lógica, pelo que me lembro. Eu queria criar um array com as posições preenchidas de 1 até o valor digitado porém não sabia muito como prosseguir e aí lembrei de um projeto que eu usei uma sintaxe para criar um array a partir da propriedade `length` de um elemento:

```js
  const numbers = Array.from({ length: inputValue }, (_, index) => {
    return index + 1;
  });
```

Como o índice começa em 0, eu somei +1 e resolvi o maior problema que eu tive que era essa parte inicial de ter os valores de 1 até o valor digitado pelo usuário.


Exercício 5 - Essa foi um dos mais fáceis, me lembrei de ter feito essa lógica em um exercício da freeCodeCamp que é basicamente a criação de 2 arrays sendo um deles com as posições invertidas e aí se a comparação retornar `true` é porque é um palíndromo.


Exercício 6 - Esse é basicamente reaproveitar o exercício anterior e implementar mais uma lógica, porém me parecia mais fácil do que realmente foi.
Precisei fazer um `for` e dentro desse `for` utilizar o método `filter` pra poder comparar o índice dos 2 e percorrer até a condição ser satisfeita, que caso aconteça, significa que em algum momento do loop foi encontrado algum caracter que ao ser removido iria satisfazer a condição.


Exercício 7 - Foi o mais fácil porque já que eu preciso retornar a soma entre os números digitados, posso iniciar o `for` com o primeiro dos valores e percorrer até o segundo valor, depois utilizar uma variável dentro do `for` pra ir incrementando essa soma a cada volta do loop.


MAIS FÁCIL: 7

MAIS DIFÍCIL: 6 (Não parecia que seria, mas pra mim foi)


<!-- Markdown -->

[Ex1-preview]: ./Ex1/public/preview.png
[Ex1-demo]: https://teste-siimp.vercel.app/Ex1/exercicio_1.html
[Ex1-source]: https://github.com/SilasRodrigues19/SIIMP/tree/main/Ex1


[Ex2-preview]: ./Ex2/public/preview.png
[Ex2-demo]: https://teste-siimp.vercel.app/Ex2/exercicio_2.html
[Ex2-source]: https://github.com/SilasRodrigues19/SIIMP/tree/main/Ex2


[Ex3-preview]: ./Ex3/public/preview.png
[Ex3-demo]: https://teste-siimp.vercel.app/Ex3/exercicio_3.html
[Ex3-source]: https://github.com/SilasRodrigues19/SIIMP/tree/main/Ex3


[Ex4-preview]: ./Ex4/public/preview.png
[Ex4-demo]: https://teste-siimp.vercel.app/Ex4/exercicio_4.html
[Ex4-source]: https://github.com/SilasRodrigues19/SIIMP/tree/main/Ex4


[Ex5-preview]: ./Ex5/public/preview.png
[Ex5-demo]: https://teste-siimp.vercel.app/Ex5/exercicio_5.html
[Ex5-source]: https://github.com/SilasRodrigues19/SIIMP/tree/main/Ex5


[Ex6-preview]: ./Ex6/public/preview.png
[Ex6-demo]: https://teste-siimp.vercel.app/Ex6/exercicio_6.html
[Ex6-source]: https://github.com/SilasRodrigues19/SIIMP/tree/main/Ex6


[Ex7-preview]: ./Ex7/public/preview.png
[Ex7-demo]: https://teste-siimp.vercel.app/Ex7/exercicio_7.html
[Ex7-source]: https://github.com/SilasRodrigues19/SIIMP/tree/main/Ex7