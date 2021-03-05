<template>
  <view class="saveBtnWrapper">
    <button class="saveButton" @click="$emit('buttonOnClick')">保存</button>
  </view>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'

@Component
export default class SaveButton extends Vue {

}
</script>
<style lang="scss">
.saveBtnWrapper {

  .saveButton {
    width: 100px;
    margin: 0 auto
  }
}
</style>
