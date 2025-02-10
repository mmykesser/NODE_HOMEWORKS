const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({message: "No token provided"});
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || !/^Bearer$/i.test(parts[0])) {
        return res.status(401).json({message: "Invalid token format"});
    }

    const token = parts[1];

    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({message: "Invalid token"});
        }
        req.userId = decoded.id;
        next();
    });
};