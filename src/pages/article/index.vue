<template>
  <view class="page">
    <layout title="文章管理" :onRightClick="createArticle">
      <uni-list>
        <uni-list-item v-for="article in articleList"
                       :title="article.content"
                       clickable
                       @click="pop(article)">
        </uni-list-item>
      </uni-list>
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
          <save-button class="saveBtn" @buttonOnClick="edit(articleMsg.content)"></save-button>
        </uni-list>
      </uni-popup>
      <uni-popup ref="create" type="center">
        <view class="createPopup">
          <view class="inputBox">
            <view>题目</view>
            <view class="newTitle">
              <input v-model="newArticle">
            </view>
          </view>
          <save-button class="saveBtn" @buttonOnClick="create(newArticle)"></save-button>
        </view>
      </uni-popup>
    </layout>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from "vue-property-decorator";
import {clone} from "@/util/clone";
import {api} from '@/util/api'

@Component
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
  display: flex;
  justify-content: space-between;

  button {
    width: 50px;
    border-radius: 50px;
    background-color: inherit;

    image {
      width: 40px;
      height: 40px;
    }

    margin: 0 auto;
  }
}

::v-deep .uni-popup__wrapper-box {

  .editPopup {
    border-radius: 16px;
    background-color: #ffffff;

    .uni-list-item {
      border-radius: 16px;

      .li {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 280px;

        input {
          border: 1px solid #dfdfdf;
          min-height: 30px;
          padding-left: 10px;
        }

        .item {
          margin-left: 20px;
        }
      }
    }

    .saveBtn {
      margin-bottom: 10px;

      .saveButton {
        margin-left: 230px;
      }
    }
  }
}


.createPopup {
  background-color: #ffffff;
  border-radius: 6px;
  padding: 6px 0;
  .inputBox {
    display: flex;
    padding: 10px 20px;
    font-size: 18px;

    input {
      border: 1px solid #dfdfdf;
      margin-left: 20px;
    }
  }

  .saveBtn {
    padding-bottom: 6px;

    ::v-deep .saveButton {
      margin-left: 190px;
    }
  }
}
</style>
