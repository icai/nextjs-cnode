import { ComponentClass } from 'react'
import React, { Component, Config } from 'react'
import { View, Button, Image, Text } from "ui";
import Link from "components/link";
import { connect } from 'react-redux'
import * as actions from "../../actions/auth";
import { IAuth } from "../../interfaces/auth";


import './index.scss'

type PageStateProps = {
  userInfo: IAuth;
};

// interface PageStateProps {
//   userInfo: IAuth;
// }

type PageDispatchProps = {
  authCheckState: () => void;
};

type PageOwnProps = {

};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

@connect(
  ({ auth }) => ({
    userInfo: auth
  }),
  (dispatch: Function) => ({
    authCheckState() {
      dispatch(actions.authCheckState());
    }
  })
)
class UserInfo extends Component<IProps, PageState> {
  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps);
  }
  componentWillMount() {
    this.props.authCheckState();
  }
  render() {
    const userInfo = this.props.userInfo;
    return <View className="user-info">
        {!userInfo.loginname ? <Link className="login-no" to={{ url: "/login" }}>
            <View className="login">
              <View>登录</View>
            </View>
          </Link> : <Link className="login-yes" to={{ url: "/user", params: { loginname: userInfo.loginname } }}>
            <View className="avertar">
              {userInfo.avatar_url ? (
                <Image class="avertar" src={userInfo.avatar_url} />
              ) : (
                ""
              )}
            </View>
            <View className="info">
              {userInfo.loginname ? <Text>{userInfo.loginname}</Text> : ""}
            </View>
          </Link>}
      </View>;
  }
}



export default UserInfo as ComponentClass<IProps, PageState>;
