// server.js

const jsonServer = require('json-server');
const bodyParser = require('body-parser');

const db = require('./db');
const routes = require('./routes');

const port = 3000;

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const rewriter = jsonServer.rewriter(routes);

server.use(middlewares);
server.use(bodyParser.urlencoded({ extended: false }))

// post 请求转换成 get 请求
server.use((request, res, next) => {
  console.log(request.body, 'request.data');
  request.method = 'GET';
  next();
});

server.use(rewriter);  // rewriter 一定要在 router 设置之前
server.use(router);

server.listen(port, () => {
  console.log('open mock server at http://localhost:'+ port);
});
