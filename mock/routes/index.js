// routes.js

const leadsStatus = require('./leadsStatus');
const DiySearchHistory = require('./DiySearchHistory');
const login = require('./login');
const handlelogin = require('./HandleLogin');
const GetDeviceInfoByUserName = require('./GetDeviceInfoByUserName');
const Enable = require('./Enable');

module.exports = {
  leadsStatus,
  DiySearchHistory,
  login,
  handlelogin,
  GetDeviceInfoByUserName,
  Enable
};
