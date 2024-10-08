'use client';
import React, { useState } from 'react';
import Popupgoogle from '../popupGoogle/Popupgoogle'; // Assuming this is the Popup component

const Test = ({ name, email, year, question, hour, imgSrc }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };



    return (
        <>
            <div className={`${isPopupOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} w-full sm:w-1/2 xl:w-1/4 p-3 transition-opacity duration-300`}>
                <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md">
                    <div className="flex flex-col justify-center items-center px-4 pt-8 pb-6 border-b border-coolGray-100">
                        <img className="mb-4 h-20" src={imgSrc} alt={`${name}'s avatar`} />
                        <h2 className="text-slate mb-2 font-medium text-coolGray-900">{name}</h2>
                        <h3 className="mb-3 text-xs font-medium text-coolGray-400">{email}</h3>
                        <div className='flex flex-row justify-between items-center'>
                            <button 
                                className="mr-6 flex items-center px-4 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md" 
                                onClick={openPopup}
                            >
                                <svg
                                    className="mr-2"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.8333 3.33334H4.16666C3.50362 3.33334 2.86773 3.59673 2.39889 4.06557C1.93005 4.53441 1.66666 5.17029 1.66666 5.83334V14.1667C1.66666 14.8297 1.93005 15.4656 2.39889 15.9344C2.86773 16.4033 3.50362 16.6667 4.16666 16.6667H15.8333C16.4964 16.6667 17.1323 16.4033 17.6011 15.9344C18.0699 15.4656 18.3333 14.8297 18.3333 14.1667V5.83334C18.3333 5.17029 18.0699 4.53441 17.6011 4.06557C17.1323 3.59673 16.4964 3.33334 15.8333 3.33334V3.33334ZM4.16666 5H15.8333C16.0543 5 16.2663 5.0878 16.4226 5.24408C16.5789 5.40036 16.6667 5.61232 16.6667 5.83334L9.99999 9.9L3.33332 5.83334C3.33332 5.61232 3.42112 5.40036 3.5774 5.24408C3.73368 5.0878 3.94564 5 4.16666 5V5ZM16.6667 14.1667C16.6667 14.3877 16.5789 14.5996 16.4226 14.7559C16.2663 14.9122 16.0543 15 15.8333 15H4.16666C3.94564 15 3.73368 14.9122 3.5774 14.7559C3.42112 14.5996 3.33332 14.3877 3.33332 14.1667V7.73334L9.56666 11.5417C9.69334 11.6148 9.83704 11.6533 9.98332 11.6533C10.1296 11.6533 10.2733 11.6148 10.4 11.5417L16.6667 7.73334V14.1667Z"
                                        fill="#F0FDF4"
                                    />
                                </svg>
                                <p>Start Test</p>
                            </button>
                            <button className="flex items-center px-4 py-2 font-medium text-sm text-green-600 border border-green-600 bg-white hover:bg-[#b7bfba] rounded-md">
                                <svg 
                                    className='mr-2'
                                    width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z" fill="#22c55e"></path> 
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z" fill="#22c55e"></path> 
                                    </g>
                                </svg>
                                <p>Download PDF</p>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row pt-4 pb-6 -m-2">
                        <div className="w-full md:w-1/3 p-2">
                            <div className="text-center">
                                <p className="mb-1 text-xs text-coolGray-900 font-semibold">{year}</p>
                                <p className="text-xs text-coolGray-400 font-medium">Year</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-2">
                            <div className="text-center">
                                <p className="mb-1 text-xs text-coolGray-900 font-semibold">{question}</p>
                                <p className="text-xs text-coolGray-400 font-medium">Questions</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-2">
                            <div className="text-center">
                                <p className="mb-1 text-xs text-coolGray-900 font-semibold">{hour}</p>
                                <p className="text-xs text-coolGray-400 font-medium">Hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup Section */}
            {isPopupOpen && (
                <Popupgoogle isOpen={isPopupOpen} onClose={closePopup} />
            )}
        </>
    );
};

export default Test;
