//require express and cors
const express = require ('express');
const cors = require('cors');
const mongoose= require('mongoose');

//environment variable in dotenv file
require('dotenv').config();

//create the express server and define port number
const app= express();
const port= process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//connect database
const uri = process.env.ATLAS__URI;
console.log(uri);
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//require route file
const exerciseRouter= require('./routes/exercises');
const userRouter= require('./routes/user.js');

//route
app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);


//start the server listening in port
app.listen(port, ()=> {
    console.log(`Server is running in port: ${port}`);
});