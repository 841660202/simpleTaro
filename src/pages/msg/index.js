import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import {AtSegmentedControl, AtButton, AtList, AtListItem} from 'taro-ui'
import './index.scss'
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
    navigationBarTitleText: '消息',
    navigationBarTextStyle: '#fff',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
    return (
      <View className='msg-container'>
      <View className='top-bar'>
        <AtSegmentedControl
          className='segment-bar'
          values={['未读消息', '已读消息']}
          onClick={this.handleClick.bind(this)}
          selectedColor='#71a8ef'
          current={this.state.current}
        />
        <AtButton className='read-all' type='primary' size='small'>全读</AtButton>
      </View>
        <View>
          {
            this.state.current === 0
              ? <View className='tab-content'>
                <AtList>
                  <AtListItem
                    title='标题文字'
                    arrow='right'
                    thumb='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
                  />
                  <AtListItem
                    title='标题文字'
                    arrow='right'
                    thumb='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
                  />
                  <AtListItem
                    title='标题文字'
                    arrow='right'
                    thumb='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
                  />
                  <AtListItem
                    title='标题文字'
                    arrow='right'
                    thumb='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'

                  />
                  <AtListItem
                    title='标题文字'
                    arrow='right'
                    thumb='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
                  />
                  <AtListItem
                    title='标题文字'
                    arrow='right'
                    thumb='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
                  />
                </AtList>
              </View>
              : null
          }
          {
            this.state.current === 1
              ? <View className='tab-content'> <AtList>
                <AtListItem
                  title='标题文字'
                  arrow='right'
                  thumb='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
                />
                <AtListItem
                  title='标题文字'
                  arrow='right'
                  thumb='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
                />
                <AtListItem
                  title='标题文字'
                  arrow='right'
                  thumb='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
                />
                <AtListItem
                  title='标题文字'
                  arrow='right'
                />
                <AtListItem
                  title='标题文字'
                  arrow='right'
                  thumb='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
                />
                <AtListItem
                  title='标题文字'
                  arrow='right'
                  thumb='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
                />
              </AtList></View>
              : null
          }
        </View>
      </View>
    )
  }
}

