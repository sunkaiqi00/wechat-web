<template>
  <view class="mail-wrapper page-bg">
    <k-navbar title="通讯录"></k-navbar>
    <k-container>
      <view class="top-list">
        <k-list
          v-for="(item, index) of topList"
          :key="index"
          :index="index"
          :content="item.text"
          :cover="item.cover"
          :arrow="false"
        ></k-list>
      </view>
      <view class="address-list">
        <template v-for="(item, index) of addressList" :key="index">
          <template v-if="item.data.length">
            <view class="word-category">{{item.letter}}</view>
            <template v-for="(val, j) of item.data" :key="j">
              <k-list
                :arrow="false"
                :index="j"
                :content="val"
                cover="/static/images/mail/friend.png"
              ></k-list>
            </template>
          </template>
        </template>
      </view>
    </k-container>
  </view>
</template>

<script>
import { reactive, ref } from 'vue'
import testData from './data.js'
import KNavbar from '@/components/kai-ui/KNavbar.vue'
import KList from '@/components/kai-ui/KList.vue'
import KContainer from '@/components/kai-ui/KContainer.vue'
export default {
  props: {},
  components: {
    KNavbar,
    KList,
    KContainer
  },
  setup(props) {
    const topList = reactive([
      {
        id: 'friend',
        text: '新的朋友',
        cover: '/static/images/mail/friend.png',
        path: 'mail/apply-list/apply-list'
      },
      {
        id: 'group',
        text: '群聊',
        cover: '/static/images/mail/group.png',
        path: 'mail/group-list/group-list'
      },
      {
        id: 'tag',
        text: '标签',
        cover: '/static/images/mail/tag.png',
        path: 'mail/tag-list/tag-list'
      }
    ])
    const addressList = ref(testData)
    return {
      topList,
      addressList
    }
  }
}
</script>

<style>
.word-category {
  padding: 10rpx 20rpx;
  background-color: #f7f7f7;
  font-size: 26rpx;
}
.address-list,
.top-list {
  background-color: #fff;
}
</style>
