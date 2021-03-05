<template>
  <layout title="角色权限" :onRightClick="log">
  </layout>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component} from "vue-property-decorator";

@Component
export default class role extends Vue {
  log() {
    console.log('hi')
  }
}
</script>
<style lang="scss" scoped>

</style>
