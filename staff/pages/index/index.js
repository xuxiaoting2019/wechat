//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function (options) { // 通过获取的参数判断客户类型，动态跳转到对应的页面，并修改tabar配置
    // options.type = 0
    // console.log(this.data.tabbarArr[0])
    // if (options.type === 0) { // 说明是揽件员角色
    //   this.data.tabbarArr[0].forEach((item, index) => {
    //     wx.setTabBarItem(
    //       {
    //         ...item,
    //         index
    //       }
    //     )
    //   });
    // } else {

    // }
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
