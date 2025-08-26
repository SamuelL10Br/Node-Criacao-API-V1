const buildApp = require("./app");

const PORT = 3000;

const app = buildApp();

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//Usado para rodar o servidor
// node src\server.js
//http://localhost:3000/health <--- Usado para acessar no navegador