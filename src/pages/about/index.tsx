// import { ComponentClass } from 'react'
import React, { Component } from "react";
import { View, ScrollView } from 'ui';
import Header from 'components/header'
import Layout from "components/layout";


import './index.scss'

// interface IProps {
//   props: IProps;
// }


// interface IState {
//   props: IProps;
// }


class About extends Component<{}, {}> {


  render () {
    return (
      <View className="flex-wrp"  >
        <Header pageType={"关于"} fixHead={true} needAdd={true} ></Header>
        <ScrollView  className="about-info" style="height:100vh">
          <dt>关于项目</dt>
          <dd>该项目是基于 https://cnodejs.org 的api，React 编写的 多端App。</dd>
          <dt>源码地址</dt>
          <dd>
            <a href="https://github.com/icai/taro-cnode">
              https://github.com/icai/taro-cnode</a>
          </dd>
          <dt>意见反馈</dt>
          <dd>
            <a href="https://github.com/icai/taro-cnode/issues">
              发表意见或者提需求</a>
          </dd>
          <dt>当前版本</dt>
          <dd>V1.0</dd>
        </ScrollView>
      </View>

    )
  }
}

export default About
