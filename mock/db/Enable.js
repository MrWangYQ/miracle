const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = Mock.mock({
  code: 200,
  message: 'ok',
  data: {
    token: 'qw23kew9dsknweiewn',
    mobile: '18610623450',
    password: 'e10adc3949ba59abbe56e057f20f883e',
  }
});
