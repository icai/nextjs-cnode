import { View } from "ui";
import React, { Component } from "react";
import Router, { withRouter } from "next/router";

import * as utils from 'libs/utils';

type IProps = {
  to: {
    url: string;
    params?: object;
  };
  style?: object,
  className?: string;
  children?: React.ReactNode
};
type PageState = {

}



// interface Link<ReactElement = any>  { }

class Link extends Component<IProps, PageState> {
  static defaultProps = {
    to: {
      url: "",
      params: {}
    },
    style: {},
    className: '',
    children: ''
  };

  goTo = ({ url, params }) => {
    const href = url + (params ? "?" + utils.param(params) : "");
    Router.push(href);
    // window.location.href = href;
    // return false;
  };
  render() {
    const { className, style, to, children, ...rest } = this.props;
    const withpointer = { ...style, cursor: "pointer" };
    return (
      <View
        className={className}
        style={withpointer}
        onClick={this.goTo.bind(this, to)}
        {...rest}
      >
        {children}
      </View>
    );
  }
}

export default withRouter(Link);
