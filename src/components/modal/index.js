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
        <div id='modal-viewer' className="modal" style={{ right: '10px', background: theme }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    ) : (
        <div id='modal-viewer' className="modal" style={{ right: '10px', background: '#EDEDED' }}>
            <div className="modal-content">
                <NotFound handleClose={handleClose} />
            </div>
        </div>
    )
});