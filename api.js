const http = require('http');

const routes = {
  'get:/contacts': (request, response) => {
    response.write('contact us page');
    return response.end()
  },
  default: (request, response) => {
    response.write('Hello word!')
    return response.end();
  }
}

const handler = function (request, response) {
  const { url, method } = request;
  const routeKey = `${method.toLowerCase()}:${url}`

  console.log(routeKey)

  const chosen = routes[routeKey] || routes.default;

  response.writeHead(200, {
    'Content-Type': 'text/html',
  })

  return chosen(request, response);
}

const app = http.createServer(handler)
  .listen(3000, () => console.log('\n\napp running at 🚀', 3000))


module.exports = app;