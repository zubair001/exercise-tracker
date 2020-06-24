const mongoose = require('mongoose');
const Schema= mongoose.modelSchemas;

const userSchema= new Schema({
    username: {
        type: String;
require: true;
unique: true;
trim: true;
minlength: 3;
},
}, {
   timestamps: true;
});