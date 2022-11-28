const path = require('node:path');

const a = path.basename('C:\\temp\\myfile.html'); //basenme of this path is  ;myfile.html
const a1 = path.dirname('C:\\temp\\myfile.html'); // shows the dirctory name : C:\\temp
const a3=path.extname(__filename); //will return the type of my current file ; ".js"
console.log(a3);
console.log(a);
console.log(a1);