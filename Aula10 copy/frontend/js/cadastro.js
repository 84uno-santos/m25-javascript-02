/** * JS Responsável pelo cadastro
 */

/* criando função para pegar o maior id */
const maior_id = () => {
    /* importando biblioteca axios usando a página de cadastro.html*/
    //const axios = require('axios').default
    return axios.get('http://localhost:3000/produtos').then((ret)=>{
        // Mapeia todos os IDs para um array de números, ignora null/undefined, e encontra o máximo.
        const ids = ret.data.map(item => item.id).filter(id => typeof id === 'number');
        // Se houver IDs válidos, retorna o máximo, caso contrário, retorna 0.
        return ids.length > 0 ? Math.max(...ids) : 0;     
    })
}

const gravar = () => {
    /* importando biblioteca axios usando a página de cadastro.html*/
    //const axios = require('axios').default; 
    /* buscando dos dados da página html */
    const id = document.querySelector('#id').value;
    const descricao = document.querySelector('#iddesc').value;
    // CORREÇÃO 3: Converte saldo e preço para números
    const saldo = parseInt(document.querySelector('#idsaldo').value);     
    const preco = parseFloat(document.querySelector('#idpreco').value);
    
    // Montando o JSON para gravar - DEVE ESTAR DENTRO DO THEN
    maior_id().then((maiorIdAtual)=>{
        const dados = {
            // CORREÇÃO 1: Usa maiorIdAtual para calcular o novo ID
            "id": (id == "null" ? maiorIdAtual + 1 : parseInt(id)),
            "descricao": descricao,
            "saldo": saldo,
            "preco": preco
        }
        
        if (id == "null") {
            // Requisição POST para novo produto
            axios.post("http://localhost:3000/produtos", dados)
            .then((ret)=>console.log("Produto Cadastrado com Sucesso"))
        } else {
            // Requisição PUT para alterar produto existente
            axios.put("http://localhost:3000/produtos/"+id, dados)     
            .then((ret)=>console.log("Produto Alterado com Sucesso"))
        }
    })

    // CORREÇÃO 2: O BLOCO REPETIDO FOI REMOVIDO!
}

// Colocando os eventos no formulário
// document.querySelector(#Gravar).onclick = gravar; // poderia ser pelo id do botão
const form = document.querySelector('form'); // pega o 1º formulário da página
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