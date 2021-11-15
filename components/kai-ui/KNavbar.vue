<template>
  <!-- 导航栏 -->
  <view class="bg-light">
    <!-- 状态栏 -->
    <!-- #ifdef APP-PLUS -->
    <view :style="{height: statusBarHeight +'px'}"></view>
    <!-- #endif -->
    <!-- 导航 -->
    <view class="k-nav-bar">
      <view class="nav-left">
        <slot name="navLeft">
          <view class="iconfont icon-arrow-left-bold back" v-if="isBack"></view>
        </slot>
      </view>
      <view class="nav-title">{{title}}</view>
      <view class="nav-right">
        <view class="iconfont icon-search"></view>
        <view class="iconfont icon-add-circle" @click.stop="showDropMenu"></view>
      </view>
    </view>
    <k-popup-menu ref="popupMenuRef" theme="dark" :triangle="true">
      <view class="popup-menu-panel">
        <k-popup-menu-item
          v-for="(item, index) of dropMenu"
          :key="index+item.text"
          hover-class="hover-dark"
        >
          <text class="iconfont mr-20" :class="item.icon" v-if="item.icon"></text>
          <text>{{item.text}}</text>
        </k-popup-menu-item>
      </view>
    </k-popup-menu>
  </view>
</template>

<script>
import { ref } from 'vue'
import KPopupMenu from '@/components/kai-ui/KPopupMenu.vue'
import KPopupMenuItem from '@/components/kai-ui/KPopupMenuItem.vue'

export default {
  name: 'KNavbar',
  components: {
    KPopupMenu,
    KPopupMenuItem
  },
  props: {
    title: String,
    isBack: {
      Boolean,
      default: false
    }
  },
  setup() {
    // #ifdef APP-PLUS
    const statusBarHeight = plus.navigator.getStatusbarHeight()
    // #endif

    // popup ref
    const popupMenuRef = ref(null)

    const dropMenu = [
      {
        text: '发起群聊',
        icon: 'icon-message',
        event: () => {}
      },
      {
        text: '添加好友',
        icon: 'icon-userplus',
        event: () => {}
      },
      {
        text: '扫一扫',
        icon: 'icon-scan',
        event: () => {}
      },
      {
        text: '收付款',
        icon: 'icon-payment',
        event: () => {}
      },
      {
        text: '帮助与反馈',
        icon: 'icon-email',
        event: () => {}
      }
    ]
    // 加号显示菜单
    const showDropMenu = e => {
      let { x, y } = e.detail
      popupMenuRef.value.show(x, y)
    }

    return {
      // #ifdef APP-PLUS
      statusBarHeight,
      // #endif
      popupMenuRef,
      dropMenu,
      showDropMenu
    }
  }
}
</script>

<style lang="scss">
.mr-20 {
  margin-right: 20rpx;
}
.icon-search,
.icon-add-circle {
  width: 80rpx;
  text-align: center;
  font-size: 42rpx;
}
.icon-add-circle {
  margin-right: 16rpx;
}

.k-nav-bar {
  position: relative;
  display: flex;
  width: 100%;
  height: 44px;
  background-color: #ededed;
  border-bottom: 1px solid #f4f4f4;
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
    font-size: 32rpx;
    box-sizing: border-box;
    word-wrap: normal;
    word-break: keep-all;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 1px;
    font-weight: bold;
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
