import { Component } from "react";
import { View } from "ui";
import Head from "next/head";
// import Link from "next/link";

import "../../assets/scss/app.scss";

export default class Layout extends Component  {
    render() {
        const { children } = this.props;
        return <View className="flex-wrp">
            <Head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            {children}
        </View>;
    }
}



