const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect('mongodb://mongo:27017', { user: 'root', pass: 'example' })

  const db = mongoose.connection

  db.once('open', () => console.log('Connected to MongoDB.'))
  db.on('error', (err) => console.log(err))
}
