<template>
  <view class="k-mask" :class="theme+'-mask-bg'" v-if="visible" @click="closeMask">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'KMask',
  props: {
    theme: {
      type: String,
      default: 'dark' // dark light
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setuo(props, { emit }) {
    const closeMask = () => {
      emit('update:visible', false)
    }

    return {
      closeMask
    }
  }
}
</script>

<style scoped>
.k-popup {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
}
.dark-mask-bg {
  background-color: rgba(0, 0, 0, 0.3);
}
.light-mask-bg {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
