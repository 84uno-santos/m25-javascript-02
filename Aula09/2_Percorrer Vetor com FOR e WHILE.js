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

/* 1º Forma */
console.log("Percorrendo com FOR"); 
for(let i=0; i<vetor.length; i++){
    console.log("Elemento na posição " + i + " é " + vetor[i]);
}   
console.log("Fim do FOR");

console.log("=+".repeat(20))  // texto separador  =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+      

/* 2º Forma */
console.log("Percorrendo com FOR 2º Forma");
for(const it of vetor){
    console.log(it);
} 

console.log("=+".repeat(20))  // texto separador  =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+

/* 3º Forma */
console.log("Percorrendo com WHILE");
let i=0;
while(i < vetor.length){
    console.log(vetor[i++]);
}

console.log("=+".repeat(20))  // texto separador  =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+

/* 4º Forma - forEach */
console.log("Percorrendo com forEach");
vetor.forEach(elemento => console.log(elemento));