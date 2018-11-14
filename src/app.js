import '@tarojs/async-await' // 少引入这个，总是包运行时错误
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'
import dva from './utils/dva'
import models from './models'

import './styles/base.scss'
import './app.scss'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

class App extends Component {

  config = {
    pages: [
      'pages/login/index',
      'pages/home/index',
      'pages/msg/index',
      'pages/account/index',
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#71a8ef',
      navigationBarTitleText: '🌟',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./images/tab/home.png",
        selectedIconPath: "./images/tab/home-active.png"
      }, {
        pagePath: "pages/msg/index",
        text: "消息",
        iconPath: "./images/tab/cart.png",
        selectedIconPath: "./images/tab/cart-active.png"
      },{
        pagePath: "pages/account/index",
        text: "我的",
        iconPath: "./images/tab/user.png",
        selectedIconPath: "./images/tab/user-active.png"
      }],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: '#ccc'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
