const jwt = require('jsonwebtoken')

const secret_key ='abcdefghkijnkvetnornf'
const verify =(req,res,next)=>{
    if(req.headers["authorization"] === undefined){
        console.log(headers)
          res.send({
              ok:'false',
              error:'token is missing'
          })
        }else{

            const tokens = req.headers.authorization.slice(7)
               jwt.verify(tokens, secret_key, (error,data)=>{
             
               if(error){
                res.send({
                    ok:false,
                    error:'token is Invalid',
                })
               }else{
                req.userdata=data;
                console.log(data,'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
               next()
               }
            })
        }}
        module.exports=verify