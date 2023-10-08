const express = require('express');
const { Db } = require('mongodb');
// const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// //Mongoose setup
const PORT = 3001;
mongoose.connect("mongodb://localhost:27017")
    .then(() => {
        const nativeConnetion =  MongooseNode.connections[0]

//now call the list databases function
    new Admin(nativeConnetion.db).listDatabases(function(err, results){
        console.log(results)  //store results and use
    });
        console.log("MondoDB connected")
    })
    .catch(error => console.log('Server error'));


const MONGO_URL="mongodb://127.0.0.1:27017/guvidb"
const mongoose = require('mongoose')

const connection = async () => {
    await mongoose.connect(MONGO_URL)

    console.log("Mongodb is connected")
}

connection();

const dataSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    address:Object
})

const Data=mongoose.model("data",dataSchema);

app.get('/data',async(req,res)=>{
    const data=await Data.find()
    res.send(data)
})

app.listen(PORT, () => {
    console.log(`Server Port : ${PORT}  Connected`)
})