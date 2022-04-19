//require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io");

const corsOptions = {
  origin:'*', 
  credentials:true,            
  optionSuccessStatus:200,
}
//database connection
const db = require('./config/mongoose');

app.use(express.json());
app.use(cors(corsOptions));
app.use("/", require("./routes"));


const PORT = process.env.PORT || 8080;
server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server up & running!");
});
