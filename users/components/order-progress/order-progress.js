// pages/order/order.js

Component({
  behaviors: [],
  // 属性定义（详情参见下文）
  properties: {
    dataList: { // 属性名
      type: Array,
      value: []
    }
  },
  data: {
    
  }, // 私有数据，可用于模板渲染
  observers: {
    dataList: function(list) {
      console.log(1, list)
    }
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    created() {
    },
    ready() {
    },
    attached: function () { 
    },
    moved: function () { },
    detached: function () { },
  },
  methods: {
    _viewOrder(e) {
      this.triggerEvent('viewOrder', this.data.dataObj)
    }
  }
})