<template>
  <view class="page-container">
    <h1 class="title">后台管理系统</h1>
    <view class="userName loginBoxItem">
      <input type="text" v-model="username" placeholder="用户名">
    </view>
    <view class="password loginBoxItem">
      <input type="text" v-model="password" placeholder="密码">
    </view>
    <button @click="login">登录</button>
    <view class="bg l-t"></view>
    <view class="bg r-t"></view>
  </view>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import {setToken} from '@/util/auth';
import {api} from '@/util/api'

@Component
export default class Login extends Vue {
  username: string = ''
  password: string = ''

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
      api.post('login/auth', {username: this.username, password: this.password})
          .then(
              (data: any) => {
                console.log(data);
                if (data.info.result === 'success') {
                  setToken()
                  this.$store.dispatch('getInfo').then(() => {
                    uni.reLaunch({
                      url: '../article/index'
                    })
                  })
                } else {
                  uni.showToast({
                    title: '请重新输入用户名或密码',
                    icon: 'none',
                  })
                }
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
  background-color: #ffffff;
}

.title {
  z-index: 1;
  margin-top: 100px;
  font-size: 30px;
  color: #ff6300
}

input {
  z-index: 1;
  border-bottom: 1px solid #dcdfe6;
  width: 260px;
}

.loginBoxItem {
  display: flex;
  margin-top: 40px;
  justify-content: center;
}

button {
  background-color: #ff6300;
  margin-top: 40px;
  width: 260px;
  padding: 4px 26px;
  color: white;
  font-size: 16px;
  border-radius: 29px;
}
</style>
