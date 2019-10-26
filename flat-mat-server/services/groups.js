const groupModel = require('../model/groups');

function getUserGroups(userId){
     return groupModel.getUserGroups(userId);
}

function createGroup(groupName, adminId){
    return groupModel.createGroup(groupName, adminId);
}

module.exports = {
    getUserGroups,
    createGroup
}