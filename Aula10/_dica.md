# Hoje veremos Node e React
**Node**
*01 de nov. 2025*

**Simulador de banco de dados**
1. No Terminal com o arquvio db.json marcado digite
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




