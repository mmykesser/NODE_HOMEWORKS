require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/myApp',
    jwtSecret: process.env.JWT_SECRET || 'my_secret_key',
}