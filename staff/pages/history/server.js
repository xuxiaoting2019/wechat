import request from '../../utils/http.js'

export async function getHistory(data) {
  let res = await request({
    url: '/getHistory',
    data
  })
  console.log(res)
}