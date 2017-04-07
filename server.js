const http = require('http')
const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node Server!');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('badness', err);
  }

  console.log(`server is listening on ${port}`)
})
