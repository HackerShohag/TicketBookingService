import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css';

interface PhoneNumberInputProps {
    onPhoneNumberChange: (phoneNumber: string | undefined) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ onPhoneNumberChange }) => {
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>();

    const handlePhoneNumberChange = (value: string | undefined) => {
        setPhoneNumber(value);
        onPhoneNumberChange(value);
    };

    return (
        <PhoneInput
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            country="BD"
        />
    );
};

export default PhoneNumberInput;
