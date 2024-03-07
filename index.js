const app = require('./app');
const { connectDb } = require('./config');
const { API_PORT=4000 } = process.env

connectDb()

app.listen( API_PORT, () => console.log(`Listening to port ${ API_PORT }`));

