import { useEffect } from "react";
import { notFoundUrl } from "../../constants";
import useTheme from "../../hooks/useTheme";

import './style.css';

const NotFound = ({ handleClose }) => {
    const { setTheme } = useTheme();

    // useEffect(() => setTheme('#EDEDED'), []);

    return (
    <div className="container-not-found">
        <img className="not-found" src={notFoundUrl} alt='notFound' />
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