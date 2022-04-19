require("dotenv").config();
const mongoose = require("mongoose");
const uri = 'mongodb+srv://praneet:test123@cluster0.fhfs8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
console.log('here');
mongoose
  .connect(uri)
  .then(() => {
    console.log("successfully connected to db!");
  })
  .catch((e) => {
    console.log(e);
  });
