import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import './index.scss'
import withShare from "../../decorator/withShare";


@connect(({ global }) => ({
  ...global,
}))
@withShare({
  title: '可设置分享标题',
  imageUrl: '可设置分享图片路径',
  path: '可设置分享路径'
})
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  test = () => {
    this.props.dispatch({
      type:'global/updateState',
      payload: {
        test:'Hello world!'
      }
    })
    console.log('......')
  }
  render () {
    return (
      <View className='index'>
        <Text>{this.props.test}</Text>
        <View className='see-des' onClick={this.test}>
          <Text>click</Text>
        </View>
      </View>
    )
  }
}

