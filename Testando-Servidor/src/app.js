const express = require("express");

function buildApp() {
    const app = express();

    app.use(express.json());

    //rota de teste (healthcheck)
    app.get("/health", (req, res) => {
        res.json({ status: "ok" });
    });

    return app;
}

module.exports = buildApp;


//Comandos usados para formar o json e o framework express
//npm init -y
//npm i express mongoose dotenv zod pino pino-pretty cors bcryptjs
//npm i -D nodemon
