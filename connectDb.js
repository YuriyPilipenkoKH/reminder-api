const { connect } = require("mongoose");
const dotenv = require('dotenv').config()

const connectDb = async () => {
    try {
        const db = await connect(process.env.MONGO_URL);
        console.log(
            `DATABASE is connected. Name: ${db.connection.name}. Host: ${db.connection.host}. Port: ${db.connection.port}`
        );
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectDb;