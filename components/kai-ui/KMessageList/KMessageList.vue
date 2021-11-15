<template>
  <view class="k-message-list-wrapper">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'KMessageList'
}
</script>

<style scoped>
.k-message-list-wrapper {
  background-color: #fff;
}
</style>
