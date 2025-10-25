/**
 * Exemplo de uso do Laço de Repetição WHILE em JavaScript 
 */

let i=0;  // declarando a variável aqui ela vale para todo o código

// Usando While no Final do..while
// Primeiro executa o bloco, depois verifica a condição
i = 0;
do{
    console.log("Valor de i = " + i++);
} while (i <= 10);
console.log("Fim do DO..WHILE");   