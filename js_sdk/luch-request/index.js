import Request from './request'


const http = new Request()

http.setConfig(config => {
  /* 设置全局配置 */
  config.baseUrl =
    'http://ycdianzan.zhaochuanwei.top/dianzan.php' /* 根域名不同 */
  config.header = {
    ...config.header
  }
  return config
})

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
http.validateStatus = statusCode => {
  return statusCode === 200
}

http.interceptor.request((config, cancel) => {
  /* 请求之前拦截器 */
  // console.log('cancel: ', cancel);
  // console.log('config: ', config);
  config.header = {
    ...config.header
  }
  let token = uni.getStorageSync('token') || ''
  if (token) {
    config.header.token = token
  }
  /*
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
  }
  */
  return config
})

http.interceptor.response(
  response => {
    /* 请求之后拦截器 */
    if (process.env.NODE_ENV === 'development') {
      console.log(`接口地址: ${response.config.url}`, response.data)
    }
	if(response.statusCode!==200){
		return Promise.reject(response)
	}
	if(response.data.code===1){
		
	}else if(response.data.code===601||response.data.code===600 ){
		uni.reLaunch({
		    url: '/pages/login/login'
		});
	}else{
		uni.showToast({
		  title: response.data.msg,
		  icon: "none"
		});
	}
	return Promise.resolve(response.data)
  },
  err => {
    return err
  }
)

export { http }
