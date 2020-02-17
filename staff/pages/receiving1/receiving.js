// pages/receiving/receiving.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    // 接单列表
    acceptList: [],
    // 打单列表
    refuseList: [],
    dialogShow: false, // 拒单弹窗
    condition: true, // 显示条件
    type: 1, // 样式判断,
    navArr: [
      {
        name: '等待接单',
        index: 1
      },
      {
        name: '等待打单',
        index: 2
      }
    ]
  },


  // 等待打单
  print: function() {
    this.setData({
      condition: false,
      type: 2,
    })
  },
  getData() { // 请求数据
    if (this.data.type === 1) {
      const res =  [
        {
          address: '北京市大兴区',
          out: '张三',
          phone: '1388888888',
          come: '李四',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '张三',
          phone: '1388888888',
          come: '李四',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '张三',
          phone: '1388888888',
          come: '李四',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '张三',
          phone: '1388888888',
          come: '李四',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '张三',
          phone: '1388888888',
          come: '李四',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '张三',
          phone: '1388888888',
          come: '李四',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '张三',
          phone: '1388888888',
          come: '李四',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '张三',
          phone: '1388888888',
          come: '李四',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '张三',
          phone: '1388888888',
          come: '李四',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '张三',
          phone: '1388888888',
          come: '李四',
          time: '00:00'
        }
      ]
      this.setData({
        dataList: res,
        acceptList: res
      })
    } else {
      const res = [
        {
          address: '北京市大兴区',
          out: '啦啦',
          phone: '1388888888',
          come: '啦啦',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '啦啦',
          phone: '1388888888',
          come: '啦啦',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '啦啦',
          phone: '1388888888',
          come: '啦啦',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '啦啦',
          phone: '1388888888',
          come: '啦啦',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '啦啦',
          phone: '1388888888',
          come: '啦啦',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '啦啦',
          phone: '1388888888',
          come: '啦啦',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '啦啦',
          phone: '1388888888',
          come: '啦啦',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '啦啦',
          phone: '1388888888',
          come: '啦啦',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '啦啦',
          phone: '1388888888',
          come: '啦啦',
          time: '00:00'
        },
        {
          address: '北京市大兴区',
          out: '啦啦',
          phone: '1388888888',
          come: '啦啦',
          time: '00:00'
        },
      ]
      this.setData({
        dataList: res,
        refuseList: res
      })
    }
  },
  changeData(e) { // 切换数据
    // if (this.data.type === e)
    let list = []
    if (this.data.type === 1 && this.data.acceptList.length) { // 说明是等待接单，并且有数据
      list = this.data.acceptList
    } else if (this.data.type === 2 && this.data.refuseList.length) {
      list = this.data.refuseList
    } else { // 说明没有数据s
      this.getData() 
      return
    }
    this.setData({
      dataList: list
    })
  },
  changeNav(e) { // 切换nav
    if (e.currentTarget.dataset.item.index === this.data.type) {
      return // 说明没有进行tab切换
    }
    this.setData({
      type: e.currentTarget.dataset.item.index
    })
    this.changeData()
  },
  // 拒单
  refuse: function () {
    this.setData({
      dialogShow: true
    })
  },
  tapDialogButton(e) {
    // console.log('dialog', e.detail)
    // console.log(e)
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },

  // 接单
  accept: function() {
    wx.navigateTo({
      url: '/pages/receiving/orderReceiving/orderReceiving',
    })
  },

  // 等待接单
  receive: function() {
    this.setData({
      condition: true,
      type: 1,
    })
  },
  changeDataList() { // 切换数据

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  请求数据
    this.changeData() // 获取数据
    console.log(this.data.type)
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