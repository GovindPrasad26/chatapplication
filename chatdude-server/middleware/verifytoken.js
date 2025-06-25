// const jwt = require('jsonwebtoken')

// // const secret_key ='abcdefghkijnkvetnornf'
// const secret_key = process.env.JWT_SECRET || 'abcdefghkijnkvetnornf';
// const verify =(req,res,next)=>{
//     if(req.headers["authorization"] === undefined){
//         console.log(req.headers)
//           res.send({
//               ok:'false',
//               error:'token is missing'
//           })
//         }else{

//             const tokens = req.headers.authorization.slice(7)
//                jwt.verify(tokens, secret_key, (error,data)=>{
             
//                if(error){
//                 res.send({
//                     ok:false,
//                     error:'token is Invalid',
//                 })
//                }else{
//                 req.userdata=data;
//                 console.log(data,'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
//                next()
//                }
//             })
//         }}
//         module.exports=verify

const jwt = require("jsonwebtoken");

const secret_key = process.env.JWT_SECRET || "abcdefghkijnkvetnornf";

const verify = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("Missing or malformed token:", req.headers);
    return res.status(401).json({
      ok: false,
      error: "Token is missing or malformed",
    });
  }

  const token = authHeader.slice(7); // Remove "Bearer "

  jwt.verify(token, secret_key, (error, data) => {
    if (error) {
      return res.status(403).json({
        ok: false,
        error: "Token is invalid",
      });
    }

    req.userdata = data;
    console.log("✅ Token verified:", data);
    next();
  });
};

module.exports = verify;
