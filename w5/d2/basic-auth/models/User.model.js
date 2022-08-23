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
    },
    password: Schema.Types.String,
    phoneNumber: Schema.Types.Number,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const User = model('User', userSchema)

module.exports = User
