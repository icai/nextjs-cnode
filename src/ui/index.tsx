export const View = (props)=> {
    const { children, className } = props;
    return <div className={className} {...props}>
        {children}
      </div>;
}