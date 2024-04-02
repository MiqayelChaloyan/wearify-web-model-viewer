import { useEffect } from "react";
import { notFoundUrl } from "../../constants";
import useTheme from "../../hooks/useTheme";

import './style.css';

const NotFound = ({ handleClose }) => {
    const { setTheme } = useTheme();

    // useEffect(() => setTheme('#EDEDED'), []);

    return (
    <div className="container-not-found">
        {/* <img className="not-found" src={notFoundUrl} alt='notFound' /> */}
        <h2 className="warning">Please, check your internet connection!</h2>
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