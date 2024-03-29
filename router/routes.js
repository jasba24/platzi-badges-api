import express from 'express'

import {
  init,
  fetch,
  fetchId,
  create,
  update,
  remove
} from '../controllers/badges.js'

const route = express.Router()

route.get('/home', init)
route.get('/getAll', fetch)
route.get('/:id', fetchId)
route.post('/create', create)
route.put('/:id', update)
route.delete('/:id', remove)

export default route
