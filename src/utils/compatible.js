import Taro from '@tarojs/taro';

export const IS_ALIPAY = Taro.getEnv() === Taro.ENV_TYPE.ALIPAY
export const IS_WEAPP = Taro.getEnv() === Taro.ENV_TYPE.WEAPP
export const IS_SWAN = Taro.getEnv() === Taro.ENV_TYPE.SWAN
export const IS_WEB = Taro.getEnv() === Taro.ENV_TYPE.WEB
export const IS_RN = Taro.getEnv() === Taro.ENV_TYPE.RN
