const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = Mock.mock({
  code: 200,
  message: 'ok',
  data: {}
});
