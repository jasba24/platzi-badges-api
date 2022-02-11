const supertest = require('supertest')
const { app } = require('../index')
const api = supertest(app)

const initialBadges = [
  {
    firstName: 'Garland',
    lastName: 'Nikolaus',
    email: 'Hazle_Botsford@hotmail.com',
    jobTitle: 'Human Implementation Analyst',
    twitter: 'GarlandNikolaus15225',
    avatarUrl:
      'https://www.gravatar.com/avatar/c9697599c671bfd01b1366da66645659?d=identicon'
  },
  {
    firstName: 'Magdalena',
    lastName: 'Haag',
    email: 'Devonte95@gmail.com',
    jobTitle: 'Regional Factors Technician',
    twitter: 'MagdalenaHaag66831',
    avatarUrl:
      'https://www.gravatar.com/avatar/534ff8f764fc41b3684045f8e3cd4c44?d=identicon'
  },
  {
    firstName: 'Tina',
    lastName: 'Rice',
    email: 'Kevin_Mayert@gmail.com',
    jobTitle: 'International Mobility Developer',
    twitter: 'TinaRice24287-3057',
    avatarUrl:
      'https://www.gravatar.com/avatar/1bde2e34d479b516e7bc4b01672676b7?d=identicon'
  }
]

module.exports = { api, initialBadges }
