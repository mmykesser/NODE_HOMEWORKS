const fs = require('fs');

fs.readFile('readme.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log('File contents:', data);
})

fs.writeFile('result.txt', 'Example text', (err) => {
    if (err) {
        console.log('Writing error', err)
    }
})

if (fs.existsSync('result.txt')){
    console.log('File exists')
} else {
    console.log('File does not exist')
}

fs.mkdir('testFolder', (err) => {
    if (err) {
        console.log('The folder already exists', err);
        return;
    }
    console.log('Folder has been created ')
})

