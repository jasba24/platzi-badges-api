import mongoose from 'mongoose'

const badgeSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  firstName: String,
  lastName: String,
  email: String,
  jobTitle: String,
  twitter: String,
  avatarUrl: String
})

// badgeSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
//})

const Badge = mongoose.model('Badge', badgeSchema)

export default Badge
