import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/auth";
import { IAuth } from "../interfaces/auth";
import * as utils from 'libs/utils'
import redirect from "./redirect";

type PageStateProps = {
  userInfo: IAuth;
};


type PageDispatchProps = {
  authLogin:(token)=> void;
  authCheckState:() => void;
};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

function withUser(WrappedComponent, allowNologin = false) {
  class WithUserHOC extends WrappedComponent<IProps, PageState> {
    static async getInitialProps(context) {
      const { reduxStore } = context;
      const log = reduxStore.dispatch(actions.authCheckState());
      if (!(allowNologin || log)) {
        // Already signed in? No need to continue.
        // Throw them back to the main page
        redirect(context, "/login");
        return {};
      }
      let appProps = {};
      if (typeof WrappedComponent.getInitialProps === "function") {
        appProps = await WrappedComponent.getInitialProps.call(WrappedComponent, context);
      }
      return {
        ...appProps
      }
    }
    constructor() {
      super(...arguments);
    }
    
    isSuperRender() {
      const props = this.props;
      return allowNologin || (props.userInfo && props.userInfo.userId)
    }
    // refer  https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/Redirect.js
    perform() {
      if (!this.isSuperRender()) {
        utils.redirectTo({ url: "/login" });
      }
    }
    componentWillMount() {
      this.perform();
    }
    render() {
      if (this.isSuperRender()) {
        return super.render();
      } else {
        return null;
      }
    }
  };
  return connect(({ auth }) => ({ userInfo: auth }),
    (dispatch: Function) => ({
      authLogin: (token) => dispatch(actions.auth(token)),
      authCheckState: () => dispatch(actions.authCheckState())
    })
  )(WithUserHOC);
}


export { Component, withUser };


