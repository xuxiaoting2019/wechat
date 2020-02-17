// 封装wx请求
const host = 'https://xxx.com'
const DEFAULT_REQUEST_OPTIONS = { // 设置默认参数
  url: '',
  data: {},
  header: {
    "Content-Type": "application/json"
  },
  method: 'POST',
  dataType: 'json'
}

  // 此处省略部分代码
export default function request(opt = DEFAULT_REQUEST_OPTIONS) {
  let { url, data, header, method, dataType } = opt
  let self = this
  console.log(host + url)
  return new Promise((resolve, reject)=>{
    wx.request({
      url: host + url,
      data: data,
      header: header,
      method: method,
      dataType: dataType,
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err);
      }
    })
  })
}
