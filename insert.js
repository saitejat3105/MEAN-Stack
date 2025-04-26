var mongoose=require("mongoose");
mongoose.set("strictQuery",false);
mongoose.connect("mongodb://127.0.0.1:27017/demo")
.then(() =>console.log("Database connected"))
.catch((Error) =>console.log("Error"));
const demo123=mongoose.Schema({
name:String,
ID:Number,
address:String,
});
const CustomerData=mongoose.model("demo1",demo123);
console.log("Collection created");
const c1=new CustomerData({
name:"Anand",
ID:"101",
address:"vijayawada",
});
const c2=new CustomerData({
name:"jaahnavi",
ID:"102",
address:"gudivada",
});
const c3=new CustomerData({
name:"priya",
ID:"102",
address:"guntur",
});
const c4=new CustomerData({
name:"Sai",
ID:"102",
address:"vijayawada",
});
const c5=new CustomerData({
name:"AnandSai",
ID:"105",
address:"vizag",
});
c1.save();
c2.save();
c3.save();
c4.save();
c5.save();
console.log("Data Inserted sucessfully");