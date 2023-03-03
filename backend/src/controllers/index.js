const { addUser, findUserById, findUserByEmail, updateUser } = require('../database/dbHandler')

const jwt = require('jsonwebtoken')

const postUser = async (req, res) => {
  const { name, password } = req.body

  const user = await findUserByEmail(name)

  if (user && user.password === password) {
    const token = jwt.sign({ _id: user._id }, 'jwt_secret')

    return res.status(200).json({ message: 'Login was successfull.', token })
  }

  const { _id } = await addUser(name, password)

  const token = jwt.sign({ _id }, 'jwt_secret')

  res.status(201).json({ message: 'User created successfully.', token })
}

const getUser = async (req, res) => {
  const user = await findUserById(req.id)

  res.status(200).json(user)
}

const putUser = async (req, res) => {
  const { key, newToDos } = req.body

  await updateUser(req.id, key, newToDos)

  res.status(200).json({ message: 'User updated successfully.' })
}

module.exports = {
  postUser,
  getUser,
  putUser
}
