# Comandos Básicos do JavaScript (Guia Rápido em Markdown)

O JavaScript é uma linguagem de programação essencial para desenvolvimento web, permitindo a manipulação de conteúdo, controle de multimídia, animação de imagens e muito mais.

---

## 1. Declaração de Variáveis e Constantes

| Palavra-chave | Descrição | Exemplo |
| :--- | :--- | :--- |
| `var` | Variável de escopo de função (antiga). | `var nome = "João";` |
| `let` | Variável de **escopo de bloco** (preferida para reatribuição). | `let idade = 30;` |
| `const` | **Constante** de escopo de bloco (valor não pode ser alterado). | `const PI = 3.14;` |

## 2. Saída e Interação com o Usuário

Estes comandos são úteis para depuração e interação simples.

| Comando | Função | Exemplo |
| :--- | :--- | :--- |
| `console.log()` | Imprime dados no **Console** do navegador (principalmente para *debugging*). | `console.log("Variável X: " + x);` |
| `alert()` | Exibe uma caixa de diálogo **pop-up** com uma mensagem. | `alert("Erro ao salvar!");` |
| `prompt()` | Exibe um pop-up para entrada de texto pelo usuário. | `let resposta = prompt("Qual seu nome?");` |
| `confirm()` | Exibe um pop-up para confirmação (retorna `true` ou `false`). | `if (confirm("Deletar item?")) { ... }` |

## 3. Funções

Usadas para agrupar comandos e reutilizar código.

| Sintaxe | Descrição | Exemplo |
| :--- | :--- | :--- |
| `function nome() {}` | Cria uma função nomeada. | `function somar(a, b) { return a + b; }` |
| `const nome = () => {}`| Cria uma **Arrow Function** (sintaxe moderna). | `const multiplicar = (x, y) => x * y;` |
| `return` | Retorna um valor da função e encerra a execução. | `return resultado;` |

## 4. Estruturas de Controle de Fluxo

Comandos para tomar decisões e repetir tarefas.

### Condicionais

```javascript
if (condicao) {
    // Código se a condição for verdadeira
} else if (outraCondicao) {
    // Código se a segunda condição for verdadeira
} else {
    // Código se nenhuma for verdadeira
}

switch (expressao) {
    case valor1:
        // Código para valor1
        break;
    case valor2:
        // Código para valor2
        break;
    default:
        // Código padrão
}
```
### Loops

```javascript
for (let i = 0; i < 10; i++) {
    // Código repetido 10 vezes
}
while (condicao) {
    // Código repetido enquanto a condição for verdadeira
}
do {
    // Código repetido pelo menos uma vez
} while (condicao);
for (let item of array) {
    // Código para cada item do array
}
```
## 5. Manipulação de Arrays
| Comando | Descrição | Exemplo |
| :--- | :--- | :--- |
| `push()` | Adiciona um elemento ao final do array. | `arr.push(5);` |
| `pop()` | Remove o último elemento do array. | `arr.pop();` |
| `shift()` | Remove o primeiro elemento do array. | `arr.shift();` |
| `unshift()` | Adiciona um elemento no início do array. | `arr.unshift(1);` |
| `forEach()` | Executa uma função para cada elemento do array. | `arr.forEach(item => console.log(item));` |
| `map()` | Cria um novo array com os resultados da função aplicada a cada elemento. | `let novos = arr.map(x => x * 2);` |
| `filter()` | Cria um novo array com elementos que passam no teste da função. | `let pares = arr.filter(x => x % 2 === 0);` |
## 6. Manipulação de Objetos
| Comando | Descrição | Exemplo |
| :--- | :--- | :--- |
| `{}` | Cria um objeto. | `let pessoa = { nome: "Ana", idade: 25 };` |
| `obj.propriedade` | Acessa uma propriedade do objeto. | `console.log(pessoa.nome);` |
| `obj.propriedade = valor` | Define ou altera uma propriedade do objeto. | `pessoa.idade = 26;` |
| `delete obj.propriedade` | Remove uma propriedade do objeto. | `delete pessoa.idade;` |
## 7. Eventos e Manipulação do DOM
| Comando | Descrição | Exemplo |
| :--- | :--- | :--- |
| `document.getElementById()` | Seleciona um elemento pelo ID. | `let btn = document.getElementById("meuBotao");` |
| `document.querySelector()` | Seleciona o primeiro elemento que corresponde ao seletor CSS. | `let div = document.querySelector(".minhaDiv");` |
| `element.addEventListener()` | Adiciona um ouvinte de evento a um elemento. | `btn.addEventListener("click", minhaFuncao);` |
| `element.innerHTML` | Define ou obtém o conteúdo HTML de um elemento. | `div.innerHTML = "<p>Novo conteúdo</p>";` |
| `element.style.propriedade` | Define o estilo CSS de um elemento. | `div.style.color = "red";` |
## 8. Outras Funções Úteis
| Comando | Descrição | Exemplo |
| :--- | :--- | :--- |
| `setTimeout()` | Executa uma função após um atraso especificado (em ms). | `setTimeout(() => { console.log("Olá!"); }, 2000);` |
| `setInterval()` | Executa uma função repetidamente em intervalos especificados (em ms). | `setInterval(() => { console.log("Tick"); }, 1000);` |
| `JSON.parse()` | Converte uma string JSON em um objeto JavaScript. | `let obj = JSON.parse('{"nome":"João"}');` |
| `JSON.stringify()` | Converte um objeto JavaScript em uma string JSON. | `let str = JSON.stringify({nome: "João"});` |
---
Este guia rápido cobre os comandos mais comuns do JavaScript. Para aprofundar seus conhecimentos, consulte a documentação oficial do MDN Web Docs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript.
