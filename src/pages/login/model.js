import Taro from '@tarojs/taro';

import { fetchLogin } from './service'
import {createAction} from "../../utils";

export default {
  namespace: 'login',
  state: {
    login: false,
    fetching: false,
    userId: '21765',
    pword: 'a123',
    remember: false,
    isProcessing: false,
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    * login(_, { call, put, select }) {
      yield put(createAction('updateState')({ isProcessing: true }))
      yield put(createAction('updateState')({ fetching: true }))
      const loginState = yield select(state => state.login)
      const params = {
        userId: loginState.userId,
        pword: loginState.pword,
      }
      const loginModel = yield call(fetchLogin, params)
      yield put(createAction('updateState')({ isProcessing: false }))
      if (loginModel && loginModel.data) {
        Taro.switchTab({
          url: '/pages/home/index'
        })
      }
      return loginModel
    },
  },
}
