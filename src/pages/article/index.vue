<template>
  <view class="page">
    <uni-list>
      <uni-list-item v-for="article in articleList"
                     :title="article.content"
                     clickable
                     @click="pop">
      </uni-list-item>
    </uni-list>
    <uni-popup ref="popup" type="center">hi</uni-popup>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";

@Component
export default class Article extends Vue {
  articleList: string[] = []

  created() {
    this.$store.dispatch('getArticleList')
        .then(() => {
          this.articleList = this.$store.getters.articleList
        })

  }

  pop() {
    this.$refs.popup.open()
  }
}
</script>
<style lang="scss" scoped>
</style>
