const express=require('express')
require('dotenv').config()
const database=require('./database/db.js')
const router=require('./router/router.js')
const app=express()
const cors=require('cors')


database()
app.use(cors(
    {
        origin:["https://unique-entremet-b0486f.netlify.app"],
        credentials:true
    }
))
app.use(express.json())


/*app.use('/',(req,res)=>{
    res.send('<h1>hello welcome</h1>')
})*/

app.use('/api',router)

module.exports=app
