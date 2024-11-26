import express from "express"
import cors from "cors"
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log("Database URL:", process.env.DATABASE_URL)
  console.log("Node Environment:", process.env.NODE_ENV)
  console.log("Database User:", process.env.DB_USER)
  console.log("Database Password:", process.env.DB_PASSWORD)
  console.log(`port listening on port: ${port}`)
})
