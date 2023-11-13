const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
  userid: String,
  videoid: String,
  comment_title: String,
  comment: String,
  Upvotes: Number,
  Downvotes: Number,
  Timestamp: Date
})
module.exports = mongoose.model('Comments', commentSchema)
