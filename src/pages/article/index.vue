<template>
  <view class="page">
    <uni-list>
      <uni-list-item v-for="article in articleList"
                     :title="article.content"
                     clickable
                     @click="pop(article)">
      </uni-list-item>
    </uni-list>
    <view class="createBtnWrapper">
      <button @click="createArticle">新增文章</button>
    </view>
    <uni-popup ref="edit" type="center">
      <uni-list class="editPopup">
        <uni-list-item>
          <view slot="body" class="li">
            <view>文章题目</view>
            <view class="item">
              <input v-model="articleMsg.content">
            </view>
          </view>
        </uni-list-item>
        <uni-list-item>
          <view slot="body" class="li">
            <view>创建时间</view>
            <view class="item">{{ articleMsg.createTime }}</view>
          </view>
        </uni-list-item>
        <SaveButton @buttonOnClick="edit(articleMsg.content)"></SaveButton>
      </uni-list>
    </uni-popup>
    <uni-popup ref="create" type="center">
      <view class="createPopup">
        <view class="inputBox">
          <view>文章题目</view>
          <view class="newTitle">
            <input v-model="newArticle">
          </view>
        </view>
        <SaveButton @buttonOnClick="create(newArticle)"></SaveButton>
      </view>
    </uni-popup>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import {clone} from "@/util/clone";
import {api} from '@/util/api'
import SaveButton from '@/components/saveButton/saveButton.vue'

@Component({
  components: {SaveButton}
})
export default class Article extends Vue {
  articleList: string[] = []
  articleMsg: object = {}
  newArticle: string = ''

  created() {
    this.getArticleList()
  }

  getArticleList() {
    this.$store.dispatch('getArticleList')
        .then(() => {
          this.articleList = this.$store.getters.articleList
        })
  }

  pop(data: object) {
    this.articleMsg = clone(data)
    this.$refs.edit.open()
  }

  edit(data: any) {
    if (!data) {
      uni.showToast({
        title: '请输入题目',
        icon: 'none'
      })
    } else {
      api.post('article/updateArticle', {id: this.articleMsg.id, content: data})
          .then(() => {
            this.getArticleList()
            this.$refs.edit.close()
          })
    }
  }

  createArticle() {
    this.$refs.create.open()
  }

  create(data: string) {
    if (!data) {
      uni.showToast({
        title: '请输入题目',
        icon: 'none'
      })
    } else {
      api.post('article/addArticle', {id: '', content: data})
          .then(() => {
            this.getArticleList()
            this.$refs.create.close()
          })
    }
  }
}
</script>
<style lang="scss" scoped>
.createBtnWrapper {
  margin-top: 30px;

  button {
    font-size: 18px;
    width: 100px;
    margin: 0 auto;
  }
}

.editPopup {
  .uni-list-item {
    .li {
      display: flex;
      flex-direction: row;
      width: 280px;

      input {
        border: 1px solid gray;
      }

      .item {
        margin-left: 20px;
      }
    }
  }
}

.createPopup {
  background-color: #ffffff;

  .inputBox {
    display: flex;
    padding: 10px 20px;
    font-size: 18px;

    input {
      border: 1px solid green;
      margin-left: 20px;
    }
  }
}
</style>
