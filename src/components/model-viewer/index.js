import { useState } from "react";

import StepOne from "../../pages/StepOne";
import { hrefGitHub } from "../../constants";

import './style.css';

const steps = ['Model viewer'];

const ModeViewer = () => {
    const [activeStep, setActiveStep] = useState(0);

    const _renderStepContent = (step) => {
        switch (step) {
            case 0:
                return <StepOne />;
        }
    };

    return (
        <div>
            <div className='buttons-group-person'>
                <a target='_blank' className='button-try-on' href={hrefGitHub}>Try-On ME</a>
            </div>
            {_renderStepContent(activeStep)}
        </div>
    )
};

export default ModeViewer;