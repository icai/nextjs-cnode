import { ComponentClass } from 'react'
import React, { Component, Config } from 'react'
import { View } from 'ui'
import Header from 'components/header/index'
// import {  AtInput } from 'taro-ui'
import { withUser } from "hoc/router";
import * as utils from "libs/utils";

import './index.scss'


class Login extends Component {
  config: Config = {
    navigationBarTitleText: "登录"
  };

  state = {
    token: "",
    err: {
      isHiddenIcon: true,
      iconSize: 36,
      iconType: "error",
      iconColor: "#f00",
      text: ""
    }
  };

  showMessage(message) {
    utils.showToast({ title: message });
  }
  logon = () => {
    if (this.state.token === "") {
      this.showMessage("令牌格式错误,应为36位UUID字符串");
      return false;
    }
    this.props.authLogin(this.state.token).then(() => {
      utils.navigateTo({ url: "/list" });
    });
  };
  handleChange(val) {
    this.setState({ token: val });
  }
  render() {
    const { token } = this.state;
    return <View className="login-page">
        <Header pageType={"登录"} fixHead={true} needAdd={true} />
        <View className="page-body">
          <View className="label">
          <input className="txt" type="text" placeholder="Access Token" value={token} onChange={this.handleChange.bind(this)} maxlength="36" />
          </View>
          <View className="label">
            <View className="button" onClick={this.logon}>
              登录
            </View>
          </View>
        </View>
      </View>;
  }
}

export default withUser(Login, true);
