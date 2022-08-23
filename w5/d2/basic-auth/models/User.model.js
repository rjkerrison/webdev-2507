const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: Schema.Types.String,
      unique: true,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    email: {
      type: Schema.Types.String,
      required: true,
    },
    password: { type: Schema.Types.String, required: true },
    phoneNumber: Schema.Types.Number,
    role: {
      type: Schema.Types.String,
      enum: ['admin', 'user'],
      default: 'user',
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const User = model('User', userSchema)

module.exports = User
