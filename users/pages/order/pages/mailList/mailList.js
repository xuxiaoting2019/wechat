// pages/order/pages/mailList/mailList.js
// import { getAddressList } from '../../server.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '', // 输入框
    refreshhidden: false, // 下拉刷新
    loadmorehidden: true, // 上拉加载
    currentPage: 1,
    pageSize: 10,
    totalPage: 1,
    total: 0,
    dataList: [], // 列表数据
    mailList: [ // 列表数据
      {
        receiverLinker: '李现',
        receiverMobile: '13876564758',
        receiverAddr: '成都市双阳区'
      },
      {
        receiverLinker: '杨紫',
        receiverMobile: '13476564758',
        receiverAddr: '成都市双阳区'
      },
      {
        receiverLinker: '李现1',
        receiverMobile: '13876564758',
        receiverAddr: '成都市双阳区'
      },
      {
        receiverLinker: '杨紫2',
        receiverMobile: '13476564758',
        receiverAddr: '成都市双阳区'
      },
      {
        receiverLinker: '李现2',
        receiverMobile: '13876564758',
        receiverAddr: '成都市双阳区'
      },
      {
        receiverLinker: '杨紫2',
        receiverMobile: '13476564758',
        receiverAddr: '成都市双阳区'
      },
      {
        receiverLinker: '李现3',
        receiverMobile: '13876564758',
        receiverAddr: '成都市双阳区'
      },
      {
        receiverLinker: '杨紫3',
        receiverMobile: '13476564758',
        receiverAddr: '成都市双阳区'
      }
    ],
    dialogShow: false, // 删除弹出提示
    buttons: [ // 删除弹出提示按钮
      {
        text: '确定'
      },
      {
        text: '取消'
      }
    ],
    defaultRadioIndex: '' // 默认地址
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options, this.data.mailList)
    // 请求数据
    this.setData({
      dataList: this.data.mailList
    })
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
  onPullDownRefresh: function (options) {
    console.log(options, '---onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (options) {
    console.log(options, '---onReachBottom')
    // 当前页数 < 总页数 请求
    // if (this.data.currentPage < this.data.totalPage) {

    // } else {

    // }
    this.setData({
      dataList: this.data.dataList.concat(this.data.mailList)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 搜索
  serach(e) {
    console.log(e.detail)
    this.setData({
      inputValue: e.detail
    })
  },
  // 弹出框点击确定
  tapDialogButton(e) {
    console.log('dialog', e.detail)
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },
  // 编辑
  editItem(e){
    let index = e.currentTarget.dataset.index
    let item = e.currentTarget.dataset.item
    console.log('edit', index, item)
  },
  // 删除
  deleteItem(e){
    let index = e.currentTarget.dataset.index
    let item = e.currentTarget.dataset.item
    console.log('del', index, item, e)
    this.setData({
      dialogShow: true
    })
  },
  // 设置默认地址
  setDefault(e) {
    let index = e.currentTarget.dataset.index
    let item = e.currentTarget.dataset.item
    this.setData({
      defaultRadioIndex: index
    })
    console.log(index, item, e)
  },
  // 新增地址
  addAddress() {
    console.log('地址')
  }
})