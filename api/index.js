import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import HandlerError from '../middleware/HandlerError.js'
import NotFound from '../middleware/NotFound.js'
import route from '../router/routes.js'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json())
dotenv.config()

const PORT = process.env.PORT || 3005

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log('DB connected')
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    )
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
