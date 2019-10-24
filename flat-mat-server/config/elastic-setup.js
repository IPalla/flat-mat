var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
   hosts: [ 'http://elastic:changeme@elasticsearch:9200']
});

// client.indices.create({
//     index: 'users'
// }, function(err, resp, status) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("create", resp);
//     }
// });

function newUserAdded(userData){
    client.index({
        index: 'users',
        type: 'newUser',
        body: {
            "creationDate": new Date(),
            "mongoId": userData._id,
            "event": "newUser",
            "photo": userData.photo,
            "fullData": userData
        }
    }, function(err, resp, status) {
        console.log('KIBY');
        console.log(err);
        console.log(resp);
        console.log(status);
    });
}

async function getAllUsers(){
    await client.indices.refresh({ index: 'users' });
    return await client.search({
        index: 'users',
        type: 'newUser',
        body: {
            query: {
                match: {
                }
            }
        }
    });
}

module.exports = {
    newUserAdded,
    getAllUsers
}