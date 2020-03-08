import axios from 'axios'
import Vue from 'vue'
import route from '@/router'


const inter = axios.create({
  withCredentials: true,
  timeout: 6000
})

// 请求
inter.interceptors.request.use(config => {
  return config
})

// 响应
inter.interceptors.response.use(res => {
  return res
}, err => {
  return Promise.reject(err)
})

Vue.prototype.$axios = inter