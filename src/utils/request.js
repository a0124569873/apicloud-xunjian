import axios from 'axios'
import { Toast } from 'vant'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://10.168.5.210:8880/hjzk/', // api的base_url
  timeout: 15000 // 请求超时时间
})
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  // config.headers['X-Requested-With'] = 'XMLHttpRequest'
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'

  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
      return response.data
  },
  error => {
    console.log('err' + error)// for debug
    Toast(error.message)
    return Promise.reject(error)
  }
)

export default service