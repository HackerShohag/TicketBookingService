import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import SolidContainer from "../../components/Containers/SolidContainer";
import "./NotFound.css";

export const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
            window.location.reload();
        }, 3000);
    }, []);

    return (
        <SolidContainer>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-center">404</h1>
                <h2 className="text-2xl font-semibold text-center">Page Not Found</h2>
                <p className="text-xl text-center">Redirecting to Home Page...</p>
                <FontAwesomeIcon icon={faSpinner} spin size="3x" />
            </div>
        </SolidContainer>
    )
}
