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