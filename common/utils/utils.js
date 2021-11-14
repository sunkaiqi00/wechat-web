export const getConteinerHeight = async () => {
  const res = await uni.getSystemInfo()
  // 屏幕高度 - 状态栏高度 - tabbar高度 - 导航栏高度
  return res.screenHeight - res.statusBarHeight - 50 - 44
}