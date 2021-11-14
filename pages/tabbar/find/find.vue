<template>
  <view>
    <view>发现</view>

    <view :animation="animationData" style="background:red;height:100rpx;width:100rpx"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      animationData: {}
    }
  },
  created() {
    var animation = uni.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })

    this.animation = animation

    animation.scale(2, 2).rotate(45).step()

    this.animationData = animation.export()

    setTimeout(
      function () {
        animation.translate(30).step()
        this.animationData = animation.export()
      }.bind(this),
      1000
    )
  }
}
</script>

<style>
</style>
