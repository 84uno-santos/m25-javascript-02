const validar_envio = () => {
    const cmpNome = document.querySelector("#id_nome");
    if (cmpNome.value != "") {
        console.log("Tem conteúdo!!! ", cmpNome.value);
        return true; // permite o envio do form
    } else {
        console.log("Campo vazio!!!");
        // alert("O campo Nome é obrigatório!");
        return false; // bloqueia o envio do form
    }
}

// adicionando o evento de submit no form
const form = document.querySelector("#id_form");
form.addEventListener('submit', function(event){
    //console.log("Evento form!");
    //console.log(validar_envio());  
    //event.preventDefault(); // bloqueia o envio do form 
    if (!validar_envio()) event.preventDefault();  
    //  else return validar_envio();
});
