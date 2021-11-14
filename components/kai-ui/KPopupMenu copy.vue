<template>
  <!-- <transition name="scale"> -->
  <view
    v-show="visible"
    class="k-popup-container"
    ref="menuRef"
    :class="['popup-'+theme,bottom ? 'fixed-bottom' : '']"
    :style="positionStyle"
    @click.stop
  >
    <view class="triangle" v-if="triangle"></view>
    <view class="content-wrapper">
      <slot></slot>
    </view>
  </view>
  <!-- </transition> -->
</template>

<script>
import { reactive, ref, toRefs, computed, nextTick } from 'vue'
import { getConteinerHeight } from '@/common/utils/utils.js'
export default {
  name: 'KPopupMenu',
  props: {
    theme: {
      type: String,
      default: 'light' // dark light
    },
    // 固定在底部
    bottom: {
      type: Boolean,
      default: false
    },
    triangle: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    // 内容区域高度
    getConteinerHeight().then(res => {
      screenY.value = res
    })
    const menuRef = ref(null)
    const screenX = ref(0) // 屏幕宽度
    const screenY = ref(0) // 内容区域高度 KContainer组件高度一致
    const visible = ref(false)
    const axis = reactive({
      x: 0,
      y: 0
    })
    const positionStyle = computed(() => {
      if (props.bottom) {
        return {}
      } else {
        return {
          top: axis.y + 'px',
          left: axis.x + 'px'
        }
      }
    })
    const show = (x, y) => {
      console.log(x, y)
      if (!props.bottom) {
        visible.value = true
        setTimeout(() => {
          console.log(menuRef.value.$el)
          // 自身宽度
          let width = menuRef.value.$el.offsetWidth
          let height = menuRef.value.$el.offsetHeight
          axis.x = x > screenX.value - width ? screenX.value - width : x
          axis.y = y > screenY.value - height ? screenY.value - height : y
          axis.x -= 10
          axis.y += 10

          console.log(axis)
        }, 16)
      }
    }

    const close = () => {
      visible.value = false
    }

    // 屏幕宽度
    uni.getSystemInfo({
      success: function (res) {
        screenX.value = res.screenWidth
      }
    })
    return {
      menuRef,
      show,
      close,
      visible,
      positionStyle,
      ...toRefs(axis)
    }
  }
}
</script>

<style scoped>
.k-popup-container {
  position: absolute;
  border-radius: 10rpx;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  transform-origin: left top;
}
.content-wrapper {
  border-radius: 10rpx;
  overflow: hidden;
}
.triangle {
  position: absolute;
  top: 0%;
  right: 10%;
  transform: translateY(-100%);
  width: 0;
  height: 0;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #3c3c3c transparent;
}
.popup-dark {
  background: #303030;
  color: aliceblue;
}
.popup-light {
  background: #fff;
}
.fixed-bottom {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 500rpx;
}

/* .scale-left-top-hidden{
	transform: scale(0);
	transition: all 0.1s;
}
.scale-left-top-show{
	transform: scale(1);
	transition: all 0.1s;
} */
/* .scale-enter-from,
.scale-leave-to {
  transform: scale(0);
} */
/* .scale-enter-to,
.scale-leave-from {
  transform: scale(1);
} */
/* .scale-enter-active,
.scale-leave-active {
  transition: all 0.1s;
} */
</style>
