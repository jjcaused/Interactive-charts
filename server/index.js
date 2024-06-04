const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usermodel = require("./models/users");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://jayanth8088:NvPXNJuYjbwu0f6x@cluster0.ceofnct.mongodb.net/Importing_DB?retryWrites=true&w=majority&appName=Cluster0/"
);

app.get("/getData", async (req, res) => {
  try {
    const users = await usermodel.find({}).limit(100);
    console.log(users);
    res.json(users);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// app.post("/getDataNew", async (req, res) => {
//   try {
//     const userData = req.body;
//     const createdUser = await usermodel.create(userData);
//     res.json(createdUser);
//   } catch (err) {
//     console.error("Error fetching data:", err);
//   }
// });

app.listen(3001, () => {
  console.log("server is running");
});
