/** * JS Responsável pelo cadastro
 */

/* criando função para pegar o maior id */
const maior_id = () => {
    // Retorna uma Promise que resolve para o maior id numérico encontrado em /produtos
    return axios.get('http://localhost:3000/produtos')
        /*return ret.data.reduce((a,b) => (a > b?.id ? a : b?.id),0)*/
    .then((ret) => {
            const produtos = Array.isArray(ret.data) ? ret.data : [];
            const ids = produtos
                // Mapeia para obter apenas o valor do 'id'
                .map(item => item && item.id)
                // FILTRA: Verifica se o ID, após ser convertido para Número,
                // é um número finito (descarta strings não-numéricas, nulls, etc.)
                .filter(id => Number.isFinite(Number(id)))
                // MAP: Converte explicitamente os IDs válidos para o tipo Número
                .map(id => Number(id));
            // Retorna o maior número da lista, ou 0 se a lista estiver vazia
            return ids.length > 0 ? Math.max(...ids) : 0;
        })
        .catch((err) => {
            console.error('Erro ao obter produtos para calcular maior id:', err);
            return 0;
        });        
}

/* Gravando o que estava nos campos */
const gravar = () => {
    /* inibindo o botão de gravar e reset para o usuário não clicar enquanto grava */
    document.getElementById('btnSubmit').disabled = true; /* desabilita o botão gravar */
    document.getElementById('btnReset').disabled = true; /* desabilita o botão reset */
    document.getElementById("modal-gravando").classList.add("show"); /* mostrando a modal de gravação */
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
            "id": ""+(id == "null" ? parseInt(maiorIdAtual) + 1 : parseInt(id)),  // pesquisando como número, mas gravando como string quand coloco ""+
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

/* carregando os dados do produto para edição */
const carregar = async () => {
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");
    if (id) {
        document.getElementById("id").value = id;   // poderia usar document.querySelector('#id').value mas teria que usar #
        const res = await axios.get("http://localhost:3000/produtos/" + id); // fake api 
        document.getElementById("iddesc").value = res.data.descricao;
        document.getElementById("idsaldo").value = res.data.saldo;
        document.getElementById("idpreco").value = res.data.preco;
    }
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

// colocando um evento de carregamento da página
document.addEventListener("DOMContentLoaded", function () {
    carregar();
})