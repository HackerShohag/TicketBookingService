import React, { useState } from 'react';
import './BusSeatLayout.css'; // Import your CSS file for styling

interface SeatProps {
    seatNumber: string;
    isSelected: boolean;
    onSelect: () => void;
}

const Seat: React.FC<SeatProps> = ({ seatNumber, isSelected, onSelect }) => {
    return (
        <div
            className={`seat ${isSelected ? 'selected' : ''}`}
            onClick={onSelect}
        >
            {seatNumber}
        </div>
    );
};

const BlankSeat = () => {
    return (
        <div
            className={`blank-seat`}
        >
        </div>
    );
};

const SeatLayout: React.FC = () => {
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

    const handleSeatSelect = (seatNumber: string) => {
        setSelectedSeats((prevSelectedSeats) => {
            if (prevSelectedSeats.includes(seatNumber)) {
                // Deselect the seat if already selected
                return prevSelectedSeats.filter((seat) => seat !== seatNumber);
            } else {
                // Select the seat if not selected
                return [...prevSelectedSeats, seatNumber];
            }
        });
    };

    // Assuming a 9x5 grid layout with a blank column
    const rows = 9;
    const columns = 5;

    const renderSeats = () => {
        const seats = [];
        let skip = 0;

        for (let col = 1; col <= columns; col++) {
            if (col === 5) {
                seats.push(<Seat
                    key={`driver-seat`}
                    seatNumber={`Driver`}
                    isSelected={false}
                    onSelect={() => handleSeatSelect(`Driver`)}
                />);
            } else {
                seats.push(<BlankSeat />);
            }
        }

        for (let row = 1; row <= rows; row++) {
            for (let col = 1; col <= columns; col++) {
                // Skip rendering seats in the blank column
                if (col === 3) {
                    seats.push(<BlankSeat key={`blank-${row}`} />);
                    continue;
                }

                if (col > 3) {
                    skip = 1;
                } else {
                    skip = 0;
                }

                const seatNumber = `${String.fromCharCode(64 + col - skip)}${row}`;
                const isSelected = selectedSeats.includes(seatNumber);

                seats.push(
                    <Seat
                        key={seatNumber}
                        seatNumber={seatNumber}
                        isSelected={isSelected}
                        onSelect={() => handleSeatSelect(seatNumber)}
                    />
                );
            }
        }

        for (let col = 1; col <= columns; col++) {
            seats.push(<BlankSeat />);
        }

        return seats;
    };

    return <div className="bus-seat-layout">{renderSeats()}</div>;
};

export default SeatLayout;
