/** 
 * Array em JavaScript
 */

// Criando um array vazio
const vetor = [];
vetor.push("item 1");
vetor.push("item 2");
vetor.push("item 3");
console.log(vetor);

let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva");
frutas.pop();
frutas.forEach(f => console.log(f));
console.log("Total de frutas: " + frutas.length);