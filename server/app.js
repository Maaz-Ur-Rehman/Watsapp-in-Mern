const express=require('express')
const dotenv=require('dotenv')
const connectDB = require('./config/db')
const morgan=require('morgan')
const cors=require('cors')
const bodyParser = require('body-parser')
dotenv.config()
const userRoute=require('./routers/userRoutes')
const conversationRoute=require('./routers/conversationRoutes')
const messegeRoute=require('./routers/messegeRoute')

connectDB()
const app=express()
app.use(express.json())

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))


app.use('/',userRoute)
app.use('/',conversationRoute)
app.use('/',messegeRoute)
app.get('/',(req,res)=>{
    res.send({
        messege:"Welcome "
    })
})


const port=process.env.PORT||5000
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})