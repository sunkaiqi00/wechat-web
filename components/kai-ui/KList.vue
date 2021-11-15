<template>
  <view class="k-list-item" hover-class="hover-gray">
    <view class="k-list-left">
      <slot name="left"></slot>
      <k-avatar :src="cover" mode="cover" size="80" v-if="cover" />
      <view class="content">
        <text>{{content}}</text>
      </view>
    </view>
    <view class="k-list-right">
      <slot name="right"></slot>
      <text class="iconfont icon-arrow-right-bold" v-if="arrow"></text>
    </view>
    <view class="line-bottom" v-if="bottomLine"></view>
  </view>
</template>

<script>
import KAvatar from './KAvatar.vue'
export default {
  name: 'KList',
  props: {
    content: String,
    cover: {
      type: String,
      default: ''
    },
    bottomLine: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: Boolean,
      default: true
    }
  },
  components: {
    KAvatar
  }
}
</script>

<style lang="scss" scoped>
.k-list-item {
  position: relative;
  display: flex;
  padding: 20rpx;
  .k-list-left,
  .k-list-right {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .k-list-left {
    justify-content: flex-start;
    .content {
      margin-left: 30rpx;
      font-size: 28rpx;
    }
  }
  .k-list-right {
    justify-content: flex-end;
    .icon-arrow-right-bold {
      margin-left: 12rpx;
      color: #b6b6b6;
    }
  }
  .line-bottom {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 85%;
    border-bottom: 1px solid #f7f7f7;
  }
}
</style>
