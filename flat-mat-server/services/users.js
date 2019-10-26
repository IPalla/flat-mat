const userModel = require('../model/users');
const elasticService = require('../config/elastic-setup');

function getUserById(userId){
    console.log('Getting user: ' + userId);
    return UserSchema.findById(userId).then((usr, err)=>{
        if (err) return undefined;
        return usr;
    });
}

function insertGoogleUser(googleUser){
    return userModel.insertUser(googleUser.name, googleUser.picture, googleUser.email, undefined, googleUser.id).then(usr=>{
        elasticService.newUserAdded(usr);
        return usr;
    });
}

function findGoogleUser(googleId){
    return userModel.getUserByGoogleId(googleId);
}

function getAllUsers(){
    return userModel.findAllUsers();
}

module.exports = {
    getUserById,
    findGoogleUser,
    insertGoogleUser,
    getAllUsers
}