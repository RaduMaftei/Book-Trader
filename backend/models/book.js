const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  tradingPreferenceList: { type: String },
  imagePath: { type: String, required: true},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  username: { type: String, required: true },
  location: { type: String, required: true }
})

module.exports = mongoose.model('Book', bookSchema)
