const path = require("path");

const pathFile = 'modules_demo//path/testFolder//testPath/test.txt';

console.log('Normalize Path:', path.normalize(pathFile));
console.log('File extension:', path.extname(pathFile));


