import { ComponentClass } from 'react'
import React, { Component } from 'react'
import { View } from 'ui'
import Header from 'components/header/index'
import { withUser } from "hoc/router";
import * as utils from "libs/utils";
import Layout from 'components/layout';

import './index.scss'


class Login extends Component {

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
    return <Layout className="login-page" title="登录">
        <Header pageType={"登录"} fixHead={true} needAdd={true} />
        <View className="page-body">
          <View className="label">
            <input className="txt" type="text" placeholder="Access Token" value={token} onChange={this.handleChange.bind(this)} maxLength="36" />
          </View>
          <View className="label">
            <View className="button" onClick={this.logon}>
              登录
            </View>
          </View>
        </View>
      </Layout>;
  }
}

export default withUser(Login, true);
