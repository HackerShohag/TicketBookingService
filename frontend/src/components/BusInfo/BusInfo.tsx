// BusInfo.tsx
import React from 'react';
import './BusInfo.css';


interface BusInfoProps {
    name: string;
    id: string;
    seatAvailability: number;
    departureTime: string;
    image: string;
    route: string;
    fare: number;
    onButtonClick?: (() => void) | undefined;
}

const BusInfo: React.FC<BusInfoProps> = ({
    name,
    id,
    seatAvailability,
    departureTime,
    image,
    route,
    fare,
    onButtonClick,
}) => {
    return (
        <div className="info-row">
            <div className="column">
                <img src={image} alt="Bus Image" className="bus-image" />
            </div>
            <div className="column bus-info">
                <h3>Bus Name: {name}</h3>
                <p>Bus ID: {id}</p>
                <p>Route: {route}</p>
                <p>Departure Time: {departureTime}</p>
            </div>
            <div className="column payment-info">
                <p>Fare: {fare}</p>
                <p>Seat Availability: {seatAvailability}</p>
                {/* Add more payment information as needed */}
                <button className="book-button" onClick={() => onButtonClick && onButtonClick()}>Book Now</button>
            </div>
        </div>
    );
};

export default BusInfo;