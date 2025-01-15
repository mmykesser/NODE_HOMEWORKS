const crypto = require('crypto');

const hash = crypto.createHash('sha256').update('Hello Maksym').digest('hex');


console.log('Crypto Hash:', hash)