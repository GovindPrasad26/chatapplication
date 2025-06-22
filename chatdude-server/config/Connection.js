const {MongoClient}=require('mongodb')

const mongoclient = new MongoClient('mongodb://localhost:27017')


 async function ConnectionData(collectionName){
await mongoclient.connect();

 const db=mongoclient.db('chatdude')
 const collection =db.collection(collectionName)
 return collection
     
}
module.exports=ConnectionData;