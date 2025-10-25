/** 
 * Laço de Repetição For
 * 
 * Valores básicos:
 * Variável de controle, Condição de parada, Incremento
 *  
 */

let i = 0;  // declarando a variável aqui ela vale para todo o código

// variável incial; condição de parada; incremento
for (i = 0; i <= 10; i++) {
    console.log("Valor de i = " + i);
}
console.log("Fim do FOR");


// nesse caso a variável i vale só dentro do for
for (let i = 0; i <= 10; i++) {
    console.log("Valor de i = " + i);
}
console.log("Fim do FOR " + i); // ERRO: i não definida aqui