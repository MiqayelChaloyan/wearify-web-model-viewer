import React, { useEffect } from "react";

import { useMultistepForm } from "../hooks/useMultistepForm";

import { Modal } from "../components/modal"

import Splash from "../pages/Splash";

import ModeViewer from "../components/model-viewer";
import useTheme from "../hooks/useTheme";

const Navigation = () => {
    const { setTheme } = useTheme();


    // // TODO
    const modalViewer = document.getElementById('modal-viewer');
    const productId = modalViewer?.productId;

    if (productId) {
        console.log(`Product ID is: ${productId}`);
    } else {
        console.log('No product ID found');
    }
    // ///////

    const { currentStepIndex, step, next } =
        useMultistepForm([
            <Splash />,
            <ModeViewer productId={productId}/>
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