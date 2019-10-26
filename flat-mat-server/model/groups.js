var mongoose = require('mongoose');
// Define schema
var Schema = mongoose.Schema;

var GroupSchema = new Schema({
  name: String,
  admin: { type: Schema.Types.ObjectId, ref: 'UserModel' },
  users: [{ type: Schema.Types.ObjectId, ref: 'UserModel' }]
});

let GroupModel = mongoose.model('GroupModel', GroupSchema );

function createGroup(groupName, adminId){
  return new GroupModel({name: groupName, admin: adminId, users: [adminId]})
  .save().then((grp, err)=>{
      if (err) return undefined;
      return grp;
  });
}

function getUserGroups(userId){
  console.log('Searching for groups with userId: ' + userId);
  return GroupModel.find({users: userId}).populate('users').populate('admin').then((grps, err)=>{
    if (err) return undefined;
    return grps;
});
}

module.exports = {
  createGroup,
  getUserGroups
}
