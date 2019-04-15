const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = Mock.mock({
  code: 200,
  msg: 'ok',
  data: {
    "current_time": Random.date('yyyy/MM/dd HH:mm:ss'),
    "start_time": Random.date('yyyy/MM/dd HH:mm:ss'),
    "type|1": ["warm", "ref"],
    "status|1": ['on', 'joined', 'ongoing']
  }
});
