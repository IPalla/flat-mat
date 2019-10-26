var jwt = require('jsonwebtoken');
const privateKey = 'thisismyverysecretkeyAh';

function generateToken(data){
    return jwt.sign({data}, privateKey, { expiresIn: '1h' });
}

function authRequest(req, res, next){
    const token = req.header('X-Authorization');
    if (!token) res.status(401).send({err: 'X Authorization header needed'});
    try {
        const decoded = jwt.decode(token, privateKey);
        if (!decoded) { throw 'Unable to verify token'};
        req.decoded = decoded;
        next();
    } catch (err) {
        res.status(401).send({msg: 'Token not verified', err});
    }
}

module.exports = {
    generateToken,
    authRequest
}

