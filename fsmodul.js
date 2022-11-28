const fs = require('fs');

// const a = fs.readFileSync("file.txt");
// console.log(a.toString());
// console.log("Reading File");
 
// WRITE FILE - USED FOR WRIING A FILE
fs.writeFile("file2.txt","This is a new file created using writeFile Command",() =>
{
    console.log("File has been written");
}
)

const a= fs.writeFileSync("File5.txt","Thsis file is written using writeFileSync");
console.log(a,"File");
console.log("FIle written");