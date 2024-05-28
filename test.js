const http = require('http')
const server = http.createServer((request, response) => {
    if (request.url === '/' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html')
        response.write('<h1>Enter input</h1>')
        response.write('<html><head><title></title></head><body><form action="/input" method="post"><input type="text" placeholder="Enter something"/><input type="submit" value="send"/></form></body></html>')
        return response.end()
    }
    if (request.url === '/input' && request.method === 'POST') {
        const body=[]
        request.on('data',(chunk)=>{
            body.push(chunk)
        })
        request.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString()
            console.log(parsedBody)
        })
        response.statusCode=302
        response.end()
    }
})
server.listen(8000)

