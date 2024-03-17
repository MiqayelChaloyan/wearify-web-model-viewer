import React from 'react';

import NotFound from '../../pages/NotFound';

import useTheme from '../../hooks/useTheme';
import useNavigatorOnLine from '../../hooks/useNavigationStatus';

import './style.css';


export const Modal = React.memo(({ children, currentStepIndex }) => {
    const status = useNavigatorOnLine();
    const { theme } = useTheme();

    const handleClose = () => document.getElementById("modal-viewer").style.display = 'none';


    return status ? (
        <div id='modal-viewer' className="modal" style={{ right: '10px', background: theme, border: currentStepIndex === 0 ? '2px solid rgb(12, 13, 52)' : '2px solid #2ECDCD' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {currentStepIndex !== 0 && currentStepIndex < 2 &&
                        <div className="modal-header">
                            <button type="button" id="close-modal" className='close-modal' onClick={handleClose}>✖</button>
                        </div>
                    }
                    {children}
                </div>
            </div>
        </div>
    ) : (
        <div className="modal" style={{ right: '10px', background: 'white' }}>
            <div className="modal-content">
                <NotFound handleClose={handleClose} />
            </div>
        </div>
    )
});