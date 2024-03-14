import { useEffect, useState } from 'react';

import Models from '../../ui/Models';

import ButtonIcon from '../../icons/Button'

import { modelPath, modelPathTwo, modelPathTree } from '../../constants';

import './style.css';
import useWindowSize from '../../hooks/useWindowSize';


const models = [
    {
        id: 1,
        imgPath: modelPath,
        glbPath: '/model/shoe-draco.glb'
    },
    {
        id: 2,
        imgPath: modelPathTwo,
        glbPath: '/model/model.glb'
    },
    {
        id: 3,
        imgPath: modelPathTree,
        glbPath: '/model/jaket.glb'
    },
    {
        id: 4,
        imgPath: modelPath,
        glbPath: '/model/Seen_low_2K.glb'
    },
    {
        id: 5,
        imgPath: modelPathTwo,
        glbPath: '/model/sneakers__hi_my_name_is__3d_model.glb'
    }
];


const StepOne = () => {
    const [uriGlb, setUriGlb] = useState(models[0].glbPath)
    const [hide, setHide] = useState(false);
    const window = useWindowSize();

    // useEffect(() => {
    //     const element = document.getElementById('default-ar-button');
    //     console.log(element); // Check if the element is logged correctly
    //     // element.style.display = 'none'; // Uncomment this line after confirming element is logged correctly
    // }, []); // Ensure this dependency array is correct for your use case
    

    const handleSubmit = (index) => {
        setUriGlb(models[index].glbPath)
    }

    const handleHide = () => setHide(!hide)

    return (
        <div className='container-view'>
            <div>
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
                >
                </model-viewer>
            </div>


            {
                hide ? (
                    <button className='button-right' onClick={handleHide}>
                        <ButtonIcon width={window.width > 1024 ? 34 : 20} height={window.width > 1024 ? 34 : 20} fill='rgb(212, 215, 215)' />
                    </button>
                ) : (

                    <button className='button-right' onClick={handleHide}>
                        <ButtonIcon width={window.width > 1024 ? 34 : 20} height={window.width > 1024 ? 34 : 20} fill='#2ECDCD' />
                    </button>
                )
            }

            {
                hide && (
                    <div className='models'>
                        <Models models={models} onClick={handleSubmit} />
                    </div>
                )
            }

        </div>
    )
}

export default StepOne;