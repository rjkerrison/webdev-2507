const http = require('http')

const server = http.createServer((request, response) => {
  console.log('REQUESTED URL', request.url)

  if (request.url.includes('cinderella')) {
    response.write('<h1>A dream is a wish your heart makes</h1>')
  }

  if (request.url.includes('pinocchio')) {
    response.write('<h1>When you wish upon a star</h1>')
  }

  response.write("<h1>It's a small world</h1><p>after all</p>")

  response.end()
})

server.listen(3001)
