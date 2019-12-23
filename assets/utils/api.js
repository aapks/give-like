import { http } from '@/js_sdk/luch-request'

export const login = (params) => axios.get('/login', params);

// 任务大厅
// 分类列表
export const Category = (params) => http.get('/v2/taskCategory');
//任务列表
export const Task = (params) => http.get('/v2/task?cid='+params.cid);
// 接单
export const Payorder = (params) => http.post('/v2/orderApply',params);
//发布任务
export const Release = (params) => http.post('/v2/task',params);
//获取任务类型
export const taskType = (params) => http.get('/v2/taskType',params);



//个人中心
// 我的任务
export const Mytask = (params) => http.get('/v2/myApply?status='+params.id);
//我的地址
export const Myaddrsss = (params) => http.get('/v2/address');
//添加编辑地址

export const Addrsss = (params) => http.post('/v2/address');


// <-----------------------其他----------------------->

// 登录
export const Login = (params) => http.post('/v2/login',params);
//注册
export const Register = (params) => http.post('/v2/register',params);
//发送验证码
export const Getcode = (params) => http.post('/v2/merchant_code',params);
//忘记密码
export const Forget = (params) => http.put('/v2/fpassword',params);

//设置支付密码
export const Setpaypwd = (params) => http.put('/v2/paypwd',params);
//修改密码
export const Repwd = (params) => http.put('/v2/password',params);