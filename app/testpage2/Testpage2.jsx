'use client'; // if using Next.js app directory structure

import { useState } from 'react';
// import Popup from './Popup'; 
import Popupeg from '../popupeg/Popupeg';

const Testpage2 = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const openPopup = () => {
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div>
            {/* The rest of your page content */}
            <div className={`${isPopupVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-300`}>
                <h1>This is the main page content</h1>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={openPopup}
                >
                    Open Popup
                </button>
            </div>

            {/* Popup Component */}
            {isPopupVisible && <Popupeg onClose={closePopup} />}
        </div>
    );
};

export default Testpage2;
