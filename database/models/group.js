const { Schema } = require('mongoose')

const groupSchema = Schema({
  group_id: {
    type: Number,
    index: true,
    unique: true,
    required: true
  },
  title: String,
  username: String,
  invite_link: String,
  memberCount: Number,
  settings: {
    locale: String,
    quote: {
      backgroundColor: {
        type: String,
        default: '#1b1429'
      }
    },
    rate: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: true
    },
    privacy: {
      type: Boolean,
      default: false
    },
    randomQuoteGab: {
      type: Number,
      default: 300
    },
    emojiSuffix: {
      type: String,
      default: 'random'
    }
  },
  stickerSet: {
    name: String,
    create: {
      type: Boolean,
      default: false
    }
  },
  topSet: {
    name: String,
    create: {
      type: Boolean,
      default: false
    },
    lastUpdate: Date,
    stickers: [{
      quote: {
        type: Schema.Types.ObjectId,
        ref: 'Quote'
      },
      fileId: String,
      fileUniqueId: String
    }]
  },
  lastRandomQuote: {
    type: Date,
    default: Date()
  },
  available: {
    check: Boolean,
    active: Boolean
  }
}, {
  timestamps: true
})

module.exports = groupSchema
