# Referências Rápidas de Markdown

## "Comentários" Citações em Bloco (Blockquotes)	Use > antes do texto da citação
> Primeiro parágrafo da citação.
>
> Segundo parágrafo da citação.
> Este é um texto que ainda faz parte do segundo parágrafo.

> Citação de primeiro nível.
>> Citação de segundo nível.
>>> Citação de terceiro nível.
> De volta ao primeiro nível.

## Linha Horizontal
Use 3 ou mais hífens (---), asteriscos (***) ou underscores (___)	---
---
***
___

## Para Título utilize # com limite até 6 níveis
# Título Principal (H1)
## Subtítulo (H2)
### Título de Seção (H3)
#### Sub-seção (H4)
##### Sub-sub-seção (H5)
###### Título Menor (H6)

## ***Ênfase***
*Itálico*	use * ou _ antes e depois da palavra
**Negrito**	use ** ou __ antes e depois da palavra
***Negrito e Itálico***	use *** ou ___ antes e depois da palavra
~~Riscado~~	use ~~ antes e depois da palavra
^^Sublinhado^^	use ^^ antes e depois da palavra    

## Para exibir um caracter desses especiais use \ antes do caracter
Eu quero exibir um asterisco literal: \*
O hash não deve ser um título: \#NãoÉTítulo

## Lista não ordenada	Use *, - ou + seguido de um espaço	
- Item 1
- Item 2
- Item 3
  - Sub-item   use 2 espaços para identação

## Lista ordenada	Use números seguidos de . e um espaço	
1. Primeiro item
2. Segundo item
3. Terceiro item
  1. Sub-item   use 2 espaços para identação    


## Links
Use [ colchetes ] para o texto do link e ( parênteses ) para a URL.
[Visite o Site](https://www.google.com)

## Imagens
Similar ao Link, mas adicione um ! antes dos colchetes.
![Veja essa imagem](Atividade\code.png)

## Blocos de Código 
Use uma crase ` antes e depois para código embutido (inline) e
Use a função `\print()` no Python para exibir texto no console.

Use três crases (```) antes e depois do código, opcionalmente especificando a linguagem após as primeiras crases	
```javascript
function saudacao() {
    console.log("Olá, Mundo!");
}
```

## Tabelas	Use | para separar colunas e - para o cabeçalho
> --- Alinhamento padrão
> :--- Alinhamento à esquerda
> :---: Alinhamento central
> ---: Alinhamento à direita
| Cabeçalho 1 | Cabeçalho 2 | Cabeçalho 3 |
|-------------|:-----------:|------------:|
| Conteúdo 1A | Conteúdo 2A | Conteúdo 3A |
| Conteúdo 1B | Conteúdo 2B | Conteúdo 3B |

## Lista de Tarefas    Use - [ ] para tarefas pendentes e - [x] para tarefas concluídas
- [x] Tarefa concluída
- [ ] Tarefa pendente
- [ ] Outra tarefa
  - [x] Subtarefa concluída
  - [ ] Subtarefa pendente