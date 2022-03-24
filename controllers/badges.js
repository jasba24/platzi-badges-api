const badgeRouter = require('express').Router()
const Badge = require('../models/Badge')

badgeRouter.get('/', async (req, res) => {
  const badges = await Badge.find({})
  res.json(badges)
})

badgeRouter.post('/', async (req, res) => {
  const badge = new Badge(req.body)
  const savedBadge = await badge.save()
  res.status(201).json(savedBadge)
})

badgeRouter.put('/:id', async (req, res, next) => {
  const id = req.params.id
  const newBadge = req.body

  Badge.findByIdAndUpdate(id, newBadge, {new: true}).then(result => {
    res.json(result)
  }).catch(err => next(err))
})

badgeRouter.delete('/:id', async (req, res, next) => {
  const id = req.params.id

  await Badge.findByIdAndRemove(id)
  res.status(204).end()
})

module.exports = badgeRouter
