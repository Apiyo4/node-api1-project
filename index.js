// implement your API here
const express = require('express')
const cors = require('cors')


const {find, findById, insert, update, remove} = require('./data/db')

const app = express()

app.use(express.json())

app.use(cors())
app.get('/', (req, res)=>{
    res.json('this is the response')
})
app.get('/users', (req,res)=>{
    find()
    .then(users=>{
        res.status(200).json(users)
    })
    .catch(error=>{
        console.log(error.message)
    })
})

app.listen(5000, ()=>{
    console.log('listening on 5000')
})


