// pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: '../../assets/images/寄.png',
    img1: '../../assets/images/收.png',
    img2: '../../assets/images/形状.png',
    items: [
      { name: 'usa', value: '美国'},
      { name: 'chn', value: '中国'},
      { name: 'jpn', value: '日本'}
    ],
    itemA: [
      { name: 'usa', value: '美国'},
      { name: 'chn', value: '中国'},
      { name: 'bra', value: '巴西'}
    ]
  },

  radioChange: function(e) {
    console.log(123)
  },
  checkboxChange: function(e) {
    console.log(456);
  },

  num: function () {
    console.log(123);
    wx.navigateTo({
      url: "pages/sender/sender"
    });
  },
  num1: function () {
    wx.navigateTo({
      url: "pages/receipt/receipt"
    });
  },
  tap1: function() {
    this.showModal();
  },
  tap2: function() {
    this.showModal1();
  },
  //显示对话框
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },

  //显示对话框
  showModal1: function () {
    // 显示遮罩层
    var animation1 = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation1 = animation1
    animation1.translateY(300).step()
    this.setData({
      animationData1: animation1.export(),
      showModalStatus1: true
    })
    setTimeout(function () {
      animation1.translateY(0).step()
      this.setData({
        animationData1: animation1.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal1: function () {
    // 隐藏遮罩层
    var animation1 = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation1 = animation1
    animation1.translateY(300).step()
    this.setData({
      animationData1: animation1.export(),
    })
    setTimeout(function () {
      animation1.translateY(0).step()
      this.setData({
        animationData1: animation1.export(),
        showModalStatus1: false
      })
    }.bind(this), 200)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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