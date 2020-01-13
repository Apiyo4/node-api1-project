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
       res.status(500).json({message: error.message})
    })
})

app.get('/users/:id', (req, res)=>{
    const {id} = req.params
    findById(id)
    .then(user=>{
        if(user){
            res.status(200).json(user)
        }else{
            res.status(404).json({message: 'we cant find that user'})
        }
    })
    .catch(error=>{
        console.log(error)
}
    )
})
app.post('/users', (req,res)=>{
    const newUser=req.body

    insert(newUser)
    .then(user=>{
        res.status(201).json(user)
    })
    .catch(error=>{
        res.status(500).json({message:error.message})
    })
})
app.put("/users/:id", (req, res)=>{
    const {id} = req.params
    const changeUser = req.body
    update(id, changeUser)
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(error=>{
        res.status(500).json(error.message)
    })
})

app.listen(5000, ()=>{
    console.log('listening on 5000')
})


