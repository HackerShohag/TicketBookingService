import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import companyLogo from '../../assets/company.jpeg';

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img
                    src={companyLogo}
                    alt="Company Logo"
                    className="logo-image clickable"
                    onClick={() => {
                        navigate('/');
                    }}
                    style={{ height: '50px', width: 'auto' }}
                />
                <Link to="/bus">Bus</Link>
                <Link to="/hotel">Hotel</Link>
                <Link to="/train">Train</Link>
            </div>
            <div className="navbar-right">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </nav>
    );
};

export default NavBar;
