interface Props {
    children: React.ReactNode;
    className?: string;
    height?: string;
    width?: string;
}

function BorderContainer(props: Props) {
    const containerStyle = {
        height: props.height,
        width: props.width,
    };

    return (
        <div className={`border-container ${props.className}`} style={containerStyle}>
            {props.children}
        </div>
    )
}

export default BorderContainer;