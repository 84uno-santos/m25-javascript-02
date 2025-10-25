/**
 * Exemplo de uso do Laço de Repetição WHILE em JavaScript 
 */

let i=0;  // declarando a variável aqui ela vale para todo o código

// enquanto i for menor ou igual a 20   
while (i <= 20) {
    console.log("Valor de i = " + i); // ou console.log("valor de i = " + i++); Imprimi e incrementa em seguida
    //i++;  // incrementa i em 1
    i+=2; // incrementa i em 2
}
console.log("Fim do WHILE");    

// Usando While no Final do..while
// Primeiro executa o bloco, depois verifica a condição
i = 0;
do{
    console.log("Valor de i = " + i++);
} while (i <= 10);
console.log("Fim do DO..WHILE");   