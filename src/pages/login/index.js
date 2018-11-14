import Taro, {Component} from '@tarojs/taro'
import {View, Button, Checkbox, CheckboxGroup} from '@tarojs/components'
import {AtForm, AtInput, AtAvatar} from 'taro-ui'
import {connect} from '@tarojs/redux';
import {createAction, isEmpty, Toast} from "../../utils";
import avatar from '../../images/login-head/login-head.png'
// import loginBtn from '../../images/login-btn/login-btn.png'
// import userIcon from '../../images/user-icon/user-icon.png'
// import lockIcon from '../../images/lock-icon/lock-icon.png'

@connect(({login}) => ({login, ...login}))
export default class Login extends Component {
  constructor() {
    super(...arguments)
  }

  componentDidMount() {
    this.getMultiKeys()
  }

  getMultiKeys = async () => {
    const result = await Taro.getStorageSync('loginInfo')
    if (result.remember) {
      this.updateState({
        ...result,
      })
    }
  }

  handleChange = (type, value) => {
    switch (type) {
      case 'userId':
        this.updateState({userId: value})
        break
      case 'pword':
        this.updateState({pword: value})
        break
    }
  }

  handleLogin = () => {
    if (isEmpty(this.props.userId)) {
      Toast.simple('请填写账户');
      return
    }
    if (isEmpty(this.props.pword)) {
      Toast.simple('请填写密码');
      return
    }
    this.props.dispatch(createAction('login/login')())
  }

  updateState = async obj => {
    await this.props.dispatch(createAction('login/updateState')(obj))
    const loginInfo = {
      userId: this.props.userId,
      pword: this.props.pword,
      remember: this.props.remember
    }
    await Taro.setStorageSync('loginInfo', loginInfo)
  }

  handleCheck = (e) => {
    this.updateState({remember: e.target.value[0] === 'true'})
  }

  render() {
    const {userId, pword, isProcessing, remember} = this.props
    return (
      <View className='login-container'>
        <AtForm>
          <View className='login-avator'>
            <AtAvatar
              circle
              image={avatar}
              size='large'
            ></AtAvatar>
          </View>
          <AtInput
            name='value'
            title='账号'
            type='text'
            placeholder=''
            value={userId}
            onChange={this.handleChange.bind(this, 'userId')}
          />
          <AtInput
            name='value3'
            title='密码'
            type='password'
            placeholder=''
            value={pword}
            onChange={this.handleChange.bind(this, 'pword')}
          />
          <View className='login-remember'>
            <CheckboxGroup onChange={this.handleCheck.bind(this)}>
              <Checkbox value='true' checked={remember}>记住账号密码</Checkbox>
            </CheckboxGroup>
          </View>
          <Button
            loading={isProcessing}
            className='login-submit'
            onClick={this.handleLogin}
            type='primary'
          >登 陆</Button>
        </AtForm>
      </View>
    )
  }
}
