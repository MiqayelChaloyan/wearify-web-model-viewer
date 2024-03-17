import FlatList from '../FlatList';

// Swiper
import { SwiperSlide } from 'swiper/react';

import './style.css';


const Models = ({ models, onClick }) => {
    const items = models.map((model, index) => (
        <SwiperSlide key={model.id}>
            <div className='column' onClick={() => onClick(index)}>
                <img src={model.imgPath} alt='image' className='model-image' />
            </div>
        </SwiperSlide>
    ))

    return <FlatList list={items} />
};

export default Models;
