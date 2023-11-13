const mongoose = require('mongoose')
const videoMetadataSchema = new mongoose.Schema({
  // TODO: Need to change schema later
  Userid: Number,
  title: String,
  thumbnail: Buffer,
  Timestamp: Date,
  Views: Number,
  data: Buffer,
  upvotes: Number,
  downvotes: Number
})
module.exports = mongoose.model('VideoMetadata', videoMetadataSchema)
