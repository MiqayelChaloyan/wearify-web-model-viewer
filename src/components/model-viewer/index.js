import { useState } from "react";

import StepOne from "../../pages/StepOne";
import { hrefGitHub } from "../../constants";
import CloseIcon from '../../icons/Close'

import './style.css';
import useWindowSize from "../../hooks/useWindowSize";

const steps = ['Model viewer'];

const ModeViewer = () => {
    const [activeStep, setActiveStep] = useState(0);
    const window = useWindowSize();

    const handleClose = () => document.getElementById("modal-viewer").style.display = 'none';


    const _renderStepContent = (step) => {
        switch (step) {
            case 0:
                return <StepOne />;
        }
    };

    return (
        <div>
            <div className='buttons-group-person'>
                <button type="button" id="close-modal" className='close-modal' onClick={handleClose}>
                    <CloseIcon width={window.width > 1536 ? 20 : 15} height={window.width > 1280 ? 20 : 15} fill='#2ECDCD' />
                </button>
                <a target='_blank' className='button-try-on' href={hrefGitHub}>Try-On ME</a>
            </div>
            {_renderStepContent(activeStep)}
        </div>
    )
};

export default ModeViewer;