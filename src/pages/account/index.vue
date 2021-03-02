<template>
  <view class="page-container">
    <view class="msgBox">
      <view class="image">
        <image src="../../static/userMsg.png"></image>
      </view>
      <view class="userNickName">{{ userNickName }}</view>
    </view>
    <uni-list>
      <uni-list-item class="userNickName"
                     title="角色"
                     :right-text="roleName"></uni-list-item>
      <uni-list-item class="userMenuList"
                     title="菜单权限"
                     :right-text="menuList"></uni-list-item>
    </uni-list>
    <view class="saveButtonWrapper">
      <button @click="logout">退出登录</button>
    </view>
  </view>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import {api} from '@/util/api';
import {removeToken} from '@/util/auth';

@Component
export default class User extends Vue {
  userNickName: string = ''
  roleName: string = ''
  menuList: string = ''
  allMenuList: { [index: string]: string } = {role: '角色权限', user: '用户权限', article: '文章管理'}

  created() {
    this.$store.dispatch('getInfo').then(() => {
      this.userNickName = this.$store.getters.userNickName
      this.roleName = this.$store.getters.roleName
      this.$store.getters.menuList.forEach((menuName: string) => {
        this.menuList += this.allMenuList[menuName] + ','
      })
      this.menuList = this.menuList.slice(0, this.menuList.length - 1)
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
.page-container {
  position: fixed;
}

.msgBox {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;

  image {
    width: 100px;
    height: 100px;
  }
}

.saveButtonWrapper {
  margin-top: 260px;
  display: flex;
  justify-content: center;

  button {
    font-size: 16px;
    width: 120px;
    padding: 6px 18px;
  }
}
</style>
