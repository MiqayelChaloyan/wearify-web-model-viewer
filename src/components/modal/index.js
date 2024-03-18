import React from 'react';

import NotFound from '../../pages/NotFound';

import useTheme from '../../hooks/useTheme';
import useNavigatorOnLine from '../../hooks/useNavigationStatus';
import useWindowSize from '../../hooks/useWindowSize';

import CloseIcon from '../../icons/Close'

import './style.css';


export const Modal = React.memo(({ children, currentStepIndex }) => {
    const status = useNavigatorOnLine();
    const window = useWindowSize();
    const { theme } = useTheme();

    const handleClose = () => document.getElementById("modal-viewer").style.display = 'none';


    return status ? (
        <div id='modal-viewer' className="modal" style={{ right: '10px', background: theme, border: currentStepIndex === 0 ? '2px solid rgb(12, 13, 52)' : '2px solid #2ECDCD' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {
                        currentStepIndex !== 0 && currentStepIndex < 2 &&
                        <div className="modal-header">
                            <button type="button" id="close-modal" className='close-modal' onClick={handleClose}>
                                <CloseIcon width={window.width > 1536 ? 20 : 15} height={window.width > 1280 ? 20 : 15} fill='#2ECDCD' />
                            </button>

                        </div>
                    }
                    {children}
                </div>
            </div>
        </div>
    ) : (
        <div id='modal-viewer' className="modal" style={{ right: '10px', background: '#EDEDED', border: '2px solid #2ECDCD' }}>
            <div className="modal-content">
                <NotFound handleClose={handleClose} />
            </div>
        </div>
    )
});