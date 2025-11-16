# Referências Rápidas de Markdown

## "Comentários" Citações em Bloco (Blockquotes)
Use > antes do texto da citação podendo usar >> para níveis adicionais

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

## Títulos
Para Título utilize # com limite até 6 níveis
# Título Principal (H1)
## Subtítulo (H2)
### Título de Seção (H3)
#### Sub-seção (H4)
##### Sub-sub-seção (H5)
###### Título Menor (H6)

## ***Ênfase***
Use * ou _ antes e depois da palavra
*Itálico*   
Use ** ou __ antes e depois da palavra	
**Negrito**   
Use *** ou ___ antes e depois da palavra
***Negrito e Itálico***   
Use ~~ antes e depois da palavra
~~Riscado~~   
Use ^^ antes e depois da palavra
^^Sublinhado^^       

> ***Para exibir um desses caracter especiais use \ antes do caracter***   
Eu quero exibir um asterisco literal: \*   
O hash não deve ser um título: \#NãoÉTítulo
> ***Para quebra de linha termine a linha com 3 espaços antes de pressionar Enter***

## Lista não ordenada
Use *, - ou + seguido de um espaço	
- Item 1
- Item 2
- Item 3
  - Sub-item   Use 2 espaços para identação

## Lista ordenada
Use números seguidos de . e um espaço	
1. Primeiro item
2. Segundo item
3. Terceiro item
  1. Sub-item   Use 2 espaços para identação    


## Links
Use [ colchetes ] para o texto do link e ( parênteses ) para a URL.   
[Visite o Google](https://www.google.com)

## Imagens
Similar ao Link, mas adicione um ! antes dos colchetes.   
![Veja essa imagem](https://urbnews.com.br/wp-content/webp-express/webp-images/uploads/2023/08/ceara-x-ituano-empatam-na-arena-castelao-12.jpg.webp)

## Blocos de Código 
Use uma crase \` antes e depois para código embutido (inline)   
Use a função `\print()` no Python para exibir texto no console.

Use três crases \``` antes e depois do código, opcionalmente especificando a linguagem após as primeiras crases   	
```javascript
function saudacao() {
    console.log("Olá, Mundo!");
}
```

## Tabelas
Use | para separar colunas e - para separar o cabeçalho   
> Alinhamento das colunas deve ser feito na linha do separador de cabeçalho usando : no início e fim da linha com ---   
> --- Padrão
> :--- À esquerda
> :---: Central
> ---: À direita   
| Cabeçalho 1 | Cabeçalho 2 | Cabeçalho 3 |
|-------------|:-----------:|------------:|
| Conteúdo 1A | Conteúdo 2A | Conteúdo 3A |
| Conteúdo 1B | Conteúdo 2B | Conteúdo 3B |

## Lista de Tarefas
Use - [ ] para tarefas pendentes e - [x] para tarefas concluídas
- [x] Tarefa concluída
- [ ] Tarefa pendente
- [ ] Outra tarefa
  - [x] Subtarefa concluída
  - [ ] Subtarefa pendente