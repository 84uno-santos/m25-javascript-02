const incluir = ()=>{
    const li = document.createElement("li"); 
    const txtCmp = document.querySelector("#id_atividade");
    li.textContent = txtCmp.value;
    const ol = document.getElementById("id_lista");
    ol.appendChild(li);
    
    txtCmp.value = "";
}

const remover = ()=>{
    const lis = document.querySelectorAll("#id_lista li");
    const txtCmp = document.querySelector("#id_atividade");
    const ol = document.querySelector("#id_lista");
    
    lis.forEach( item=> {
        if(item.textContent == txtCmp.value){
            ol.removeChild(item);
        }   
    });
}       

const btnAdicionar = document.querySelector("#id_adicionar");
const btnRemover = document.querySelector("#id_remover");


btnAdicionar.addEventListener('click', incluir);
btnRemover.addEventListener('click', remover);