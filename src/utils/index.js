import Taro from '@tarojs/taro'

export const createAction = type => payload => ({type, payload})


export const reg = /^[1][3,4,5,7,8][0-9]{9}$/

export function dataIsNew(time) {
  const nowTime = new Date().getTime()
  if (time === null || time === undefined || time === '') {
    return false
  }
  const oldTime = new Date(time).getTime()
  if (nowTime - oldTime < 2 * 60 * 60 * 1000) {
    return true
  }
  return false
}

export function getYMD(time) {
  if (typeof time === 'string') {
    return time.substring(0, 10)
  }
  return ''
}

export function isEmpty(data) {
  if (
    data === null ||
    data === '' ||
    data === undefined ||
    data.trim() === ''
  ) {
    return true
  }
  return false
}

// 密码必须包含数字和字母

const regPassword = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/)

export function CheckPassWord(password) {
  const str = password
  if (str == null || str.length < 3) {
    console.log('密码过短！')
    return false
  }
  if (regPassword.test(str)) {
    return true
  }
  console.log('密码必须包含数字和字母！')
  return false
}

export function arrayUnique(array) {
  const res = []
  const json = {}
  for (let i = 0; i < array.length; i += 1) {
    if (!json[array[i].id]) {
      res.push(array[i])
      json[array[i]] = 1
    }
  }
  return res
}

export function versionCompare(server, local) {
  if (!server || !local) return false
  const version1pre = parseFloat(server)
  const version2pre = parseFloat(local)
  const version1next = server.replace(`${version1pre}.`, '')
  const version2next = local.replace(`${version2pre}.`, '')
  if (version1pre > version2pre) {
    // 大版本比较
    return true
  }
  if (version1pre < version2pre) {
    // 版本1小于版本2
    return false
  } // 版本相等---比较小版本
  if (version1next > version2next) {
    return true
  }
  return false
}

export const Toast = {
  simple:(text)=>  Taro.showToast({
    title: text,
    icon: 'none',
  }),
  success: (text) => Taro.atMessage({
    'message': text,
    'type': 'success',
  }),
  fail: (text) => Taro.atMessage({
    'message': text,
    'type': 'error',
  }),
  warn: (text) => Taro.atMessage({
    'message': text,
    'type': 'warning',
  }),
}
