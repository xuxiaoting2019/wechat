import request from '../../utils/http.js'
import service from './service.js'
export async function getUser(data) {
  let res = await request({
    url: service.user
  })
  console.log(res)
  return res
}
export async function getAddressList(data) {
  let res = await request({
    url: service.getAddressList,
    data
  })
  console.log(res)
  return res
}