/** 
 * 
 */

const carrega = () => {
    const tbbody = document.querySelector("#id_dados");
    axios.get("http://localhost:3000/produtos")
        .then((ret) => {
            ret.data.forEach((item, idx) => {
                const tr = document.createElement('tr');
                const td_id = document.createElement('td');
                const td_desc = document.createElement('td');
                const td_saldo = document.createElement('td');
                const td_preco = document.createElement('td');
                const td_acoes = document.createElement('td');
                // adicionando os tds nos trs
                tr.appendChild(td_id);
                tr.appendChild(td_desc);
                tr.appendChild(td_saldo);
                tr.appendChild(td_preco);
                tr.appendChild(td_acoes);
                //adicionaod ao tbbody
                tbbody.appendChild(tr);
                // colocando os valores nas tds
                td_id.textContent = item.id;
                td_desc.textContent = item.descricao;
                td_saldo.textContent = item.saldo;
                td_preco.textContent = item.preco;
                td_acoes.innerHTML = `<a href="cadastro.html?id=${item.id}"><img src="images/edit.svg" class="img-edit"> </a>
                                   | <img src="images/delete.svg" class="img-delete">`;
                                   // + `<ahref="cadastro.html?id=${item.id}"><img src="images/delete.svg" class="img-delete"> </a>` // poderia ser assi tmb
                /*
                td_id.innerText = item.id;
                td_desc.innerText = item.descricao;
                td_saldo.innerText = item.saldo;
                td_preco.innerText = item.preco;
                */
            });

        })

}

carrega();