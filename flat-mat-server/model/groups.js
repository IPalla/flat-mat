var mongoose = require('mongoose');
// Define schema
var Schema = mongoose.Schema;

var GroupSchema = new Schema({
  name: String,
  admin: { type: Schema.Types.ObjectId, ref: 'UserModel' },
  users: [{ type: Schema.Types.ObjectId, ref: 'UserModel' }]
});

// Compile model from schema
module.exports = mongoose.model('GroupModel', GroupSchema );
