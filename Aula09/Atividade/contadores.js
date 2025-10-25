/* Bruno Santos 2025.10.25 */
/* Atividade De Contadores usando Laços de Repetição */

/* Declarando Variaveis */
let v_for = 0; 
let v_whl = 0;  
let v_dwl = 0;
const limite = 10;
// FOR
for (v_for = 0; v_for <= limite; v_for++) {
    console.log("Valor do FOR é = " + v_for);
}
console.log("Fim do FOR");
console.log("/------------------------/");

// WHILE
while (v_whl <= limite) {
    console.log("Valor do While é = " + v_whl);
    v_whl++;
}
console.log("Fim do WHILE");    
console.log("/------------------------/");

// DO WHILE

do{
    console.log("Valor do DO_WHILE é = " + v_dwl++);
} while (v_dwl <= limite);
console.log("Fim do DO..WHILE");   
console.log("/------------------------/");
