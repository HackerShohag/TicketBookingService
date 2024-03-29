import React, { useState } from 'react';

import './styles.css';
import '../../BookingForm/BookingForm.css'

export interface SignInFormData {
    email: string;
    password: string;
}

interface SignInFormProps {
    onSignIn: (formData: SignInFormData) => void;
}

const BasicSignInForm: React.FC<SignInFormProps> = ({ onSignIn }) => {
    const [formData, setFormData] = useState<SignInFormData>({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSignIn(formData);
    };

    return (
        <>
            <form className="authenticationForm" onSubmit={handleSubmit}>
                <div className="column">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </>
    );
};

function SignInForm({ onButtonClick }: { onButtonClick: (formData: SignInFormData) => void }) {
    return (
        <BasicSignInForm onSignIn={onButtonClick} />
    )
}

export default SignInForm;
