const express = require("express");
const cors = require('cors')
const home = require("./routes/home");
const connectDb = require("./connectDb");
const dotenv = require('dotenv').config()
const Transaction = require('./models/Transaction.js')


const app = express();
app.use(cors())
app.use(express.json());


app.use("/api/home", home);

app.post('/api/transaction', async (req, res) => {
    
    try {
         await connectDb()
         const { name, price, description, dateTime } = req.body
         // console.log(name, description, dateTime)
     
         const transaction = await Transaction.create({ name, price, description, dateTime })
          res.json(transaction)
        
     } 
     catch (error) {
        console.log("Something went wrong",error)
     }
})

app.get('/api/transactions', async (req, res) => {
    await connectDb()
    const list  = await Transaction.find()
    res.json(list)
})


const port = process.env.API_PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));

module.exports = app