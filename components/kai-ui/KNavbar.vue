<template>
  <!-- 导航栏 -->
  <view class="bg-light">
    <!-- 状态栏 -->
    <!-- #ifdef APP-PLUS -->
    <view :style="{height: statusBarHeight +'px'}"></view>
    <!-- #endif -->
    <!-- 导航 -->
    <view class="k-nav-bar">
      <!-- v-if="$slots.navLeft" -->
      <view class="nav-left">
        <slot name="navLeft">
          <view class="iconfont icon-arrow-left-bold back" v-if="isBack"></view>
        </slot>
      </view>
      <view class="nav-title" :class="blod?'blod-text':''">{{title}}</view>
      <!-- v-if="$slots.navRight" -->
      <view class="nav-right">
        <slot name="navRight"></slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'KNavbar',
  props: {
    title: String,
    isBack: {
      Boolean,
      default: false
    },
    blod: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    // #ifdef APP-PLUS
    const statusBarHeight = plus.navigator.getStatusbarHeight()
    // #endif

    return {
      // #ifdef APP-PLUS
      statusBarHeight
      // #endif
    }
  }
}
</script>

<style lang="scss"  scoped>
.k-nav-bar {
  position: relative;
  display: flex;
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  line-height: 44px;
  .nav-left,
  .nav-right {
    flex: 1;
    z-index: 1000;
  }
  .nav-left {
    .back {
      width: 70rpx;
      text-align: center;
      font-size: 18px;
    }
  }
  .nav-right {
    display: flex;
    justify-content: flex-end;
  }
  .nav-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 0 200rpx;
    box-sizing: border-box;
    word-wrap: normal;
    word-break: keep-all;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .blod-text {
    font-weight: bold;
  }
}
// .nav-bar-wrapper {
//   position: relative;
//   width: 100%;
//   height: 90rpx;
//   border-bottom: 1px solid #ccc;
//   box-sizing: border-box;
//   line-height: 90rpx;
//   .nav-left {
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 100;
//   }
//   .nav-title {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     z-index: 90;
//     .title {
//       max-width: 50%;
//       word-wrap: normal;
//       word-break: keep-all;
//       overflow: hidden;
//       text-overflow: ellipsis;
//     }
//   }
//   .nav-right {
//     position: absolute;
//     top: 0;
//     right: 0;
//     z-index: 100;
//   }
// }
</style>
