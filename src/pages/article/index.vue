<template>
  <view class="page">
    <uni-list>
      <uni-list-item v-for="article in articleList"
                   :title="article" clickable
                   @click="pop">
      </uni-list-item>
    </uni-list>
    <uni-popup ref="popup" type="center">hi</uni-popup>
  </view>
</template>

<script lang="ts">

import UniListItem from "@/components/uni-list-item/uni-list-item.vue";
export default {
  components: {UniListItem},
  data() {
    return {
      articleList: ['家', '春', '秋']
    }
  },
  methods: {
    pop() {
      this.$refs.popup.open()
    }
  }
}
</script>
<style lang="scss" scoped>
.uni-tabbar {
  display: none;
}
</style>
