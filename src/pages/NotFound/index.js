import { notFound } from "../../constants";

import './style.css';

const NotFound = ({ handleClose }) => (
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

export default NotFound;