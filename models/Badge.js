const { Schema, model } = require('mongoose')

const badgeSchema = new Schema({
  id: Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  jobTitle: String,
  twitter: String,
  avatarUrl: String
})

badgeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Badge = model('Badge', badgeSchema)

module.exports = Badge
