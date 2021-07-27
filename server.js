const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json --delay=2000');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(function (req, res, next) {
  setTimeout(next, 2000);
});

server.use(middlewares);
server.use(router);

server.listen(port);