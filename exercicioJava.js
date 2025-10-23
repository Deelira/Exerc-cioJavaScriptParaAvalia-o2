// Adicionando elementos

let filmes = ["Matrix", "Avatar"];

filmes.push("Interstellar");

console.log("Questão 01:\n",filmes)

// Removendo do final

let numeros = [10,20,30,40,50];

let novosNumeros = numeros.pop();

console.log("Questão 02:\n",numeros);

// Inserindo no início


let frutas = ["maçã", "banana"];

frutas.unshift("uva");

console.log("Questão 03:\n",frutas);

// Removendo do inicio

let linguagens = [ "HTML", "CSS" , "JAVASCRIPT", "PYTHON"];

linguagens.shift();

console.log("Questão 04:\n",linguagens)

// Adicionando e removendo com splice

let carros = ["Fiat", "Ford", "Honda"];

carros.splice(1, 1, "Toyota");

console.log("Questão 05:\n",carros)

// Copiando parte do array

let letras = ["a", "b","c","d","e"];

let novasLetras = letras.slice(1,4);

console.log("Questão 06:\n",novasLetras)

// Ordenando valores

let numeros2 = [45,12,8,32,19];

let numerosOrdenados = numeros2.sort((a,b) => a - b);

console.log("Questão 07:\n",numerosOrdenados)

// Combinando Map e Filter

let notas = [5.5,7.0,8.2,4.9,9.5];

let notasMaiores = notas.filter((a) => a > 6);

let notasArredondadas = notasMaiores.map((a) => Math.round(a));

console.log("Questão 08:\n",notasArredondadas)