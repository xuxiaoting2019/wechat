// pages/order/order.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    personForm: [
      {
        typeName: '寄',
        label: '寄件人信息',
        value: '',
        type: 'send'
      },
      {
        typeName: '收',
        label: '收件人信息',
        value: '',
        type: 'receive'
      }
    ], // 寄件人和收件人的表单
    orderDetailForm: [ // 产品类型和物品信息
      {
        label: '物品信息'
      }, {
        label: '产品类型'
      }
    ],
    radioCheck: false,
    personMessage: [], // 寄件人和收件人的信息
    dialogShow: false,
    dialogTitle: '物品信息', // 弹窗标题
    goodInfodata: [ // 物品信息物品类型选择
      {
        value: '1',
        name: '文件',
        checked: false,
      },
      {
        value: '2',
        name: '数码产品',
        checked: false,
      },
      {
        value: '3',
        name: '日用品',
        checked: false,
      },
      {
        value: '4',
        name: '服饰',
        checked: false,
      },
      {
        value: '5',
        name: '食品',
        checked: false,
      },
      {
        value: '6',
        name: '医药用品',
        checked: false,
      },
      {
        value: '7',
        name: '其他',
        checked: false,
      }
    ],
    buttons: [
      {
        type: 'default',
        className: 'order-dialog-btn',
        text: '确定',
        value: 0
      }
    ],
    infodata: {
      checkdata: [],// 物品信息选中数据
      inputContent: '' // 物品信息输入框数据
    }
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
    let pages = getCurrentPages()
    let prevPage = pages[pages.length - 2] //上一个页面
    prevPage.goBack()
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

  },
  // 修改选中的方法
  radioChange: function (e) {
    console.log(e)
    this.setData({
      radioCheck: !this.radioCheck
    })
    console.log(this.data.radioCheck)
  },
  // 跳转到列表通讯地址列表页面
  goToList(e) {
    console.log(e)
    wx.navigateTo({
      url: `/pages/order/pages/mailList/mailList?type=${e.currentTarget.dataset.item.type}`
    })
  },
  // 跳转到下单页面
  goToOrder(e) {
    wx.navigateTo({
      url: '/pages/order/pages/placeorder/placeorder'
    })
  },
  // 选择 物品信息/产品类型
  open: function (event) {
    this.setData({
      dialogShow: true,
      dialogTitle: event.target.dataset.lable
    })
  },
  tapDialogButton(e) {
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },
  chooseSign(e) {
    let string = "goodInfodata[" + e.currentTarget.dataset.index + "].checked"
    this.setData({
      [string]: !this.data.goodInfodata[e.currentTarget.dataset.index].checked
    })
    this.data.infodata.checkdata = this.data.goodInfodata.filter(it => it.checked).map(it => it.value)
  },
  inputBlur(e) {
    this.data.infodata.checkdata = e.detail.value
  },
  goToAddress(e) {
    wx.navigateTo({
      url: `/pages/order/pages/newAddress/newAddress?type=${e.currentTarget.dataset.item.type}`
    })
  }
})