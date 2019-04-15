const Mock= require('mockjs');

module.exports = Mock.mock({
  code: 200,
  "data|3": [
    {
    "id|+1": 1,
    "title": '@cparagraph(3, 5)'
    }
  ],
  msg: "ok"
});
