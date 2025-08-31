const buildApp = require("./app");
const connectMongo = require("./infra/database/mongo");
const env = require("./config/env");

async function start() {
    await connectMongo();
    const app = buildApp();

    app.listen(env.port, () => {
        console.log(`Servidor rodando em http://localhost:${env.port}`);
    });
}

start().catch((err) => {
    console.error("Falha ao iniciar:", err);
    process.exit(1);
});

//Usado para rodar o servidor
// node .\src\server.js
//http://localhost:3000/health <--- Usado para acessar no navegador