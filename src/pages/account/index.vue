<template>
  <uni-list>
    <uni-list-item class="userNickName" :title="userNickName"></uni-list-item>
    <uni-list-item class="roleName" :title="roleName"></uni-list-item>
  </uni-list>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class User extends Vue {
  created() {
    this.$store.dispatch('getInfo').then(() => {
      userNickName: string = this.$store.getters.userNickName
      roleName: string = this.$store.getters.roleName
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
