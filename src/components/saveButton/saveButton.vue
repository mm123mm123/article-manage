<template>
  <view class="saveBtnWrapper">
    <button class="saveButton">保存</button>
  </view>
</template>
<script lang="ts">
import Vue from 'vue'

export default class SaveButton extends Vue {

}
</script>
<style lang="scss">
.saveButtonWrapper {
  border: 1px solid red;

  .saveButton {
    border: 1px solid red;
    width: 100px;
    margin: 0 auto
  }
}
</style>
