import classNames from 'classnames'
import React from 'react'

import './index.scss';

export const View = (props)=> {
    const { children, className } = props;
    return <div className={className} {...props}>
        {children}
      </div>;
}

export const Text = (props) => {
    const { children, className } = props;
    return <span className={className} {...props}>
        {children}
    </span>;
}


interface Imageprops {
    src: string;
    mode?: 'widthFix' | 'scaleToFill';
    onLoad?: React.ReactEventHandler;
    onError?: React.ReactEventHandler;
    style?: any;
    className?: string;
}

export const Image = ({ className, src, style, mode, onLoad, onError, ...reset }: Imageprops) => {
         const cls = classNames("taro-img", { "taro-img__widthfix": mode === "widthFix" }, className);
         const imgCls = "taro-img__mode-" + (mode || "scaleToFill")
             .toLowerCase()
             .replace(/\s/g, "");

         return <div className={cls} style={style} {...reset}>
             <img className={imgCls} src={src} onLoad={onLoad} onError={onError} />
           </div>;
       };