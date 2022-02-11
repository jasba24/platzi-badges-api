const mongoose = require('mongoose')
const { server } = require('../index')
const Badge = require('../models/Badge')
const { initialBadges, api } = require('./helpers')

beforeEach(async () => {
  await Badge.deleteMany()

  for (const badge of initialBadges) {
    const badgeObject = new Badge(badge)
    badgeObject.save()
  }
})

describe('GET badges', () => {
  test('returned as json', async () => {
    await api
      .get('/api/badges')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
})

afterAll(async () => {
  mongoose.connection.close()
  server.close()
})
