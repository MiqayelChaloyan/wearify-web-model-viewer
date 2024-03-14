import React from 'react';

import NotFound from '../../pages/NotFound';

import useTheme from '../../hooks/useTheme';
import useNavigatorOnLine from '../../hooks/useNavigationStatus';

import './style.css';


export const Modal = React.memo(({ open, handleClose, children, currentStepIndex }) => {
    const status = useNavigatorOnLine();
    const { theme } = useTheme();


    return status ? (
        <div className="modal" style={{ right: open ? '10px' : '-500px', background: theme }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {currentStepIndex !== 0 && currentStepIndex < 2 &&
                        <div className="modal-header">
                            <button
                                onClick={handleClose}
                                className='modal-button'
                            >
                                ✖
                            </button>
                        </div>
                    }
                    {children}
                </div>
            </div>
        </div>
    ) : (
        <div className="modal" style={{ right: open ? '10px' : '-500px', background: 'white' }}>
            <div className="modal-content">
                <NotFound handleClose={handleClose} />
            </div>
        </div>
    )
});