<template>
  <view class="k-popup-menu-item">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'KPopupMenuItem'
}
</script>

<style scoped>
.k-popup-menu-item {
  line-height: 80rpx;
  padding: 0 30rpx;
  font-size: 28rpx;
}
.k-popup-menu-item .iconfont {
  margin-right: 20rpx;
}
</style>
