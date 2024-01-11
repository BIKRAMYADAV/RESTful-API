const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    }
})

const blog = mongoose.model('Blog', blogSchema);

module.exports = blog