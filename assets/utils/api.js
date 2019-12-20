import request from './request'

export const login = (params) => request.get('/login', params);