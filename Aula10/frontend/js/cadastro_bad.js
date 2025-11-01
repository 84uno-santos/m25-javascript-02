/**
 * JS Responsável pelo cadastro
 */

/* criando função para pagar o maior id */
const maior_id = () => {
    /* importando biblioteca axios usando a página de cadastro.html*/
    //const axios = require('axios').default
    return axios.get('http://localhost:3000/produtos').then((ret)=>{
        return ret.data.reduce((a,b) => (a > b?.id ? a : b?.id),0)
    })
}

const gravar = () => {
/* importando biblioteca axios usando a página de cadastro.html*/
    //const axios = require('axios').default;
/* buscando dos dados da página html */
    const id = document.querySelector('#id').ariaValueMax;
    const descricao = document.querySelector('#iddesc').value;
    const saldo = document.querySelector('#idsaldo').value;    
    const preco = document.querySelector('#idpreco').value;
// Montando o JSON para gravar
    maior_id().then((ret)=>{
    const dados = {
        "id": (id == "null" ? ret + 1 : id),
        "descricao": descricao,
        "saldo": saldo,
        "preco": preco
    }
    if (id == "null") {
        axios.post("http://locahost:3000/produtos", dados)
        .then((ret)=>console.log("Produto Cadastrado com Sucesso"))
    } else {
         axios.put("http://locahost:3000/produtos/"+id, dados)    
        //axios.put(`http://locahost:3000/produtos/${id}`, dados)  // Também pode ser dessa forma    
        .then((ret)=>console.log("Produto Alterado com Sucesso"))
    }
    })

    // trecho repetido para evitar problemas de assincronia
    const dados = {
        "id": (id == "null" ? maior_id()+1 : id),
        "descricao": descricao,
        "saldo": saldo,
        "preco": preco
    }
    if (id == "null") {
        axios.post("http://locahost:3000/produtos", dados)
        .then((ret)=>console.log("Produto Cadastrado com Sucesso"))
    } else {
         axios.put("http://locahost:3000/produtos/"+id, dados)    
        //axios.put(`http://locahost:3000/produtos/${id}`, dados)  // Também pode ser dessa forma    
        .then((ret)=>console.log("Produto Alterado com Sucesso"))
    }  
}

// Colocando os eventos no formulário
// document.querySelector(#Gravar).onclick = gravar; // poderia ser pelo id do botão
document.querySelector('form'); // pega o 1º formulário da página
form.addEventListener('submit', function (e){
// tirar a submissão do form
    e.preventDefault();
// chamar a função gravar
    gravar();    
// voltando para a página inicial    
    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000); // 3 segundos
})