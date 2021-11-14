<template>
  <view hover-class="hover-light">
    <div class="k-msg-list-item" @click="onClick" @longpress="onLongPress">
      <view class="user-avatar">
        <k-badge :count="information.noticeCount" v-if="information.noticeCount">
          <k-avatar :src="information.avatar" />
        </k-badge>
        <k-badge v-else-if="information.round" :round="information.round">
          <k-avatar :src="information.avatar" />
        </k-badge>
        <k-avatar :src="information.avatar" v-else />
      </view>
      <view class="msg-list-content">
        <view class="user-info-time">
          <view class="user-name">{{information.nickName}}</view>
          <div class="time">{{getFormatTime(information.time)}}</div>
        </view>
        <view class="msg-content">{{information.content}}</view>
      </view>
    </div>
  </view>
</template>

<script>
import $time from '@/common/utils/formatTime.js'
import KBadge from '../KBadge.vue'
import KAvatar from '../KAvatar.vue'
export default {
  name: 'KMessageLisItem',
  props: {
    information: {
      type: Object,
      default: {}
    },
    index: Number
  },
  components: {
    KAvatar,
    KBadge
  },
  setup(props, ctx) {
    const getFormatTime = time => {
      return $time.getTime(time)
    }
    // 点击
    const onClick = e => {
      console.log(e)
    }
    // 长按
    const onLongPress = e => {
      let x = 0
      let y = 0
      // #ifdef APP-PLUS || H5
      if (e.changedTouches && e.changedTouches.length) {
        let touche = e.changedTouches[0]
        x = touche.pageX
        y = touche.pageY
      }
      // #endif
      ctx.emit('listLongPress', {
        x,
        y,
        index: props.index,
        information: props.information
      })
    }
    return { onClick, onLongPress, getFormatTime }
  }
}
</script>

<style lang="scss" scoped>
.k-msg-list-item {
  width: 100%;
  height: 140rpx;
  display: flex;
  .user-avatar {
    // width: 150rpx;
    padding: 0 16rpx 0 30rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .msg-list-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    .user-info-time,
    .msg-content {
      flex: 1;
    }
    .user-info-time {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-right: 20rpx;
      box-sizing: border-box;
      line-height: 60rpx;
      .user-name {
        font-size: 28rpx;
      }
      .time {
        font-size: 22rpx;
        color: #bdc3c7;
      }
    }
    .msg-content {
      margin-top: -12rpx;
      font-size: 22rpx;
      color: #bdc3c7;
      display: flex;
      // align-items: center;
      line-height: 50rpx;
      padding-right: 20rpx;
      border-bottom: 1px solid #ecf0f1;
    }
  }
}
</style>
