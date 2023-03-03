const UserModel = require('./UserModel')

const addUser = async (name, password) => UserModel.create({ name, password, toDos: [], doneTasks: [] })

const findUserById = async (id) => UserModel.findById(id)

const findUserByEmail = async (name) => UserModel.findOne({ name })

const updateUser = async (_id, key, newToDos) => UserModel.updateOne({ _id }, { [key]: newToDos })

module.exports = {
  addUser,
  findUserById,
  findUserByEmail,
  updateUser
}
