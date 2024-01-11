import React, { useState, useEffect } from 'react';
import './BookingForm.css';
import busImg from '../../assets/bus.png';
import BorderContainer from '../Containers/BorderContainer';

interface City {
    id: string;
    source: string;
    destinations: string[];
}

interface FormData {
    origin: string;
    destination: string;
    date: string;
    numberOfTickets: number;
}

interface BasicFormProps {
    onButtonClick: (() => void) | undefined;
}

const BasicForm: React.FC<BasicFormProps> = ({ onButtonClick }) => {
    const [formData, setFormData] = useState<FormData>({
        origin: '',
        destination: '',
        date: '',
        numberOfTickets: 1,
    });

    const [cities, setCities] = useState<City[]>([]);
    const [filteredDestinations, setFilteredDestinations] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));

        if (name === 'origin') {
            const selectedCity = cities.find((city) => city.source === value);
            setFilteredDestinations(selectedCity ? selectedCity.destinations : []);
        }
    };

    // const handleNumberOfTicketsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const numberOfTickets = parseInt(e.target.value, 10);
    //     setFormData((prevData) => ({ ...prevData, numberOfTickets }));
    // };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        if (onButtonClick) {
            onButtonClick();
        }
    };

    // Calculate minimum and maximum dates for the date picker
    const today = new Date();
    const minDate = today.toISOString().split('T')[0]; // Minimum date is today
    const maxDate = new Date(today.setDate(today.getDate() + 7))
        .toISOString()
        .split('T')[0]; // Maximum date is today + 7 days

    useEffect(() => {
        fetch('src/assets/cities.json')
            .then((response) => response.json())
            .then((data) => {
                setCities(data);
                setFilteredDestinations(data[0]?.destinations || []);
            })
            .catch((error) => console.error('Error fetching cities:', error));
    }, []);

    return (
        <div className='booking-form-container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="origin">Origin:</label>
                    <select
                        id="origin"
                        name="origin"
                        value={formData.origin}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Origin</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.source}>
                                {city.source}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="destination">Destination:</label>
                    <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Destination</option>
                        {filteredDestinations.map((destination) => (
                            <option key={destination} value={destination}>
                                {destination}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group date-picker">
                    <label htmlFor="date">Date:</label>
                    <input
                        className='date-picker'
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={minDate}
                        max={maxDate}
                        required
                    />
                </div>
                <button type="submit">Check Route</button>
            </form>
        </div>
    );
};


function BookingForm({ onButtonClick }: BasicFormProps) {
    return (
        <BorderContainer>
            <h2>Bus Ticket Booking</h2>
            <div className='row-container'>
                <BasicForm onButtonClick={onButtonClick} />
                <img src={busImg} alt="Image" />
            </div>
        </BorderContainer>
    )
}

export default BookingForm;