<template>
  <div class="notFound">
    <div class="errorbg">
      <div class="errorTips">
        <div class="errorText">找不到页面啦~</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      msg: '404'
    };
  }
};
</script>

<style scoped lang='less'>
  .notFound {
    overflow: hidden;
    margin: auto;
    .errorbg {
      background: url('../../static/images/404.jpg') no-repeat center bottom;
    }
    .errorbg .errorTips {
      height: 620px;
      position: relative;
    }
    .errorTips {
      width: 1000px;
      margin: 0 auto;
      position: relative;
    }
    .errorText {
      font-size: 24px;
      color: #77514a;
      text-align: center;
      width: 240px;
      height: 60px;
      line-height: 60px;
      position: absolute;
      left: 251px;
      top: 160px;
    }
  }
</style>
