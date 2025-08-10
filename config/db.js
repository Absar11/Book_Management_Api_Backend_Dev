const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully");
  } catch (e) {
    console.error("Error in Database Connection");
  }
};

module.exports = dbConnect;
