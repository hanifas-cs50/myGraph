require("dotenv").config()

const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const dataRoutes = require("./routes/dataRoutes")

// express app
const app = express()

// middleware
const corsOptions = {
  origin: "https://hanifmygraph-m9b1i112u-hanifascs50s-projects.vercel.app/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false
}

// middleware
app.use(cors(corsOptions));
app.use(express.json())

// routes
app.use("/api/data", dataRoutes)

// connect to db
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listening on port ${process.env.PORT}!!!`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
