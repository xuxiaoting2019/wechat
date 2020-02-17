
Page({
  data: {
    tabArr: [
      {
        name: '等待接单',
        value: '0'
      },
      {
        name: '等待打单',
        value: '1'
      }
    ],
    buttons: [
      {
        text: '取消'
      },
      {
        text: '确定'
      }
    ],
    dataList: [
      {
        sendName: '李四',
        collectName: '王五',
        address:'北京市昌平区',
        phone: '',
        time: '2019-09-24'
      },
      {
        sendName: '李四',
        collectName: '王五',
        address:'北京市昌平区',
        phone: '123132',
        time: '2019-09-24'
      },
      {
        sendName: '李四',
        collectName: '王五',
        address:'北京市昌平区',
        phone: '123132',
        time: '2019-09-24'
      },
      {
        sendName: '李四',
        collectName: '王五',
        address:'北京市昌平区',
        phone: '123132',
        time: '2019-09-24'
      },
      {
        sendName: '李四',
        collectName: '王五',
        address:'北京市昌平区',
        phone: '123132',
        time: '2019-09-24'
      }
    ],
    todoBtns: [
      {
        desc: '接单',
        value: 'accept'
      },
      {
        desc: '拒单',
        value: 'refuse'
      }
    ],
    maxlength: 6,
    focus:true,
    currentTab: '0',
    isRefuse: false,
    isPrint: false
  },
  // 子组件点击事件：接单、拒单、打印
  commentBtn(e) {
    console.log(e)
    const method = e.detail.currentTarget.dataset.item.value
    if(method === 'accept') {
      this.accept()
    } else if(method === 'refuse') {
      this.refuse()
    } else if (method === 'print'){
      this.print()
    }
  },
  // tab切换
  changeNav(e) {
    if(e.currentTarget.dataset.item.value === '1') {
      this.setData({
        todoBtns: [
          {
            desc: '打单',
            value: 'print'
          }
        ]
      })
    } else {
      this.setData({
        todoBtns: [
          {
            desc: '接单',
            value: 'accept'
          },
          {
            desc: '拒单',
            value: 'refuse'
          }
        ]
      })
    }
    this.setData({
      currentTab: e.currentTarget.dataset.item.value
    })
  },
  // 接单
  accept: function() {
    wx.navigateTo({
      url: '/pages/receiving/orderReceiving/orderReceiving',
    })
  },
  // 拒单
  refuse() {
    this.setData({
      isRefuse: !this.data.isRefuse
    })
  },
  // 打印
  print() {
    this.setData({
      isPrint: !isPrint
    })
  },
  // 确认是否拒单
  tapDialogButton(e) {
    if(e.detail.index === 0) { //取消
      console.log('取消')
      this.setData({
        isRefuse: false
      })
    } else { // 确定
      console.log('确定')
      this.setData({
        isRefuse: false
      })
    }
  },
  
})