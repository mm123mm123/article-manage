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
    font-size: 16px;
    border: 1px solid #dddddd;
    width: 60px;
    background-color: #f9f9f9;
    padding: 4px 10px;
  }
}
</style>
