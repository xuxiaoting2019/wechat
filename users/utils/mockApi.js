// 定义mock数据接口
var Mock = require("./wxMock.js"); 
Mock.mock('https://xxx.com/users',{
  "code":200,
  "data|1-20":[
    {
      "name":function() {
        return Mock.Random.cname()
      },
      "lastLogin":function() {
        return Mock.Random.datetime()
      }
    }
  ]
})
// 获取查询订单列表
Mock.mock('https://xxx.com/getUserOrderList',{
  "code":200,
  "data|10":[
    {
      orderNo: function() {
        return Mock.Random.natural(1, 100)
      },
      senderLinker: function() {
        return Mock.Random.cname()
      },
      receiverLinker: function() {
        return Mock.Random.cname()
      },
      senderCityName: function() {
        return Mock.Random.region()
      },
      receiverCityName: function() {
        return Mock.Random.region()
      },
      bizOccurdate: function() {
        return Mock.Random.datetime()
      },
      orderState: function() {
        return Mock.Random.natural(1, 3)
      },
      "address":function() {
        return Mock.Random.cname()
      },
      "sender":function() {
        return Mock.Random.cname()
      },
      "receive":function() {
        return Mock.Random.cname()
      },
      "date":function() {
        return Mock.Random.datetime()
      },
      "telephone":function() {
        return Mock.Random.cname()
      }
    }
  ]
})
// 获取查询订单列表详情
Mock.mock('https://xxx.com/getUserOrderDetail',{
  "code":200,
  "data":{
    orderNo: function() {
      return Mock.Random.natural(1, 100)
    },
    senderLinker: function() {
      return Mock.Random.cname()
    },
    receiverLinker: function() {
      return Mock.Random.cname()
    },
    senderCityName: function() {
      return Mock.Random.region()
    },
    receiverCityName: function() {
      return Mock.Random.region()
    },
    bizOccurdate: function() {
      return Mock.Random.datetime()
    },
    orderState: function() {
      return Mock.Random.natural(0, 3)
    },
    senderLinker: function() {
      return Mock.Random.cname()
    },
    receiverMobile: function() {
      return Mock.Random.cname()
    },
    "sender":function() {
      return Mock.Random.cname()
    },
    "receive":function() {
      return Mock.Random.cname()
    },
    "date":function() {
      return Mock.Random.datetime()
    },
    "telephone":function() {
      return Mock.Random.cname()
    }
  }
})
// 获取地址簿列表接口
Mock.mock('https://xxx.com/getAddressList',{
  "code":200,
  "data|1-20":[
    {
      "address":function() {
        return Mock.Random.cname()
      },
      "sender":function() {
        return Mock.Random.cname()
      },
      "receive":function() {
        return Mock.Random.cname()
      },
      "date":function() {
        return Mock.Random.datetime()
      },
      "telephone":function() {
        return Mock.Random.cname()
      }
    }
  ]
})