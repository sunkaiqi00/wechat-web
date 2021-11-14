<template>
  <view class="k-list-item" hover-class="hover-light">
    <view class="image-pd-20">
      <k-avatar :src="cover || listItem.cover" mode="cover" size="80" />
    </view>
    <view class="content">
      <slot>
        <text>{{content||listItem.text}}</text>
      </slot>
    </view>
    <view class="line-bottom"></view>
  </view>
</template>

<script>
import KAvatar from './KAvatar.vue'
export default {
  name: 'KList',
  props: {
    listItem: Object,
    content: String,
    cover: {
      type: String,
      default: ''
    }
  },
  components: {
    KAvatar
  }
}
</script>

<style scoped>
.k-list-item {
  position: relative;
  display: flex;
  padding: 20rpx 0;
}
.content {
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 28rpx;
}
.image-pd-20 {
  padding: 0 20rpx;
}
.line-bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 85%;
  border-bottom: 1px solid #f7f7f7;
}
</style>
