<template>
  <div>
    {{ msg }}
    <div v-for="c in category" :key="c.name">
      {{c.name}}
      <input v-for="item in c.items" v-model="item.value" :key="item.value"/>
    </div>
    <div v-for="item in items" :key="item.value">
      <input v-model="item.value" />
    </div>
    <div v-for="item in category | get_items" :key="item.value">
      <input v-model="item.value" />
    </div>
    {{category | json}}
    <!-- <p> 登录注册 怎么验证 验证码 ，后端设置（登录权限）  代码测试 上线 </p> -->
  </div>
</template>

<script>
import { postFromData } from '../services/axios';
// import pinyin from '../utils/Convert_Pinyin.js';

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home',
      category: [{name: 'cate0', items: [{ value: 'cate0 item0' }]}, {name: 'cate1', items: [{ value: 'cate1 item1' }]}]
    };
  },
  filters: {
    get_items: function (category) {
      var arr = [];
      category.forEach(element => element.items.forEach(t => arr.push(t)));
      return arr;
    }
  },
  computed: {
    items () {
      return this.$eval('category | get_items');
    }
  },
  mounted () {
    // this.getData();
    // this.getHistory();
    console.log('hhaahahaha');
    // console.log(pinyin.getFullChars('哈哈哈'), "pinyin('哈哈哈')");
  },
  methods: {
    eval (fn) {
      let Fn = Function;
      return new Fn('return ' + fn)();
    },
    getData () {
      postFromData('crm/device/enable', {'id': 1, 'value': '哈哈哈', 'data': [{'id': 2, 'value': '哈哈哈'}], 'obj': {'id': '3', 'value': '对象'}})
        .then(({code, data, msg}) => {
          console.log(code, '....', data);
          console.log(msg, '....');
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    getHistory () {
      postFromData('crm/SmartCc/DiySearchHistory')
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
