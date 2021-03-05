<template>
  <view>
    <top-nav-bar @openLeftNaV="openLeftNav"
                 :title="topNavTitle"
                 :clickRight="rightClickEvent"></top-nav-bar>
    <left-nav-bar :navStatus="leftNavStatus"></left-nav-bar>
    <slot></slot>
  </view>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'

const LayoutProps = Vue.extend({
  props: {
    title: String,
    onRightClick: Function
  }
})
@Component
export default class Layout extends LayoutProps {
  leftNavStatus: boolean = false
  topNavTitle: string = this.title
  rightClickEvent: Function = this.onRightClick

  openLeftNav() {
    this.leftNavStatus = !this.leftNavStatus
  }
}
</script>
<style lang="scss" scoped>

</style>
