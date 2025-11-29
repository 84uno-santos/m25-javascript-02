# Hoje veremos Node e React
**Node**
*01 de nov. 2025*

**Simulador de banco de dados**
1. No Terminal com o arquivo db.json marcado digite
npm ini -y

2. Ignorando pacotes para não "subir" para o github
# Precisa instalar todas as vezes
npx gitigonre node

3. Em caso de erro crie a pasta que está faltando, abaixo comando de exemplo
mkdir c:\Users\Aluno\AppData\Roaming\npm
    
4. Instalando servidor json nessa pasta
npm install json-server

5. No arquivo **package.json** altere a linha com os comandos abaixo:
"test": "echo \"Error: no test specified\" && exit 1",
"start": "npx json-server --watch db.json --port 3001"

6. No terminal digite o comando abaixo para iniciar o node.js
npm start

7. Editar o Live Server, no VSCode, em Arquivo, Preferências, procure Live Server e procure por Ignore Files

8. Copie o conteúdo desse arquivo e cole dentro do arquivo settings.json que está na pasta raiz .vscode do seu diretório, vai ficar assim:
***
{
    "liveServer.settings.port": 5501,
    "liveServer.settings.ignoreFiles": [
        "**/db.json",
        "**/*.json",
        ".vscode/**",
        "**/*.scss",
        "**/*.sass",
        "**/*.ts"
    ]
}
***

*08 Nov. 2025*
9. No arquivo JS quando tem .then ocorre um processo síncrono, ele "roda" em separado, o código continua enquanto em segundo plano ele está executando essa função, para isso é bom incluir um timeout pra dar tempo de rodar o processo solicitado no .then, para rodar assícrono recomenda usar async e .wait nesse caso é esperado o resultado da função pra depois seguir com o código...

*22 Nov. 2025*
10. Framework
 1. React
 2. Angular
 3. Vite

11. Instalando react
Selecione a pasta onde quer criar o projeto e no terminal digite:
Entre no terminal e digite:
cmd
> npx create-react-app nome-do-projeto 
> Essa é a forma antiga de criar um projeto React
A forma mais nova de atualizar é usando o Vite
> Dessa forma também instala npx create-vite@latest nome-do-projeto --template react
npm create vite@latest nome-do-projeto -- --template react

*29 Nov. 2025*
Para Rodar clicar na pasta projeto-senai, click direito rodar no terminal integrado e executar os comandos no terminal [vite]
**instalando dependências**
npm install
**rodando o vite**
npm run dev
**instalando rotas**
npm install react-router-dom
**publicando**
npm run build
> Será gerada uma pasta dist, contendo a pasta assets, index.html e um arquivo svg em tese esses arquivos são os que você deverá publicar.