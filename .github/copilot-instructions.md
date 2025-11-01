
# Instruções rápidas para agentes AI que editam este repositório

Estas instruções são específicas para o conteúdo e padrões encontrados neste repositório de aulas/atividades em JavaScript (vanilla). Foque em mudanças pequenas, explicitas e fáceis de revisar.

- Contexto "big picture": o repositório é uma coleção de pastas por aula (ex.: `Aula01`, `Aula07`, `Aula10`) com exemplos estáticos HTML/CSS/JS. Não há um build system — cada exercício roda abrindo o arquivo HTML no navegador.

- Como rodar/depurar localmente:
	- Abra o arquivo `.html` relevante no navegador (ex.: `Aula10/Atividade_Lista_JS_dom/to_do_list.html`).
	- Recomenda-se usar a extensão "Live Server" ou servir a pasta localmente para evitar problemas de CORS ao carregar scripts locais.
	- Debug: use DevTools (Console, Sources). Adicione `console.log` para investigação; scripts são simples e sem módulos.

- Padrões e convenções relevantes:
	- Pastas por aula: cada `AulaNN` é independente; procure por subpastas `Atividade`, `Trabalho` para soluções finais.
	- Versões: alguns arquivos têm sufixos como `_BACKUP`, `_BASE`, `_LOCAL`, `_REMOTE` — prefira editar a versão principal sem `_BACKUP` ou `_LOCAL` a menos que o objetivo seja restaurar histórico.
	- Nomes de arquivo: HTML e CSS/JS costumam compartilhar o mesmo prefixo (ex.: `to_do_list.html` + `to_do_list.js`). Ao refatorar, atualize as tags `<script>`/`<link>` correspondentes.
	- JavaScript: código em estilo vanilla (funções simples, DOM direto). Evite introduzir bundlers, transpilers ou módulos sem necessidade explícita.

- Arquivos exemplares para referência rápida:
	- `Aula10/Atividade_Lista_JS_dom/to_do_list.html` — exemplo de estrutura HTML simples que inclui `to_do_list.js`.
	- `Aula10/Atividade_Lista_JS_dom/to_do_list.js` — manipulação direta do DOM (ex.: criar <li>, appendChild, removeChild).
	- `Aula07/main.js`, `Aula04/index.html` — outros exemplos de padrões repetidos (procure `main.js` quando existir).
	- `Aula03/README.md` — contém notas de aula; útil para entender intenção pedagógica.

- Ao propor mudanças (pull requests):
	- Faça PRs pequenos e focados (1 comportamento/bug por PR).
	- Preserve IDs de elementos quando estiver alterando JS que seleciona por `id` (ex.: `#id_atividade`, `#id_lista` em `to_do_list`).
	- Documente no PR onde o arquivo de entrada (HTML) e o script relacionado estão (linha/trecho se possível).

- Restrições descobertas no repositório:
	- Não há testes automatizados nem configuração de CI detectável — valide alterações manualmente abrindo o HTML.
	- Arquivos em português (comentários e texto da UI) — mantenha novas strings em pt-BR por consistência.

Se algo ficar ambíguo ou você precisar que eu inclua padrões adicionais (ex.: convenções de commit, branch naming), diga quais partes quer expandir e eu ajusto este arquivo.
