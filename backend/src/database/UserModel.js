const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: String,
  password: String,
  toDos: [String],
  doneTasks: [String]
})

module.exports = model('User', userSchema)
