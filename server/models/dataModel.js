const mongoose = require("mongoose")

const Schema = mongoose.Schema

const dataSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  flavour: {
    type: String,
    required: true
  },
  eatVeggie: {
    type: Boolean,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model("Data", dataSchema)