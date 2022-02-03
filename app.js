require('dotenv').config();
const express = require('express');
const cors = require("cors")
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("connection succesfull ");
}).catch((err)=>console.log(err));

 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/Uploads", express.static(__dirname+"/Uploads"))

app.use(require("./Routes/authRoutes"))
app.use(require("./Routes/postRoutes"))

app.get("/", (req, res)=>{
    res.send("Welcome to Social Web API")
})

app.listen(PORT, () => {
    console.log("server started at port "+PORT);
})