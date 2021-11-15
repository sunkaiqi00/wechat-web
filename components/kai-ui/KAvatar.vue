<template>
  <image :style="imgStyle" :src="imageSrc" :mode="mode" />
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name: 'KAvatar',
  props: {
    mode: {
      type: String,
      default: 'widthFix'
    },
    src: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number],
      default: 90
    },
    round: {
      type: [String, Number],
      default: 8
    }
  },
  setup(props) {
    const imageSrc = ref(props.src)

    console.log(imageSrc)
    const imgStyle = computed(() => {
      let width = /px|rpx/.test(props.size)
        ? props.size.replace(/px|rpx/, '')
        : props.size
      let round = /px|rpx/.test(props.round)
        ? props.round.replace(/px|rpx/, '')
        : props.round
      return {
        width: width + 'rpx',
        height: width + 'rpx',
        'border-radius': round + 'rpx'
      }
    })

    return {
      imageSrc,
      imgStyle
    }
  }
}
</script>

<style>
</style>
