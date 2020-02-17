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
Mock.mock('https://xxx.com/getHistory',{ // 获取历史记录
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


