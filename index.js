import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import HandlerError from './middleware/HandlerError.js'
import NotFound from './middleware/NotFound.js'
import route from './router/routes.js'
import bodyParser from 'body-parser'


const app = express()

app.use(cors())
app.use(bodyParser.json())
dotenv.config()

const { MONGO_DB_URI, PORT } = process.env
const port = PORT || 3000
const connectionString =  MONGO_DB_URI

mongoose
  .connect(connectionString)
  .then(() => {
    console.log('DB connected')
    app.listen(port, () => console.log(`Server running on port ${PORT}`))
  })
  .catch(err => console.log(err))

app.use('/api/badges', route)
app.use(HandlerError)
app.use(NotFound)

// app.get('/', () => {
//   return `
//     <h1>GET  <a href="/api/badges"></a></h1>
//     <h1>POST <a href="/api/badges"></a></h1>
//   `
// })

export default app
