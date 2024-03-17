import React, { useEffect } from "react";

import { useMultistepForm } from "../hooks/useMultistepForm";

import { Modal } from "../components/modal"

import Splash from "../pages/Splash";

import ModeViewer from "../components/model-viewer";
import useTheme from "../hooks/useTheme";

const Navigation = () => {
    const { setTheme } = useTheme();

    const { currentStepIndex, step, next } =
        useMultistepForm([
            <Splash />,
            <ModeViewer/>
        ]);

    useEffect(() => {
        let isMounted = true;

        const intervalId = setTimeout(() => {
            if (isMounted) {
                setTheme('white')
                next();
            }
        }, 5000);

        return () => {
            isMounted = false;
            clearTimeout(intervalId);
        };
    }, []);


    return (
        <Modal currentStepIndex={currentStepIndex}>
            {step}
        </Modal>
    )
};

export default React.memo(Navigation);