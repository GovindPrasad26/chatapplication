const {MongoClient}=require('mongodb')

const mongoclient = new MongoClient(process.env.MONGO_URL)


 async function ConnectionData(collectionName){
await mongoclient.connect();

 const db=mongoclient.db('chatdude')
 const collection =db.collection(collectionName)
 return collection
     
}
module.exports=ConnectionData;