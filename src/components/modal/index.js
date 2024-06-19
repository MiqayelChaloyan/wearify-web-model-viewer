import React from 'react';

import NotFound from '../../pages/NotFound';

import useTheme from '../../hooks/useTheme';
import useNavigatorOnLine from '../../hooks/useNavigationStatus';

import './style.css';

// const twinz = '9392277192988'
// const pregomesh = '9167250129180'
// const ANANYANSneakers = '9392027009308'

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