/**
 * Exemplo do uso do switch em JavaScript
 */

console.log("Menu de Oções:");
console.log("1 - Cadastro");
console.log("2 - Consulta");
console.log("3 - Alteração");
console.log("4 - Exclusão");

let opcao = 3;

// Usando IF

if (opcao == 1) {
    console.log("Escolheu Cadastro");
}   else if (opcao == 2) {
    console.log("Escolheu Consulta");
}   else if (opcao == 3) {                
    console.log("Escolheu Alteração");
}   else if (opcao == 4) {        
    console.log("Escolheu Exclusão");
}   else {          
    console.log("Opção Inválida!");
}   

// Usando SWITCH
switch (opcao) {
    case 1:
        console.log("Escolheu Cadastro");
        break;
    case 2:
        console.log("Escolheu Consulta");
        break;          
    case 3:
        console.log("Escolheu Alteração");
        break;
    case 4:
        console.log("Escolheu Exclusão");
        break;
    default:
        console.log("Opção Inválida!");
        break;
}   
