<template>
  <view>
    <uni-drawer ref="leftNav">
      <view class="navBar">
        <view class="userMsg">
          <view class="msgBox">
            <view class="image">
              <image src="../../static/userMsg.png"></image>
            </view>
            <view class="userNickName">{{ userNickName }}</view>
          </view>
        </view>
        <view class="menu">
          <ul>
            <li>文章管理</li>
            <li>用户权限</li>
            <li>角色权限</li>
          </ul>
        </view>
        <view class="ButtonWrapper">
          <button @click="logout">退出登录</button>
        </view>
      </view>
    </uni-drawer>
  </view>
</template>
<script lang="ts">
import {Component, Watch} from "vue-property-decorator";
import Vue from "vue";
import {api} from '@/util/api';
import {removeToken} from '@/util/auth';

const LeftNavBarProps = Vue.extend({
  props: {
    navStatus: Boolean
  }
})
@Component
export default class LeftNavBar extends LeftNavBarProps {
  @Watch('navStatus')
  onNavStatusChanged() {
    this.$refs.leftNav.open()
  }

  userNickName: string = ''

  created() {
    this.$store.dispatch('getInfo').then(() => {
      this.userNickName = this.$store.getters.userNickName
    })
  }

  logout() {
    api.post('login/logout', '').then(() => {
      removeToken()
      uni.reLaunch({
        url: '../login/index'
      })
    })
  }
}
</script>
<style lang="scss" scoped>
.navBar {
  border: 1px solid red;

  .userMsg {
    border: 1px solid blue;

    .msgBox {
      border: 1px solid yellow;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 160px;

      .image {
        image {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}
</style>
