/**
 * Manipulando objetos do HTML com JavaScript DOM (Document Object Model)
 */

const incluir = ()=>{
    const li = document.createElement("li"); // cria um elemento li poderia ser qualquer outro elemento HTML
    // 1º forma de obter o valor do input
    const txtCmp = document.querySelector("#id_texto"); // obtém o 1º input do HTML mesmo conceito do CSS
    // 2º forma de obter o valor do input   
    // const txtCmp = document.getElementById("id_texto"); // obtém o elemento input do HTML 
    
    // colocando o coteúdo do input dentro do li
    li.textContent = txtCmp.value;
    // colocando o li dentro da ul posso usar getElementById("id_lista") ou querySelector("#id_lista")
    const ol = document.getElementById("id_lista");
    ol.appendChild(li); // appendChild adiciona um elemento filho dentro de outro elemento
}

const remover = ()=>{
    const lis = document.querySelectorAll("#id_lista li"); // obtém todos os elementos li dentro da ul id_lista
    const txtCmp = document.querySelector("#id_texto"); // obtém o input do HTML
    const ol = document.querySelector("#id_lista"); // obtém a ol do HTML
    // percorrendo os lis
    lis.forEach( item=> {
        if(item.textContent == txtCmp.value){ // compara o texto do li com o valor do input
            ol.removeChild(item); // remove o li da ol
        }   
    });
}       
// Adiciona o evento de click no botão de Incluir
const btnAdicionar = document.querySelector("#id_adicionar");
const btnRemover = document.querySelector("#id_remover");

// evento de click do botão
btnAdicionar.addEventListener('click', incluir);
btnRemover.addEventListener('click', remover);