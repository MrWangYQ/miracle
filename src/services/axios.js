// 通用拦截器
import axios from 'axios';
import { Message, Loading } from 'element-ui';
import conf from './config.js';
import qs from 'qs';

let baseUrl = conf.baseUrl;
let loading;

if (process.env.NODE_ENV === 'development') {
  baseUrl = conf.defaultUrl;
}

function startLoading () { // 使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: 'loading……',
    background: 'rgba(0, 0, 0, 0.2)'
  });
};

function endLoading () { // 使用Element loading-close 方法
  loading.close();
};

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; /* 配置请求头 */
// axios.defaults.withCredentials = true; /* 配置跨域请求头携带 cookies */
// axios.defaults.timeout = 30000; /* 配置响应时间 */

// http request 拦截器
axios.interceptors.request.use(config => {
  // 支持传全地址，自定义特殊地址
  if (!(/^(http|https)/.test(config.baseURL))) {
    config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    config.baseURL = baseUrl;
    config.withCredentials = true;
    config.timeout = 30000;
  }

  let token = null;
  if (sessionStorage.getItem('token')) {
    token = sessionStorage.getItem('token');
  }
  if (token) {
    switch (config.method) {
      case 'post':
        // form 表单形式提交不处理
        if (config.data && (typeof config.data !== 'string') && !config.data.token) {
          config.data.token = token;
        }
        break;
      case 'get':
        if (config.params && !config.params.token) {
          config.params.token = token;
        }
        break;
    }
  }
  return config;
},
err => {
  return Promise.reject(err);
}
);
// http response 拦截器
axios.interceptors.response.use(response => {
  startLoading();
  if (response.data.code && response.data.code === 200) {
    endLoading();
    return response.data;
  } else {
    endLoading();
    // Message.error(response.data.info);
    return Promise.resolve(response.data);
  }
},
error => {
  endLoading();
  Message.error(error.message);
  return Promise.reject(error);
}
);

let postFromData = function (url, data = {}, config) {
  let qsData = '';
  if (data.constructor === Object) {
    qsData = qs.stringify(data);
  }
  return axios.post(url, qsData, config);
};

const getData = function getData (url, data, config) {
  return axios.get(url, data, config);
};

export {
  postFromData,
  getData
};
