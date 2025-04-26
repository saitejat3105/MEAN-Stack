const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/demo")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error", err));

const demo123 = mongoose.Schema({
  name: String,
  ID: Number,
  address: String,
});

const CustomerData = mongoose.model("demo1", demo123);

const CustomerDisplay = async () => {
  const result = await CustomerData.updateOne(
    { name: "priya" },
    { $set: { ID: 105 } }
  );
  console.log(result);
};

CustomerDisplay(); // ✅ Called once, correctly
