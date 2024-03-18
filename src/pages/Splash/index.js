import { useEffect } from "react";
import { logoUrl } from "../../constants";
import useTheme from "../../hooks/useTheme";

import './style.css';

const Splash = () => {
    const { setTheme } = useTheme();

    useEffect(() => setTheme('#0C0D34'), []);

    return (
    <div className='container-splash'>
        <img src={logoUrl} alt='logo' className='img' />
    </div>
)
    }

export default Splash;


