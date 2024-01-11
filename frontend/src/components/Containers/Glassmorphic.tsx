import './styles.css'

interface Props {
    children: React.ReactNode;
    className?: string;
    height?: string;
    width?: string;
}

function GlassmorphicContainer(props: Props) {
    const containerStyle = {
        height: props.height,
        width: props.width,
    };

    return (
        <div className={`App glassmorphic-container ${props.className}`} style={containerStyle}>
            {props.children}
        </div>
    );
}

export default GlassmorphicContainer;