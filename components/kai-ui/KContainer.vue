<template>
  <view class="k-container" :style="{height: screenHeight+'px'}">
    <slot></slot>
  </view>
</template>

<script>
import { ref } from 'vue'
import { getConteinerHeight } from '@/common/utils/utils.js'
export default {
  name: 'KContainer',
  setup() {
    let res = getConteinerHeight()
    res.then(res => {
      screenHeight.value = res
    })
    const screenHeight = ref()
    return {
      screenHeight
    }
  }
}
</script>

<style scoped>
.k-container {
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
}
</style>
