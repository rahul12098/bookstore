const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://admin:rahul2001@cluster0.nv0ueoz.mongodb.net/test"
    )
    .then(() => console.log("connection successfull"))