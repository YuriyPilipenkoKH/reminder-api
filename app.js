const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config()
const home = require("./routes/api/home");

const { authRouter, usersRouter } = require('./routes/api');
// const contactsRouter = require('./routes/api/contacts')
// const usersRouter = require('./routes/api/users')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'
app.use(logger(formatsLogger))

app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))

app.use("/api/auth", authRouter)
// app.use('/api/contacts', contactsRouter)
app.use('/api/users', usersRouter)

app.use("/api/home", home);

// app.post('/api/transaction', async (req, res) => {
    
//     try {
//          await connectDb()
//          const { name, price, description, dateTime } = req.body
//          // console.log(name, description, dateTime)
     
//          const transaction = await Transaction.create({ name, price, description, dateTime })
//           res.json(transaction)
        
//      } 
//      catch (error) {
//         console.log("Something went wrong",error)
//      }
// })

// app.get('/api/collections', async (req, res) => {
//     await connectDb()
//     const list  = await Collection.find()
//     res.json(list)
// })


app.use((req, res) => {
  res.status(404).json({ message: 'Not found ' })
  console.log( 'Not found | app')
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app