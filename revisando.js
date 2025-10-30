let filmes = ["Matrix", "Avatar"];

filmes.push("Interstellar");

console.log(filmes);

// Aqui estamos criando uma variável do tipo lista com nomes de filmes. 
// O comando push está adicionando uma String com outro nome de filme e depois exibindo no console. //

let numeros = [10,20,30,40,50];

console.log("O número removido da lista é o " + numeros.pop());

console.log(numeros);

// Aqui nós criamos uma variável do tipo lista com inteiros 
// Logo após usamos o comand pop para remover o ultimo item da lista dentro do próprio comando exibir para mostrar na tela o item removido.
// Em seguida exibimos a nova lista sem o item removido anteriormente.//

let frutas = ["maçã", "banana"];

frutas.unshift("uva");

console.log(frutas);

// Aqui estamos criando uma variável do tipo lista com frutas.
// Em seguida utilizamos o comando unshift para adicionar uma nova fruta na posição inicial
// Depois exibimos a nova lista no console. //

let linguagens = ["HTML", "CSS", "JavaScript", "Python"];

console.log("A linguagem removida da lista é " + linguagens.shift());

console.log(linguagens);

// Aqui criamos uma variável do tipo lista contendo linguagens de programação.
// Em seguida, utilizamos shift para remover o primeiro item da lista.
// Depois exibimos a nova lista no console. //

let carros = ["Fiat", "Ford", "Honda"];

console.log("A marca removida da lista foi " + carros.splice(1, 1, "Toyota"));

console.log(carros);

// Aqui estamos criando uma variável do tipo lista contendo marcas de carros.
// Em seguida, utilizamos o método splice para remover um item pelo indice, inserindo também um novo item no índice desejado.
// Exibimos o resultado da nova lista.

let letras = ["a", "b", "c", "d", "e"];

console.log(letrasFiltradas = letras.slice(1,4));

console.log(letrasFiltradas);

// Aqui estamos criando uma variável do tipo lista contendo letras.
// Em seguida, usamos slice para filtras itens dessa nossa lista, salvando a nova lista em uma variável e exibindo no console.
// Essa exibição foi feita de duas maneiras, explorando os métodos de utilização da linguagem.

let numeros2 = [45,12,8,32,19];

console.log(numeros2);

console.log(numerosOrdenados = numeros2.sort((a,b) => a - b));

numeros2.sort((a,b) => b - a);

console.log(numeros2);

// Aqui estamos criando uma variável do tipo lista com numeros desordenados
// Utilizamos o sort mais a função necessária para devolver esta nossa lista ordenada do menor para o maior.
// Exibimos de varias formas formas no console, mostrando que podemos salvar a lista em uma nova variavel, mas isto é redundante, pois o próprio metodo sort já salva na lista original o resultado de ordenação.

let notas = [5.5,7.0,8.2,4.9,9.5];

console.log(notas.map((a) => a > 6)); // Desta forma, conseguimos capturar o valor booleano da função, interessante caso precisamos trabalhar com isto.

notasMaiores = notas.filter((a) => a > 6);

console.log(notasMaiores); // Aqui exibimos as notas armazenadas em uma nova lista após o método filter.

console.log(notasMaiores.map((a) => Math.round(a))); // Aqui estamos apenas exibindo as notas arredondadas, se quisermos salvar o resultado precisamos atribuir uma variavel que recebe o resultado. 



