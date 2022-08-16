const mongoose = require('mongoose');

const userSchema= new mongoose.Schema(
    {
    name: String,
    age: Number,
}
)
module.exports = mongoose.model('User',userSchema)

//Mongodb Connection
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://savitha:<password>@cluster0.hqfgfno.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log('connected');
//   // listdb(client);
//   client.close();
// });
//  function listdb(client) {
//   const dblist =  client.db().admin().listDatabases();
//   console.log(dblist);