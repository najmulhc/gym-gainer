import React from 'react';
import notfound from '../../../img/notfound.png'
const NotFound = () => {
    return (
        <div className='container mx-auto'>
            <img src={notfound} className='w-full' alt="" />
        </div>
    );
};

export default NotFound;