const express=require('express')
const mongoose=require('mongoose')
const app = express()
const dotenv=require('dotenv')
const routeUrls=require('./routes/routes')
const cors=require('cors')

dotenv.config()

mongoose.connect(process.env.MONGOOSE_URL)

app.use(cors())
app.use(express.json())
app.use("/app",routeUrls)
app.listen(4000,()=>{console.log('server is up')})
