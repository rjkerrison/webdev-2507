const { Schema, model } = require('mongoose')

const messageSchema = new Schema(
  {
    content: {
      type: Schema.Types.String,
      maxLength: 255,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const Message = model('Message', messageSchema)

module.exports = Message
