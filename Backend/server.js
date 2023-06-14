const express=require('express')
const app=express()
const dotenv=require('dotenv').config();
const user=require('./Routes/UserRoutes')
const mongo=require('mongoose');
app.use("/api/",[user])

app.listen(process.env.PORT_NUMBER,()=>{

    console.log('Port is Listening',+ process.env.PORT_NUMBER);
    (async function(){
        try {
            await mongo.connect(process.env.MONGO_URL)
            console.log("Db connection established")
        } catch(err){
            console.log(err)
        }
    })()
})