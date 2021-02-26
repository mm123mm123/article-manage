<template>
  <view class="page-container">
    <h1 class="title">后台管理系统</h1>
    <view class="userName loginBoxItem">
      <span>用户名</span>
      <input type="text" v-model="username">
    </view>
    <view class="password loginBoxItem">
      <span>密码</span>
      <input type="text" v-model="password">
    </view>
    <button @click="login">登录</button>
  </view>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";

@Component
export default class Login extends Vue {
  username: string = 'admin'
  password: string = '123456'

  login() {
    if (!this.username) {
      uni.showToast({
        title: '请输入用户名',
        icon: 'none'
      })
    } else if (!this.password) {
      uni.showToast({
        title: '请输入密码',
        icon: 'none'
      })
    } else {
      this.$api.post('login/auth', {username: this.username, password: this.password})
          .then(
              () => {
                uni.reLaunch({
                  url: '../article/index'
                })
              },
              () => {
                uni.showToast({
                  title: '请重新输入用户名或密码',
                  icon: 'none'
                });
              }
          )
    }
  }
}
</script>
<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;

  .title {
    margin-top: 200px;
    font-size: 30px;
  }

  input {
    border: 1px solid #dcdfe6;
  }

  .loginBoxItem {
    display: flex;
    margin-top: 20px;
    width: 240px;
    justify-content: space-between;
  }

  button {
    background-color: #409eff;
    margin-top: 30px;
    padding: 4px 26px;
    color: white;
    font-size: 16px;
  }
}
</style>
