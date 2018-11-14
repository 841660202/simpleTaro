import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import { AtGrid, AtNoticebar } from "taro-ui"
import './index.scss'
import {GRID_NAV} from "./const";
// import withShare from "../../decorator/withShare";


@connect(({ global }) => ({
  ...global,
}))
// @withShare({
//   title: '可设置分享标题',
//   imageUrl: '可设置分享图片路径',
//   path: '可设置分享路径'
// })
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    navigationBarTextStyle: '#fff',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    return (
      <View className='index'>
        <View className='see-des'>
          <AtGrid
            className='bg-p f-c-w '
            hasBorder={false}
            columnNum={3}
            data={GRID_NAV.slice(0,3)}
          />
          <AtNoticebar marquee icon='volume-plus'>
            全场1折起，错过再等一年
          </AtNoticebar>
          <View className='left-bar'><Text>菜单</Text></View>
          <AtGrid
            hasBorder={false}
            columnNum={4}
            data={GRID_NAV}
          />
        </View>
      </View>
    )
  }
}

