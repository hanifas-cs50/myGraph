const Data = require("../models/dataModel")
const mongoose = require("mongoose")

const getAllData = async (req, res) => {
  const datas = await Data.find({}).sort({ createdAt: -1 })

  res.status(200).json(datas)
}

const createData = async (req, res) => {
  const { user, color, flavour, eatVeggie } = req.body

  try {
    const data = await Data.create({ user, color, flavour, eatVeggie })
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteData = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" })
  }

  const data = await Data.findOneAndDelete({ _id: id })

  if (!data) {
    return res.status(404).json({ error: "No such workout" })
  }

  res.status(200).json(data)
}

const updateData = async (req, res) => {
  const { id } = req.params
  const { color, flavour, eatVeggie } = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" })
  }

  const data = await Data.findByIdAndUpdate({ _id: id }, {
    color, flavour, eatVeggie
  })

  if (!data) {
    return res.status(404).json({ error: "No such workout" })
  }

  res.status(200).json(data)
}

module.exports = {
  createData, getAllData, deleteData, updateData
}