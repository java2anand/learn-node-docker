const path = require('path');
const notes = './assets/sample.pdf';

console.log(path.dirname(notes)); // /users/joe
console.log(path.basename(notes)); // notes.txt
console.log(path.extname(notes)); // .txt

