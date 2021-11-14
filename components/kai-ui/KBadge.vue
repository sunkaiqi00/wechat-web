<template>
  <view class="k-badge-wrapper">
    <slot></slot>
    <view class="badge-count" :class="type+'-bg'" :style="badgeStyle">{{count}}</view>
  </view>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'KBadge',
  props: {
    type: {
      type: String,
      default: 'error' // warning error success primary
    },
    count: Number,
    round: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const badgeStyle = computed(() => {
      if (props.round) {
        return {
          width: '20rpx',
          height: '20rpx'
        }
      } else if (0 < props.count && props.count < 10) {
        return {
          width: '34rpx',
          height: '34rpx',
          'line-height': '34rpx'
        }
      } else if (10 <= props.count && props.count < 100) {
        return {
          width: '38rpx',
          height: '38rpx',
          // 'font-size': '12rpx',
          'line-height': '38rpx'
        }
      } else if (100 <= props.count && props.count < 1000) {
        return {
          width: '40rpx',
          height: '40rpx',
          'font-size': '20rpx',
          'line-height': '40rpx'
        }
      } else {
        return {}
      }
    })
    return {
      badgeStyle
    }
  }
}
</script>

<style scoped>
.k-badge-wrapper {
  position: relative;
}
.badge-count {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(30%, -30%);
  font-size: 24rpx;
  color: #fff;
  /* padding: 0 6rpx; */
  text-align: center;
  border-radius: 50%;
}
.warning-bg {
  background: rgb(230, 162, 60);
}
.error-bg {
  background: rgb(245, 108, 108);
}
.success-bg {
  background: rgb(103, 194, 58);
}
.primary-bg {
  background: rgb(64, 158, 255);
}
</style>
