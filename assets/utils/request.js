import axios from '@/js_sdk/xtshadow-axios/axios.min'

axios.get('https://api.github.com').then(res => {
  console.log(res.data);

})


export default axios