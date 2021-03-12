<template>
  <view>
    <uni-nav-bar @clickRight="onClickRight" @clickLeft="$emit('openLeftNaV')">
      <view slot="default" class="middle">{{ topNavTitle }}</view>
      <view slot="left" class="left">
        <image src="../../static/menu.png"></image>
      </view>
      <view slot="right" class="right">
        <image src="../../static/add.png"></image>
      </view>
    </uni-nav-bar>
  </view>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component, Prop} from "vue-property-decorator";

@Component
export default class TopNavBar extends Vue {
  @Prop() title!: String
  @Prop() clickRight!: Function
  onClickRight: Function = this.clickRight
  topNavTitle: String = this.title
}
</script>
<style lang="scss" scoped>
.uni-navbar {
  .left {
    display: flex;
    align-items: center;

    image {
      width: 20px;
      height: 20px;
    }
  }

  .middle {
    //border: 1px solid green;
    margin: 0 auto;
  }

  .right {
    //border: 1px solid yellow;
    display: flex;
    align-items: center;

    image {
      width: 24px;
      height: 24px;
    }
  }
}

</style>
