require("dotenv").config();

const env = {
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGO_URI,
};

module.exports = env;