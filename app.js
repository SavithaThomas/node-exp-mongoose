const express = require('express');
const mongoose = require('mongoose');
const User = require('./User');
var router = express.Router();
const app = express();
app.listen(3000);
app.set('view engine', 'ejs');
mongoose.connect("mongodb://127.0.0.1:27017/test",()=> console.log('connected'))
 
create()
update()
deluser()
//findUser()

async function create() {  
const user= await User.create({name:"Smith",age:30});
await user.save()
console.log(user)
}
 
async function update() {
const filter = { name: 'Deepak' };
const update = { age: 50 };
const user= await User.findOneAndUpdate(filter,update)
console.log(user)
}
 
async function deluser() {
const user=await User.deleteMany({name:"Smith"})
console.log(user)
}

async function finduser() {
const user = await User.findById("62f5da089e4f017dfb02c110")
console.log(user)
}

app.get('/',(req,res) => {
  User.find((err, docs) => {
    if (!err) {
      res.render('home', {
        data:docs
      });
    } else {
        console.log('Failed to retrieve the data: ' + err)
    }
});
});






