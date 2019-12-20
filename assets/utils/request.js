import axios from '@/js_sdk/xtshadow-axios/axios.min'
// 插件地址 https://ext.dcloud.net.cn/plugin?id=1088
const instance = axios.create({
  baseURL: '',
  timeout: 6000
})

export default instance