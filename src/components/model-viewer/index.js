import { useEffect, useState } from "react";

import StepOne from "../../pages/StepOne";
import ScanningRoom from "../../pages/ScanningRoom";

import './style.css';

const steps = ['Step One', 'Step Two'];

const ModeViewer = () => {
    const [activeStep, setActiveStep] = useState(0);

    const _renderStepContent = (step, callback) => {
        switch (step) {
            case 0:
                return <StepOne />;
            case 1:
                return <ScanningRoom />;
        }
    };

    const _handleNext = (values, actions) => {
        if (activeStep === steps.length - 1) {
            console.log('END');
        } else {
            setActiveStep(activeStep + 1);
        }
    };

    const _handleBack = (e) => {
        e.preventDefault();

        if (activeStep === 0) {
            console.log('START');
        } else {
            setActiveStep(activeStep - 1);
        }
    };

    return (
        <div>
            <div className='buttons-group-person' style={{ justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end' }}>
                {activeStep !== 0 &&
                    <button type='button' onClick={_handleBack} className='button-back-person'>
                        {'< Back'}
                    </button>
                }
                {activeStep === 0 &&
                    <button onClick={_handleNext} type='submit' className='button-next-person'>
                        Try-On ME
                    </button>
                }
            </div>
            {_renderStepContent(activeStep, _handleNext)}
        </div>
    )
};

export default ModeViewer;