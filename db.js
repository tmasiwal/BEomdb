const mongoose = require("mongoose");
require("dotenv").config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URl);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};
mongoose.set("debug", true);

module.exports = connect;
