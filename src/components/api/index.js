/**
 * Created by ArvinChen9539 on 2017/11/6.
 */
import config from '../../../config/index'
import ApiUtil from './util'
import axios from 'axios'
import qs from 'qs'

const apiInstance =  axios.create({
    baseURL: config.build.webPath,
    method:'post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        ticket:ApiUtil.ticket()
    },
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        data = qs.stringify(data);
        return data;
    }],
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        console.log(data);
        data = JSON.parse(data);
        return JSON.stringify(data);
    }],
});

const api = function(url,data,options){
    return apiInstance.post(url,data);
}
export default  api;