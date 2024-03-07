const app = require('./app');
const { connectDb } = require('./config');
const { PORT=4000 } = process.env

connectDb()

app.listen( PORT, () => console.log(`Listening to port ${ PORT }`));

