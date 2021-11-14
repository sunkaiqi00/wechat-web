<template>
  <view class="home-view" @click="homePageClick">
    <k-navbar title="微信">
      <template v-slot:navRight>
        <view class="iconfont icon-search"></view>
        <view class="iconfont icon-add-circle" @click.stop="showDropMenu"></view>
      </template>
    </k-navbar>
    <k-container>
      <k-message-list>
        <block v-for="(item, index) in msgList" :key="index">
          <k-message-list-item
            v-if="item.atTop"
            :information="item"
            :index="index"
            @listLongPress="listLongPress"
          />
        </block>
      </k-message-list>
      <k-message-list>
        <block v-for="(item, index) in msgList" :key="index">
          <k-message-list-item
            v-if="!item.atTop"
            :information="item"
            :index="index"
            @listLongPress="listLongPress"
          />
        </block>
      </k-message-list>
    </k-container>
    <k-popup-menu
      ref="popupMenuRef"
      :theme="menuTheme"
      :triangle="menuTriangle"
      :menuWidth="280"
      :menuHeight="600"
    >
      <view class="popup-menu-panel">
        <block v-for="(item, index) of popupMenus" :key="index+item.text">
          <view :hover-class="hoverClass" class="menu-item" @click.stop="item.event">
            <text class="iconfont" :class="item.icon" v-if="item.icon"></text>
            <text>{{item.text}}</text>
          </view>
        </block>
      </view>
    </k-popup-menu>
  </view>
</template>

<script>
import { ref, reactive, computed, watch } from 'vue'
import KPopupMenu from '@/components/kai-ui/KPopupMenu.vue'
import KNavbar from '@/components/kai-ui/KNavbar.vue'
import KContainer from '@/components/kai-ui/KContainer.vue'
import KMessageList from '@/components/kai-ui/KMessageList/KMessageList.vue'
import KMessageListItem from '@/components/kai-ui/KMessageList/KMessageListItem.vue'
export default {
  name: 'Index.vue',
  components: {
    KPopupMenu,
    KNavbar,
    KContainer,
    KMessageList,
    KMessageListItem
  },
  setup() {
    // popup ref
    const popupMenuRef = ref(null)

    // /聊天列表点击 弹出菜单
    const msgMenus = reactive([
      {
        text: '删除聊天',
        event() {
          msgMenuClick('delete')
        }
      },
      {
        text: '置顶该聊天',
        event() {
          msgMenuClick('atTop')
        }
      }
    ])
    const dropMenu = reactive([
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
    ])
    // 菜单娴熟数据集
    let popupMenus = ref([])
    // 菜单颜色
    const menuTheme = ref('light')
    // 菜单三角
    const menuTriangle = ref(false)
    // 菜单项 点击背景色
    const hoverClass = ref('hover-light')
    const curInfomation = reactive({
      index: -1,
      information: null
    })
    // 聊天信息
    const msgList = ref([
      {
        avatar: '/static/images/avatar.jpg',
        nickName: '开怀',
        time: 1636553278266,
        content: '今天开心吗？',
        noticeCount: 2
      },
      {
        avatar: '/static/images/avatar.jpg',
        nickName: '开怀',
        time: 1636557278366,
        content: '今天开心吗？',
        noticeCount: 1
      },
      {
        avatar: '/static/images/avatar.jpg',
        nickName: '开怀',
        time: 1632543278266,
        content: '今天开心吗？',
        round: true
      },
      {
        avatar: '/static/images/avatar.jpg',
        nickName: '开怀',
        time: 1633545278266,
        content: '今天开心吗？'
      },
      {
        avatar: '/static/images/avatar.jpg',
        nickName: '开怀',
        time: 1663945278266,
        content: '今天开心吗？',
        round: true
      },
      {
        avatar: '/static/images/avatar.jpg',
        nickName: '开怀',
        time: 1636553278266,
        content: '今天开心吗？',
        noticeCount: 6
      },
      {
        avatar: '/static/images/avatar.jpg',
        nickName: '开怀',
        time: 1636557278366,
        content: '今天开心吗？',
        noticeCount: 16
      },
      {
        avatar: '/static/images/avatar.jpg',
        nickName: '开怀',
        time: 1632543278266,
        content: '今天开心吗？',
        round: true
      },
      {
        avatar: '/static/images/avatar.jpg',
        nickName: '开怀',
        time: 1633545278266,
        content: '今天开心吗？'
      },
      {
        avatar: '/static/images/avatar.jpg',
        nickName: '开怀',
        time: 1663945278266,
        content: '今天开心吗？',
        round: true
      }
    ])

    // 加号显示菜单
    const showDropMenu = e => {
      // console.log(e)
      let { x, y } = e.detail
      popupMenus.value = dropMenu
      menuTheme.value = 'dark'
      hoverClass.value = 'hover-dark'
      menuTriangle.value = true
      popupMenuRef.value.show(x, y)
    }
    // 聊天信息长按
    const listLongPress = ({ x, y, index, information }) => {
      // 长按消息索引 数据
      curInfomation.index = index
      curInfomation.information = information
      // 是否置顶 设置菜单文字
      information.atTop
        ? (msgMenus[1]['text'] = '取消置顶')
        : (msgMenus[1]['text'] = '置顶该聊天')

      popupMenus.value = msgMenus
      menuTheme.value = 'light'
      hoverClass.value = 'hover-light'
      menuTriangle.value = false
      popupMenuRef.value.show(x, y)
    }
    // 聊天列表菜单点击
    const msgMenuClick = key => {
      switch (key) {
        case 'delete':
          msgList.value.splice(curInfomation.index, 1)
          break
        case 'atTop':
          let topMsgItem = msgList.value[curInfomation.index]
          topMsgItem.atTop = !topMsgItem.atTop
          break
        // case 'cancleTop':
        //   let msgItem = msgList.value[curInfomation.index]
        //   msgItem.atTop = false
        //   break
        default:
          break
      }
      homePageClick()
    }
    const homePageClick = () => {
      // console.log(111)
      popupMenuRef.value.close()
    }
    return {
      msgList,
      hoverClass,
      menuTheme,
      popupMenus,
      popupMenuRef,
      menuTriangle,
      showDropMenu,
      listLongPress,
      homePageClick
    }
  }
}
</script>

<style>
.nav-top-bar {
  height: 90rpx;
  border: 1px solid #c8c7cc;
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
.main {
  height: 1000px;
}

.popup-menu-panel {
  display: flex;
  flex-direction: column;
  width: 280rpx;
}
.menu-item {
  padding: 25rpx 30rpx;
  font-size: 28rpx;
}
.menu-item .iconfont {
  margin-right: 20rpx;
}
</style>
