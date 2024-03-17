import { useEffect } from "react";
import { url } from "../../constants";
import useTheme from "../../hooks/useTheme";

import './style.css';

const Splash = () => {
    const { setTheme } = useTheme();

    useEffect(() => setTheme('#0C0D34'), []);

    return (
    <div className='container-splash'>
        <img src={url} alt='logo' className='img' />
    </div>
)
    }

export default Splash;