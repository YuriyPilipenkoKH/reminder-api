const { connect, set } = require("mongoose");
const { MONGO_URL} = process.env

set('strictQuery', true)

const connectDb = async () => {
    try {
        const db = await connect(MONGO_URL);
        console.log(
            `DATABASE is connected. Name: ${db.connection.name}. Host: ${db.connection.host}. Port: ${db.connection.port} `
        );
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectDb;