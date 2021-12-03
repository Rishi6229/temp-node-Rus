//we create a http const

const http = require('http');
const server = http.createServer((req , res) =>
{
    //we create a server const along with two callback functions
    //request to fetch the request and res to respond to it.
    if(req.url === '/')
    {
        res.end('welcome on board bitch!')
    }
    if(req.url === '/about')
    {
        console.log('Ek baar dekh record me kon hai!!')
    }
    res.end(
        `<h1> dhattt yrr</h1>
        <p>we can't seem to find the page
        <a href ="/">backHome</a>
        `
    )
})


server.listen(5000)