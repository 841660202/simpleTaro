import Taro from '@tarojs/taro';
import { baseUrl, noConsole } from '../config';
import {SERVER_URL, VERSION} from "../config/config.server";

const request_data = {
  platform: 'wap',
  rent_mode: 2,
};

export default (api, options = { method: 'GET', params: {} }) => {
  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 M=${api} 】P=${JSON.stringify(options.params)}`);
  }
  let requestApi =
    api.indexOf('logistics') < 0
      ? `${SERVER_URL}/logistics/web/${VERSION}${api}`
      : `${SERVER_URL}${api}`
  return Taro.request({
    url: requestApi,
    data: {
      ...request_data,
      ...options.params
    },
    header: {
      'Content-Type': 'application/json',
    },
    method: options.method.toUpperCase(),
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(`${new Date().toLocaleString()}【 M=${api} 】【接口响应：】`,res.data);
      }
      console.log('data',data)
      if (data.returnCode !== '000000') {
       try {
         Taro.showToast({
           title: data && (data.returnMeaage || data.returnMessage),
           icon: 'none',
           mask: true,
         });
       } catch(error) {

       }
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
}

