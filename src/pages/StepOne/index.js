import { useEffect, useRef, useState } from 'react';

import Models from '../../ui/Models';

import ButtonIcon from '../../icons/Button'

import useWindowSize from '../../hooks/useWindowSize';
import useTheme from '../../hooks/useTheme';

import { motion } from "framer-motion";

import './style.css';

// const test = 'https://drive.google.com/thumbnail?id=1BHcn0KMNltk8KvOYXy9poL4PzQAJHJYH'
const models = [
    {
        id: 1,
        imgPath: 'https://drive.google.com/thumbnail?id=1Z1cpmOWbLS0nUJZtK7o8SNKbLpzmhxgV',
        glbPath: 'https://cdn.shopify.com/3d/models/o/3f860c1bdd5c6eb2/black.glb'
    },
    {
        id: 2,
        imgPath: 'https://drive.google.com/thumbnail?id=1A6b7nYJwCEaXFnqVMIS9015DV7IZMwJI',
        glbPath: 'https://cdn.shopify.com/3d/models/o/faf39a667c643fa5/bluegreen.glb'
    },
];



const StepOne = () => {
    const [uriGlb, setUriGlb] = useState(models[0].glbPath)
    const [hide, setHide] = useState(true);
    const window = useWindowSize();
    const { setTheme } = useTheme();

    const [activeIndex, setActiveIndex] = useState(0);

    const ref = useRef(null);



    useEffect(() => setTheme('#EDEDED'), [])

    const handleSubmit = (index) => {
        setUriGlb(models[index].glbPath)
        setActiveIndex(index)
    }

    const handleHide = () => setHide(!hide)


    useEffect(() => {
        const id = document.getElementById("modal-viewer").productId;
        console.log(id);
    }, [])


    return (
        <div className='container-view' ref={ref}>
            <div className='viewer'>
                <model-viewer
                    src={uriGlb}
                    seamless-poster
                    environment-image="neutral"
                    shadow-intensity="1"
                    autoplay
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                    // camera-controls 
                    camera-controls
                    touch-action="pan-y"
                    auto-rotate
                    i
                    nteraction-prompt-threshold="1500"
                    enable-pan
                    min-field-of-view="1deg"
                    width="1800px"
                    disable-zoom
                    loading="eager"
                >
                </model-viewer>
            </div>

            <div className='icon-button'>
                {
                    hide ? (
                        <button className='button-right' onClick={handleHide} whileTap={{ scale: 0.95 }}>
                            <ButtonIcon width={window.width > 1536 ? 30 : 20} height={window.width > 1536 ? 30 : 20} fill='rgb(212, 215, 215)' />
                        </button>
                    ) : (

                        <button className='button-right' onClick={handleHide} whileTap={{ scale: 0.95 }}>
                            <ButtonIcon width={window.width > 1536 ? 30 : 20} height={window.width > 1536 ? 30 : 20} fill='#2ECDCD' />
                        </button>
                    )
                }
            </div>

            {
                hide && (
                    <motion.div className='models'
                        initial={{
                            opacity: 0,
                            x: 0,
                            y: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            y: -20,
                            transition: {
                                duration: 3
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <Models models={models} onClick={handleSubmit} activeIndex={activeIndex} />
                    </motion.div>
                )
            }

        </div>
    )
}

export default StepOne;