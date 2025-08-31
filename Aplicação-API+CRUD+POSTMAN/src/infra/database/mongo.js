const mongoose = require("mongoose");
const env = require("../../config/env");

async function connectMongo() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(env.mongoUri);
        console.log("Ok! Conectado ao mongoDB");
    } catch (err) {
        console.error("Erro ao conectar no MongoDB:", err.message);
        process.exit(1);
    }
}

module.exports = connectMongo;