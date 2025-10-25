/** 
 * Array em JavaScript
 */

// Criando um array vazio
const vetor = [];
vetor.push("item 1");
vetor.push("item 2");
vetor.push("item 3"); 
vetor.splice(1, 1) // remove 1 elemento a partir do índice 1, índice começa em 0
console.log(vetor);

let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva"); // push adiciona um elemento no final do array
frutas.pop(); // pop remove o último elemento do array
frutas.forEach(f => console.log(f)); // forEach percorre o array e executa a função para cada elemento escrevendo linha a linha
console.log("Total de frutas: " + frutas.length);