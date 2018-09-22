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