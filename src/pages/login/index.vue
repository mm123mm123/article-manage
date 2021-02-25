<template>
  <view class="page-container">
    <h1 class="title">后台管理系统</h1>
    <view class="userName loginBoxItem">
      <span>用户名</span>
      <input type="text">
    </view>
    <view class="password loginBoxItem">
      <span>密码</span>
      <input type="text">
    </view>
    <button>登录</button>
  </view>
</template>
<script lang="ts">

</script>
<style lang="scss" scoped>
.page-container{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  .title{
    margin-top: 200px;
    font-size: 30px;
  }
  input{
    border:1px solid #dcdfe6;
  }
  .loginBoxItem{
    display: flex;
    margin-top:20px;
    width: 240px;
    justify-content: space-between;
  }
  button{
    background-color: #409eff;
    margin-top: 30px;
    padding:4px 26px;
    color:white;
    font-size: 16px;
  }
}
</style>
