const express =require('express')
const route =express.Router()
const jwt =  require('jsonwebtoken')
const verifytoken =require("../middleware/verifytoken")
const secret_key ='abcdefghkijnkvetnornf'
const ConnectionData =require('../config/Connection')
const { ObjectId } = require('mongodb')


route.post('/signup',async(req,res)=>{
    const users =req.body
  const collection = await ConnectionData('chats')
  
const store= await collection.insertOne(users)
if(store==null){

    res.send({
        ok:false,
        result:' failed to insert success'
    })
}else{
    res.send({
        ok:true,
        result:'insertsuccesfully'
    })
}

})


route.post('/login',async(req,res)=>{
    const users =req.body
  const collection = await ConnectionData('chats')
      console.log("Login route hit");

const store= await collection.findOne(users)
if(store==null){

    res.send({
        ok:false,
        result:' users does not exist' 
    })
}else{
    const token =jwt.sign(store,secret_key)
    res.send({
        ok:true,
        result:token,
    })
}

})


route.get('/username',verifytoken,(req,res)=>{
  res.send({
        ok:true,
        data:req.userdata,
    })
   })


route.get("/getAllUsersChats",verifytoken,async(req,res)=>{
    try{
   const chats = await ConnectionData('chats')
   console.log(req.userdata._id,'exected')
   var data= await chats.find( {_id:{ $ne: new ObjectId(req.userdata._id) }}).toArray();
   console.log(data,'exected')
 res.send({
    ok:true,
    result:data
   })
    }catch (error){
      res.send({
        ok:false,
        error:error,
      })
    }
  })





module.exports=route