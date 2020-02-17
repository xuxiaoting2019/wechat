// pages/order/order.js
import { getUserOrderList } from './server'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '', // 搜索条件
    dataList: [], // 订单列表
    currentPage: 1, // 当前页
    pageSize: 10, // 一页10条
    total: 23, // 总条数
    totalPage: 0, // 总页数
    loaded: false, // 是否加载完毕
    dataObj: {
      orderNo: 13456,
      bizOccurdate: '2018-12-34',
      senderLinker: '李现',
      senderCityName: '武汉',
      receiverLinker: '杨紫',
      receiverCityName: '成都',
      orderState: '已下单' // 1：已下单（待接单）（已支付）  2：已取消  3：已拒单  4：已接单（待打单）  5：已撤单   6：已打单（待发货）  7：已发货
    }
  },
  // 请求列表数据
  async queryList(param) {
    const params = {
      currentPage: this.data.currentPage,
      pageSize: this.data.pageSize
    }
    const res = await getUserOrderList(params)
    if (param) { // 初始化加载
      this.setData({
        // totalPage: Math.ceil(res.total / this.data.pageSize)
        totalPage: Math.ceil(this.data.total / this.data.pageSize)
      })
    }
    this.setData({
      dataList: this.data.dataList.concat(res.data)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.queryList(1)
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
    this.setData({
      currentPage: this.data.currentPage + 1
    })
    if (this.data.currentPage <= this.data.totalPage) {
      // 请求数据
      this.queryList()
    } else {
      // 展示没有数据了
      this.setData({
        loaded: true
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goDetail(e) {
    const item = e.currentTarget.dataset.item
    const orderNo = e.currentTarget.dataset.item.orderNo
    wx.navigateTo({
      url: `pages/checkDetail/checkDetail`,
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('checkItem', { data: item })
      }
    })
  },
  scanCode() {
    wx.scanCode({
      success(res) {
        console.log(res, '------res')
      },
      fail(err) {
        console.log(err, '-----err')
      },
      complete(finish) {
        console.log(finish, '-----finish')
      }
    })
  },
  bindinput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindconfirm(e) {
    this.setData({
      inputValue: e.detail.value
    })
    console.log(this.data.inputValue, '-----搜索条件')
  },
  search(e) {
    console.log(e, this.data.inputValue)
  }
})