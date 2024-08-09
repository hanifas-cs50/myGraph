const express = require("express")
const {
  createData, getAllData, deleteData, updateData
} = require("../controllers/dataController")

const router = express.Router()

router.get("/", getAllData)

router.post("/", createData)

router.delete("/:id", deleteData)

router.patch("/:id", updateData)

module.exports = router