require('dotenv').config();
const mongoose = require('mongoose');




const db = process.env.DATABASE

mongoose.connect(db).then(()=>{
    console.log('Database Connected')
}).catch((error)=>{
    console.log('Failed to connect to Database: ' + error.message)
});