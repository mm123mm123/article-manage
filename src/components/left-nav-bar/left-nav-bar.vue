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
          <custom-tab-bar class="tabBar"
                          direction="vertical"
                          :selected="selectedTabBarIndex"
                          show-icon
                          @onTabItemTap="onTabItemTap"/>
        </view>
        <view class="buttonWrapper">
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
  selectedTabBarIndex: number = 0

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

  onTabItemTap: object = (e: any) => {
    console.log(e.index)
    this.selectedTabBarIndex = e.index
    uni.reLaunch({url: ".." + e.pagePath.slice(5)})
  }
}
</script>
<style lang="scss" scoped>
.navBar {
  background-color: #f5f5f5;
  height: 100%;

  .userMsg {
    padding-top: 6px;

    .msgBox {
      display: flex;
      align-items: center;
      width: 160px;
      font-size: 15px;

      .image {
        display: flex;
        align-items: center;
        margin-right: 10px;

        image {
          width: 26px;
          height: 26px;
        }
      }
    }
  }

  .menu {
    margin-top: 10px;

    .tabBar {
      ::v-deep .uni-tabbar {
        background-color: #ffffff !important;
        border-radius: 16px;
        margin: 0 10px;

        .uni-tabbar__item {
          border-bottom: 1px solid #f3f3f3;

          .uni-tabbar__bd {
            width: 180px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            margin: 10px 0;

            .uni-tabbar__label {
              font-size: 14px !important;
              margin-left: 10px;
            }

            .uni-tabbar__icon {
              margin-top: 0;

              img {
                width: 24px;
                height: 24px;
              }
            }

          }
        }

      }
    }
  }

  .buttonWrapper {
    background-color: #ffffff;
    border-radius: 10px;
    margin: 10px 10px 0 10px;
    font-size: 15px;
    padding: 4px 0
  }

}
</style>
