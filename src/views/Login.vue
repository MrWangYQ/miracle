<template>
  <div class="login">
    <!-- <input type="text" v-model="user" @blur="handleUser" placeholder="用户名">
    <input type="password" v-model="password" @blur="handlePwd" placeholder="密码">
    <button @click="submit">登录</button> -->
    <vue-particles
      class="particles"
      background="#ffd640"
      color="#ffffff"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push">
    </vue-particles>
  </div>
</template>

<script>
import md5 from 'js-md5';
import { postFromData } from '@/services/axios';

export default {
  data () {
    return {
      user: '',
      password: ''
    };
  },
  watch: {
    user () {
      // console.log(md5(this.user));
    },
    password () {
      // console.log(md5(this.password));
    }
  },
  methods: {
    handleUser () {
      console.log(this.user);
      console.log(md5(this.user));
    },
    handlePwd () {
      console.log(this.password);
      console.log(md5(this.password));
    },
    submit () {
      let params = {
        user: this.user,
        password: md5(this.password)
      };
      postFromData('/api/login', params)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang='less' scoped>
  .login {
    background: #ffd640;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
