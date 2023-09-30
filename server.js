const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db.js");
const vendorRoutes=require("./routes/Vendors.js")


const app = express();
const port = process.env.PORT;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use("/api",vendorRoutes);


app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

connectDB();

app.listen(port, () => {
  console.log(`Backend is running at http://localhost:${port}`);
});
