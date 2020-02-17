// pages/user/user.js
const app = getApp();
Component({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: app.globalData.userInfo, // 用户数据
    functionList: [ // 功能列表数据
      {
        leftIcon: '../../assets/images/dizhibu-my.png',
        name: '地址簿'
      },
      {
        leftIcon: '../../assets/images/fuwu666.png',
        name: '服务中心',
        path: "./pages/serviceCenter/serviceCenter"
      },
      {
        leftIcon: '../../assets/images/kefu666.png',
        name: '客服热线',
        number: '112'
      }
    ]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('heldofs');
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      if (app.globalData.userInfo) {
        this.setData({
          userInfo: app.globalData.userInfo
        })
      }
      console.log(this.data)
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  methods: {
    goToDetail(e) { // 跳转到具体的详情中
      console.log(e);
      let data = e.currentTarget.dataset.item;
      if (data.path) {
        wx.navigateTo({
          url: data.path
        })
      } else if (data.number) {
        wx.makePhoneCall({
          phoneNumber: data.number,
        })
      } else {
        wx.showToast({
          title: '未完成',
          icon: 'none'
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('heldofs');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('heldofs');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})