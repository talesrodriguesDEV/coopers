const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  email: String,
  password: String,
  todos: [String],
  doneTasks: [String]
})

module.exports = model('User', userSchema)
