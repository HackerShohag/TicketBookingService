import './styles.css'

interface Props {
    children: React.ReactNode;
    className?: string;
    height?: string;
    width?: string;
}

function SolidContainer(props: Props) {
    const containerStyle = {
        height: props.height,
        width: props.width,
    };

    return (
        <div className={`App solid-container ${props.className}`} style={containerStyle}>
            {props.children}
        </div>
    );
}

export default SolidContainer;