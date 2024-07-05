const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usermodel = require("./models/users");
const app = express();

app.use(
  cors({
    origin: ["https://interactive-charts-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

mongoose.connect(
  "mongodb+srv://jayanth8088:NvPXNJuYjbwu0f6x@cluster0.ceofnct.mongodb.net/Importing_DB?retryWrites=true&w=majority&appName=Cluster0/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get("/", async (req, res) => {
  try {
    const users = await usermodel.find({}).limit(100);
    console.log(users);
    res.json(users);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
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
