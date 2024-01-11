import SolidContainer from '../..//components/Containers/SolidContainer';
import SignInForm, { SignInFormData } from '../../components/Authentication/UserAuth/SignInForm';
import { Link } from 'react-router-dom';

import axios from '../../api/axios'

const LOGIN_URL = '/auth/login'

// const { setAuth } = useAuth() as { setAuth: (auth: any) => void };

// const nagivate = useNavigate();

async function submitForm(formData: SignInFormData) {
    const { setAuth } = useAuth() as { setAuth: (auth: any) => void };

    try {
        const response = await axios.post(LOGIN_URL, {
            email: formData.email,
            password: formData.password
        }, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        console.log(response?.data);

        const accessToken = response?.data?.data?.token;
        const roles = response?.data?.data?.user?.roles;

        const user = formData.email;
        const pwd = formData.password;

        setAuth({ user, pwd, roles, accessToken });

    } catch (error) {
        if (!(error as any)?.response) {
            console.error('No Server Response');
        } else if ((error as any).response?.status === 400) {
            console.error('Missing Username or Password');
        } else if ((error as any).response?.status === 401) {
            console.error('Unauthorized');
        } else {
            console.error('Login Failed');
        }
        // errRef.current.focus();
    }

    // fetch('http://localhost:5000/api/auth/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         email: formData.email,
    //         password: formData.password
    //     })
    // }).then(response => {
    //     if (response.ok) {
    //         response.json().then(jsonResponse => {
    //             if (jsonResponse.success) {
    //                 localStorage.setItem("user_token", jsonResponse.data.token);
    //                 localStorage.setItem("user", jsonResponse.data.user);
    //                 console.log(jsonResponse.data.user);
    //             }
    //         });
    //     }
    // });
}

export interface SignInFormProps {
    onButtonClick: (formData: SignInFormData) => Promise<void>;
}

const LogInPage: React.FC = () => {

    document.documentElement.style.setProperty('--form-width', '400px');
    const width = getComputedStyle(document.documentElement).getPropertyValue('--form-width');

    return (
        <SolidContainer width={width}>
            <h1 className="login__title">Log In</h1>
            <SignInForm onButtonClick={submitForm} />

            <p className="login__text">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </SolidContainer>
    );
};

export default LogInPage;