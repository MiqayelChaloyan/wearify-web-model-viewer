import { useEffect } from "react";
import { notFound } from "../../constants";

import './style.css';
import useTheme from "../../hooks/useTheme";

const NotFound = ({ handleClose }) => {
    const { setTheme } = useTheme();

    useEffect(() => setTheme('#EDEDED'), []);

    return (
    <div className="container-not-found">
        <img className="not-found" src={notFound} alt='notFound' />
        <h1 className="warning">Resource not found!</h1>
        <p className="description">The resource requested could not found on the server</p>
        <button
            onClick={handleClose}
            className='modal-button'
        >
            OK
        </button>
    </div>
);
    }

export default NotFound;