const Mock= require('mockjs');

const { Random, mock } = Mock;

module.exports = mock({
  "message": "success",
  "code": 200,
  "timestamp": 3213213212,
  "data": {
    "id": 1,
    "nickName": "小华佗1",                     // 微信昵称
    "userName": "wxid_rijn090wlkd2",          // 微信号
    "password" : "#1232",                     // 手机密码
    "status" : 1,                             // 手机状态
    "useage" : 1,                             // 用途
    "liftedNum": 0,                           // #解封数量
    "friendNum"  : 5,                         // 好友数
    "groupNum": 1,                            // 群数量
    "groupOwnerNum": 1,                       // 群聊(群主)总数
    "phone" : "15212413312",                  // 手机号
    "bindSimTime" : "1722-12-12 12:12:12",    // 绑定日期
    "remark": "1234567",                      // 备注
    "location" : "1号机房,16货架,3号机位",      // 所在位置
    "assetCode" : "Pixel_00003-3324",         // 绑定设备ID
    "brand":"Google_Pixel",                   // 设备品牌
    "model":"pixel1",                         // 设备型号
    "imei" : "3242342343242",                 // imei
    "sn" : "3242342343242",                   // 序列号
    "wx_version" : "v1.0",                    // 微信版本
    "app_version" : "v1.0",                   // 工具版本
  }
});
