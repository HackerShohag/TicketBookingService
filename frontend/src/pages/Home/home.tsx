import { useNavigate } from 'react-router-dom';

// components import
import SolidContainer from '../../components/Containers/SolidContainer';

// logo imports
import busLogo from '../../assets/bus-logo.jpg';
import hotelLogo from '../../assets/hotel-logo.png';
import trainLogo from '../../assets/train-logo.jpg';

// css imports
import './home.css';

function Home() {
    const navigate = useNavigate();

    const serviceContainerStyle = {
        height: '300px',
        width: '250px',
    };

    return (
        <div className='logo-container'>
            <div className="container-wrapper">
                <SolidContainer className='clickable' height={serviceContainerStyle.height} width={serviceContainerStyle.width}>
                    <div className='logo-container' onClick={() => navigate('/bus')}>
                        <img src={busLogo} alt="Bus Logo" className="logo-image" />
                        <h2>Bus Ticket Booking</h2>
                    </div>
                </SolidContainer>
                <SolidContainer className='clickable' height={serviceContainerStyle.height} width={serviceContainerStyle.width}>
                    <div className="logo-container" onClick={() => { alert("This service is coming soon!") }}>
                        <img src={hotelLogo} alt="Hotel Logo" className="logo-image" />
                        <h2>Hotel Booking</h2>
                        <div className="coming-soon">Coming Soon</div>
                    </div>
                </SolidContainer>
                <SolidContainer className='clickable' height={serviceContainerStyle.height} width={serviceContainerStyle.width}>
                    <div className="logo-container" onClick={() => { alert("This service is coming soon!") }}>
                        <img src={trainLogo} alt="Train Logo" className="logo-image" />
                        <h2>Train Ticket Booking</h2>
                        <div className="coming-soon">Coming Soon</div>
                    </div>
                </SolidContainer>
            </div>
            <h1>Shotti Bookings</h1>
        </div>
    );
}

export default Home;
