import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import {AtAvatar, AtList, AtListItem, AtButton} from 'taro-ui'
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
    navigationBarTitleText: '我的',
    navigationBarTextStyle: '#fff',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    return (
      <View className='account-container'>
       <View className='top-bar'>
         <AtAvatar className='avator' circle size='large' image='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'></AtAvatar>
         <View className='user-info'>
           <Text>姓名: 明世引</Text>
           <Text>账号: 21765</Text>
         </View>
       </View>
        <AtList>
          <AtListItem
            title='标题文字'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          />
          <AtListItem
            title='标题文字'
            arrow='right'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='标题文字'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
          <AtListItem
            title='标题文字'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          />
          <AtListItem
            title='标题文字'
            arrow='right'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='标题文字'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
        </AtList>

       <View className='logout-btn'>
         <AtButton className='logout'>退出登陆</AtButton>
       </View>
      </View>
    )
  }
}

