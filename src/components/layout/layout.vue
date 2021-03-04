<template>
  <view>
    <TopNavBar @openLeftNaV="openLeftNav"
               :title="topNavTitle"
               :clickRight="rightClickEvent"></TopNavBar>
    <LeftNavBar :navStatus="leftNavStatus"></LeftNavBar>
    <slot></slot>
  </view>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import LeftNavBar from '@/components/leftNavBar/leftNavBar.vue'
import TopNavBar from '@/components/topNavBar/topNavBar.vue'

@Component({
  components: {LeftNavBar, TopNavBar}
})
const LayoutProps = Vue.extend({
  props: {
    title: String,
    onRightClick: Function
  }
})
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
