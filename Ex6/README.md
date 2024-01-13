Exercício 6

Agora, crie uma página similar ao exercício 5,
porém altere a lógica do exercício anterior
para que ele verifique se a palavra e/ou frase
inserida no campo de texto pode se tornar
um palíndromo se UMA letra da palavra e/ou
frase for removida.

[![Preview][project-screenshot]][project-link]


Explicação:


Eu tentei manter o máximo da lógica do Ex5 e até pensei na possibilidade de começar do zero.

Lembrei do método `filter` do JavaScript que eu já utilizei bastante em todo list pra passar a lista de todos elementos do todo e criar um novo array, removendo o elemento passado dentro do filter.

Eu começo fazendo um for pra percorrer o array `alphaNumericOnly` e dentro eu crio o `modifiedArray` que faz uma modificação no array original e percorre removendo o índice `i` até que encontre a combinação desejada, caso a palavra possa se tornar um palíndromo

Criei uma função chamada `checkPalindrome` que faz basicamente a mesma checagem que fazia no Ex5 pra comparar array original e o mesmo array invertido, porém agora é uma função que recebe um parâmetro.

Dentro do for, após a lógica do `filter` eu uso essa função `checkPalindrome` e passo o `modifiedArray` para testar, caso retorne verdadeiro significa que em alguma das voltas do loop do for, a string se tornou um palíndromo ao remover algum caracter e ai eu exibo uma mensagem informando que pode se tornar um palíndromo.


Criei uma função chamada `isPalindrome()` que será executada durante o evento de click
do botão `Confirmar`.

Também criei uma função utilitária chamada `showMessage` que é apenas para manipular o DOM e inserir as mensagens e resultados na tela, assim eu evito repetição de código já que ele iria se repetir 3 vezes e com a função eu apenas chamo ela as 3 vezes e nela coloco todo conteúdo que for em comum.


<!-- MD Links & Images -->

[project-screenshot]: ./public/preview.png
[project-link]: https://teste-siimp.vercel.app/Ex6/exercicio_6.html