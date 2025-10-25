/** 
 * 
 */

// Consultar eval() e isNaN()
/** 
 * eval() - executa código JavaScript representado como string
 * isNaN() - verifica se o valor não é um número
 */

// Definição de Vetor

let numeros = [10, 20, 30, 40, 50]; // vetor de números
let nomes = ['João', 'Lucas', 'Marcos', 'Mateus', 'Pedro', 'Bruno']; // vetor de strings     

console.log(nomes[5]); // acessa o elemento de índice 2 (terceiro elemento) do vetor nomes

// obtendo o tamanho do vetor
console.log("Tamanho do vetor nomes: " + nomes.length); // length retorna o tamanho do vetor        
console.log("Tamanho do vetor números: " + numeros.length); // length retorna o tamanho do vetor        

// percorrendo o vetor com for
for (let i = 0; i < nomes.length; i++) {
    console.log("Nome na posição " + i + " é " + nomes[i]);
}   
console.log("Fim do FOR 1º Opção");

console.log("=+".repeat(20))  // texto separador  =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
// percorrendo o vetor com for..of
for (const it of nomes) {
    console.log(it);
}
console.log("Fim do FOR 2º Opção");

console.log("=+".repeat(20))  // texto separador  =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
// usando while para percorrer o vetor
let i = 0;
while (i < nomes.length) {
    console.log(nomes[i++]);
}
console.log("Fim do WHILE");
