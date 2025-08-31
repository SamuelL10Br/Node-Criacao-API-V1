const express = require("express");
const usersRoutes = require("./modules/users/user.routes");

function buildApp() {
    const app = express();
    app.use(express.json());

    //rota de teste (healthcheck)
    app.get("/health", (req, res) => {
        res.json({ status: "ok" });
    });

    app.use("/api/users", usersRoutes);
    console.log("OK! Rotas /api/users montadas");
    
    return app;
}

module.exports = buildApp;


//Comandos usados para formar o json e o framework express
//npm init -y
//npm i express mongoose dotenv zod pino pino-pretty cors bcryptjs
//npm i -D nodemon
