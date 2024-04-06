import Badge from '../models/Badge.js'

export const init = async (req, res) => {
  try {
    res.json(`
    <h1>GET  <a href="/api/badges/getAll"></a></h1>
    <h1>POST <a href="/api/badges/create"></a></h1>
  `)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const fetch = async (req, res) => {
  try {
    const badges = await Badge.find()
    res.status(200).json(badges)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const fetchId = async (req, res) => {
  try {
    const id = req.params.id
    const badges = await Badge.findById(id)
    res.status(200).json(badges)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

// badgeRouter.get('/:id', async (req, res) => {
//   const id = req.params.id
//   const badge = await Badge.findById(id)
//   res.json(badge)
// })

export const create = async (req, res) => {
  try {
    const badgeData = new Badge(req.body)
    const saveBadge = await badgeData.save()
    res.status(200).json(savedBadge)
  } catch (error) {
    res.status(500).json(error)
  }
}

// const badgeData = new Badge(req.body)
// const saveBadge = await badgeData.save()

// badgeRouter.post('/', async (req, res) => {
//   const badge = new Badge(req.body)
//   const savedBadge = await badge.save()
//   res.status(201).json(savedBadge)
// })

export const update = async (req, res) => {
  try {
    const id = req.params.id
    const newBadge = req.body

    Badge.findByIdAndUpdate(id, newBadge, { new: true }).then(result => {
      res.json(result)
    })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

// badgeRouter.put('/:id', async (req, res, next) => {
//   const id = req.params.id
//   const newBadge = req.body

//   Badge.findByIdAndUpdate(id, newBadge, { new: true })
//     .then(result => {
//       res.json(result)
//     })
//     .catch(err => next(err))
// })

export const remove = async (req, res) => {
  try {
    const id = req.params.id

    await Badge.findByIdAndDelete(id)
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

// badgeRouter.delete('/:id', async (req, res, next) => {
//   const id = req.params.id

//   await Badge.findByIdAndRemove(id)
//   res.status(204).end()
// })

// module.exports = badgeRouter
