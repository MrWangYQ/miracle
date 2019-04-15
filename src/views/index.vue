<template>
  <div>
    {{ msg }}
    <!-- <p> 登录注册 怎么验证 验证码 ，后端设置（登录权限）  代码测试 上线 </p> -->
  </div>
</template>

<script>
import { postFromData } from '../services/axios';

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home'
    };
  },
  mounted () {
    this.getData();
    this.getHistory();
  },
  methods: {
    getData () {
      postFromData('/device/enable')
        .then(({code, data, msg}) => {
          console.log(code, '....', data);
          console.log(msg, '....');
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    getHistory () {
      postFromData('/SmartCc/DiySearchHistory')
        .then(({code, data, msg}) => {
          console.log(code, '....', data);
          console.log(msg, '....');
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }
};
</script>

<style scoped lang='less'>
  div {
    color: blue;
    p {
      font-size: 19px;
      a {
        color: aliceblue;
        span {
          padding: 10px;
        }
      }
    }
  }
</style>
