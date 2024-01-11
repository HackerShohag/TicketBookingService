import React from 'react';
import { Link } from 'react-router-dom';

// import { useHistory } from 'react-router-dom'; // Import useHistory

import SignUpForm, { SignUpFormData } from '../../components/Authentication/UserAuth/SignUpForm';
import SolidContainer from '../../components/Containers/SolidContainer';

function submitForm(formData: SignUpFormData) {
    // const history = useHistory();

    const data = {
        password: formData.password,
        user: {
            name: formData.name,
            email: formData.email,
            contactNo: formData.contactNumber,
            address: formData.address,
            gender: formData.gender,
            dateOfBirth: formData.dateOfBirth,
            isDeleted: false,
        }
    }

    fetch('http://localhost:5000/api/user/create-buyer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(res => res.json()).then(
        data => {
            console.log(data);
            // history.push('/login');
        }
    ).catch((error) => {
        console.error('Error:', error);
    });
}

const SignUpPage: React.FC = () => {
    document.documentElement.style.setProperty('--form-width', '700px');
    const width = getComputedStyle(document.documentElement).getPropertyValue('--form-width');

    return (
        <SolidContainer width={width}>
            <h1 className="signup__title">Register</h1>
            <SignUpForm onButtonClick={submitForm} />
            <p className="signup__text">
                Already registered? <Link to={'/login'}>Sign In</Link>
            </p>
        </SolidContainer>
    );
};

export default SignUpPage;