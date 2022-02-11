const badgeRouter = require('express').Router()
const Badge = require('../models/Badge')

badgeRouter.get('/', async (req, res) => {
  const badges = await Badge.find({})
  res.json(badges)
})

badgeRouter.post('/', async (req, res) => {
  const badge = new Badge(req.body)
  const savedBadge = await badge.save()
  res.json(savedBadge)
})

module.exports = badgeRouter
