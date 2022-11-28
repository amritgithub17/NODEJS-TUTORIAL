const http = require('http');

const port = process.env.PORT || 8001;
 
const server = http.createServer((req,res) => {
    res.statusCode = 200; //depicts ok . If 400 then page not found . 500 - Server Error
    res.setHeader('Content-Type','text/html'); //the server will send the response as a HTML file
    res.end('<h1>This is Amrit </h1> <p>Since we have set Header as a HTML file so this file willbe returned</p>');
    // res.end("This is a plain text <h1> Hello </h1>");
    console.log(req.url);

})

server.listen(port,() =>
{
    console.log(`Server is running on port ${port}`); //backticks  - " ` " is used to edit some predefined variable in JS.
});
