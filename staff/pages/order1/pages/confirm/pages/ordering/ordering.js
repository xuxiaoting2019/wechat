Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: '../../../../assets/images/寄.png',
    img1: '../../../../assets/images/收.png',
    img2: '../../../../assets/images/形状.png',
    items: [
      { name: 'usa', value: '美国' },
      { name: 'chn', value: '中国' },
      { name: 'jpn', value: '日本' }
    ]
  },
  order: function () {
    wx.navigateTo({
      url: "./pages/ordering/ordering"
    })
  }
})