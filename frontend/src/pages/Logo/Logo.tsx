import { FC } from "react";
import { useNavigate } from "react-router-dom";

import logo from '../../assets/company.jpeg'
import companyLogo from '../../assets/company.jpeg';

import './Logo.css';

const Logo: FC = () => {
    return (
        <div className="ma5 center">
            <div className="ma5 center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img className='' style={{ width: '45px', height: '45px', borderRadius: '50%' }} src={logo} alt='logo' />
                <h5 className="mt3 f4" style={{ lineHeight: '0' }}>Quality Services Assured.</h5>
            </div>
        </div>
    )
}

export const CompanyLogo = () => {
    const navigate = useNavigate();
    return (
        <img
            src={companyLogo}
            alt="Company Logo"
            className="logo-image clickable"
            onClick={() => {
                navigate('/');
            }}
            style={{ margin: '50px', height: '150px', width: 'auto' }}
        />
    );
}

export default Logo;