import request from '../../utils/http.js'
import service from './service.js'

export async function getUserOrderList(data) {
  let res = await request({
    url: service.getUserOrderList,
    data
  })
  return res
}
export async function getUserOrderDetail(data) {
  let res = await request({
    url: service.getUserOrderDetail,
    data
  })
  return res
}