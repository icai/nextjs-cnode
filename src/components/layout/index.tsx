import { Component } from "react";
import { View } from "ui";
import Head from "next/head";
import "assets/scss/app.scss";

export default class Layout extends Component<{
    className: string
    title?: string
}>  {
    render() {
        const { children, className, title } = this.props;
        const clsName = className || "flex-wrp" 

        return <View className={clsName}>
            <Head>
              <meta charSet="utf-8" />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {title ? <title>{title}</title>: ''}
            </Head>
            {children}
          </View>;
    }
}



