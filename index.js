require('dotenv').config()
require('./mongo')

const express = require('express')
const cors = require('cors')
const badgesRouter = require('./controllers/badges')
const HandlerError = require('./middleware/HandlerError')
const NotFound = require('./middleware/NotFound')

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", () => {
  return `
    <h1>GET  <a href="/api/badges"></a></h1>
    <h1>POST <a href="/api/badges"></a></h1>
  `
})

app.use('/api/badges', badgesRouter)
app.use(HandlerError)
app.use(NotFound)

const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
)
module.exports = { app, server }
