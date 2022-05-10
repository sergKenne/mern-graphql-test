const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URL = "mongodb+srv://graphql:1234graphql@graphql.tkovc.mongodb.net/graphql?retryWrites=true&w=majority"
const dbConnect = () => {
    mongoose.connect(MONGO_URL, (err) => {
        if (err) {
            console.log("connection to DB failure ");
        } else {
            console.log("database connected successfuly");
        }
    })
}

module.exports = dbConnect;
