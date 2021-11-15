<template>
  <view class="home-view page-bg" @click="homePageClick">
    <k-navbar title="微信"></k-navbar>
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
    <k-popup-menu ref="popupMenuRef">
      <k-popup-menu-item
        v-for="(item, index) of msgMenus"
        :key="index+item.text"
        hover-class="hover-light"
      >
        <view @click.stop="item.event">
          <text>{{item.text}}</text>
        </view>
      </k-popup-menu-item>
    </k-popup-menu>
  </view>
</template>

<script>
import { ref, reactive, computed, watch } from 'vue'
import KPopupMenu from '@/components/kai-ui/KPopupMenu.vue'
import KPopupMenuItem from '@/components/kai-ui/KPopupMenuItem.vue'
import KNavbar from '@/components/kai-ui/KNavbar.vue'
import KContainer from '@/components/kai-ui/KContainer.vue'
import KMessageList from '@/components/kai-ui/KMessageList/KMessageList.vue'
import KMessageListItem from '@/components/kai-ui/KMessageList/KMessageListItem.vue'
export default {
  name: 'Index.vue',
  components: {
    KPopupMenu,
    KPopupMenuItem,
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

    // 聊天信息长按
    const listLongPress = ({ x, y, index, information }) => {
      // 长按消息索引 数据
      curInfomation.index = index
      curInfomation.information = information
      // 是否置顶 设置菜单文字
      information.atTop
        ? (msgMenus[1]['text'] = '取消置顶')
        : (msgMenus[1]['text'] = '置顶该聊天')

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
        default:
          break
      }
      homePageClick()
    }
    const homePageClick = () => {
      popupMenuRef.value.close()
    }
    return {
      msgList,
      msgMenus,
      popupMenuRef,
      listLongPress,
      homePageClick
    }
  }
}
</script>

<style>
</style>
