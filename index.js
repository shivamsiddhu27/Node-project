const express = require('express')
const app = express()
var bodyParser = require('body-parser')


const auth = require('./middleware/middleware')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/delete',auth.passwordMatch)
app.post('/delete/json',(req,res) => {
    res.status(200).send({'message':'success'})
})

app.listen(3000,(ERR)=> {
    if(ERR) console.log('error occur')
    console.log('server running on port 3000')
})