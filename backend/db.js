const mongoose = require("mongoose");
const { string, boolean } = require("zod");
require('dotenv').config()

//Not to be commied and put in env file
mongoose.connect(process.env.A);

const todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoschema);

module.exports = {
    todo
}