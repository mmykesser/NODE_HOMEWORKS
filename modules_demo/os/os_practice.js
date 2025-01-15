const os = require('os');

console.log('My system platform:', os.platform());
console.log('Total memory:', os.totalmem());
console.log('Free memory:', os.freemem());
console.log('System up time in seconds:', os.uptime());