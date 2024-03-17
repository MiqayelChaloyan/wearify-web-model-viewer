import { useEffect } from "react";
import { url } from "../../constants";
import useTheme from "../../hooks/useTheme";

import './style.css';

const Splash = () => {
    const { setTheme } = useTheme();

    useEffect(() => setTheme('#0C0D34'), []);

    return (
    <div className='container-splash'>
        <img src='https://drive.google.com/thumbnail?id=1vT4xy5UQYQ4s4AwPdnliDVkk6LKJvDw2' alt='logo' className='img' />
    </div>
)
    }

export default Splash;


