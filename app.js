const mongoose=require("mongoose")
const morgan=require("morgan")
const Blog=require("./UserSchema")
require("process").config()
const dburl=process.env.mongodb
const express=require("express")
const blog = require("./UserSchema")
const app=express()
app.use(morgan("dev"))
mongoose.connect(dburl)

app.get("/",(req,res)=>{
const blog= new Blog({
    title:"old things shall pass away",
    author:"adamo kehinde",
    description:"this book is meant for reading",
    read_count:3,
    read_timing:2,
    body:"this s the best book i have ever read in my life"
})
})
app.get("/",(req,res)=>{

const blog=new Blog({
    title:"jeee"
})
blog.save()
})
app.listen(3000)