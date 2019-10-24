const UserSchema = require('../model/users');
const elasticService = require('../config/elastic-setup');

function getUserById(userId){
    console.log('Getting user: ' + userId);
    return UserSchema.findById(userId).then((usr, err)=>{
        if (err) return undefined;
        return usr;
    });
}

function insertUser(user){
    return new UserSchema(user).save().then((usr, err)=>{
        if (err) return undefined;
        elasticService.newUserAdded(usr);
        return usr;
    });
}

function getAllUsers(){
    return elasticService.getAllUsers();
}

module.exports = {
    getUserById,
    insertUser,
    getAllUsers
}