const GroupSchema = require('../model/groups');

function getGroupById(groupId){
    console.log('Getting Group: ' + groupId);
    return GroupSchema.findById(groupId).populate('users').then((grp, err)=>{
        if (err) return undefined;
        return grp;
    });
}

function createGroup(groupName, adminId){
    return new GroupSchema({name: groupName, admin: adminId, users: [adminId]})
    .save().then((grp, err)=>{
        if (err) return undefined;
        return grp;
    });
}

module.exports = {
    getGroupById,
    createGroup
}