const http = require('http');
const fs = require('fs')
const port = process.env.PORT || 3001;
 
const server = http.createServer((req,res) => {
    
    res.setHeader('Content-Type','text/html'); 
    // res.end('<h1>This is Amrit </h1> <p>Since we have set Header as a HTML file so this file willbe returned</p>');

    if(req.url == '/')
    {
        res.statusCode = 200; 
        const data  = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if(req.url == '/about')
    {
        res.statusCode = 200; 
        res.end('<h1> This is About page </h1> <p> You are on about page</p>')
    }
    else 
    {
        // res.harry();
        res.statusCode =404;
        res.end('Not Found');
    }

})

server.listen(port,() =>
{
    console.log(`Server is running on port ${port}`); 
});
