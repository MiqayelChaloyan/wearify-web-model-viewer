import { useEffect, useState } from 'react';

import Models from '../../ui/Models';

import ButtonIcon from '../../icons/Button'

import useWindowSize from '../../hooks/useWindowSize';
import useTheme from '../../hooks/useTheme';

import { modelPath, modelPathTwo, modelPathTree } from '../../constants';

import './style.css';


const models = [
    {
        id: 1,
        imgPath: 'https://drive.google.com/thumbnail?id=1hfGs4TRWrjhzX8cb3-WDtHYv9qwjD_GA',
        glbPath: 'https://cdn.shopify.com/3d/models/o/db55743e2752e826/model.glb' // '/model/Seen_low_2K.glb'
    },
    {
        id: 2,
        imgPath: 'https://drive.google.com/thumbnail?id=1hfGs4TRWrjhzX8cb3-WDtHYv9qwjD_GA',
        glbPath: 'https://cdn.shopify.com/3d/models/o/db55743e2752e826/model.glb' // '/model/sneakers__hi_my_name_is__3d_model.glb'
    },
    {
        id: 3,
        imgPath: 'https://drive.google.com/thumbnail?id=1hfGs4TRWrjhzX8cb3-WDtHYv9qwjD_GA',
        glbPath: 'https://cdn.shopify.com/3d/models/o/db55743e2752e826/model.glb' // '/model/sneakers__hi_my_name_is__3d_model.glb'
    },
    {
        id: 4,
        imgPath: 'https://drive.google.com/thumbnail?id=1hfGs4TRWrjhzX8cb3-WDtHYv9qwjD_GA',
        glbPath: 'https://cdn.shopify.com/3d/models/o/db55743e2752e826/model.glb' // '/model/sneakers__hi_my_name_is__3d_model.glb'
    }
];


const StepOne = () => {
    const [uriGlb, setUriGlb] = useState(models[0].glbPath)
    const [hide, setHide] = useState(true);
    const window = useWindowSize();
    const { setTheme } = useTheme();

    useEffect(() =>  setTheme('#EDEDED'), [])

    const handleSubmit = (index) => {
        setUriGlb(models[index].glbPath)
    }

    const handleHide = () => setHide(!hide)


    useEffect(() => {
       const id = document.getElementById("modal-viewer").productId;
       console.log(id);
    }, [])


    return (
        <div className='container-view'>
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
                    <button className='button-right' onClick={handleHide}>
                        <ButtonIcon width={window.width > 1536 ? 30 : 20} height={window.width > 1536 ? 30 : 20} fill='rgb(212, 215, 215)' />
                    </button>
                ) : (

                    <button className='button-right' onClick={handleHide}>
                        <ButtonIcon width={window.width > 1536 ? 30 : 20} height={window.width > 1536 ? 30 : 20} fill='#2ECDCD' />
                    </button>
                )
            }
            </div>

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