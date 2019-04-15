const grabLeadsStatus = require('./grabLeadsStatus');
const DiySearchHistory = require('./DiySearchHistory');
const login = require('./login');
const handlelogin = require('./handlelogin');
const GetDeviceInfoByUserName = require('./GetDeviceInfoByUserName');
const Enable = require('./Enable');

//  抛出所有的参数
module.exports = {
  grabLeadsStatus,
  DiySearchHistory,
  login,
  handlelogin,
  GetDeviceInfoByUserName,
  Enable
}