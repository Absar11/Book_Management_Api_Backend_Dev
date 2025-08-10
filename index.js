const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnect = require("./config/db");
const bookRouter = require("./routes/bookRouter");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/v1/book", bookRouter);

dbConnect();

app.listen(PORT, () => {
  console.log("App is listing on Port : ", PORT);
});
