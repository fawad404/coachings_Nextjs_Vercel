import React, { useState } from 'react';
import Popupgoogle from '../popupGoogle/Popupgoogle';
import Popupphone from '@/app/popupPhone/Popupphone';

const LoginPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPhonePopupOpen, setIsPhonePopupOpen] = useState(false);

    const handleGoogleLogin = () => {
        console.log('Google login clicked'); 
        setIsPopupOpen(false);
        setIsPhonePopupOpen(true);
    };

    const handleGitHubLogin = () => {
        console.log('GitHub login clicked'); 
        setIsPopupOpen(false);
        setIsPhonePopupOpen(true);
    };

    const handleLinkedInLogin = () => {
        console.log('LinkedIn login clicked'); 
        setIsPopupOpen(false);
        setIsPhonePopupOpen(true);
    };

    return (
        <div>
            <button onClick={() => setIsPopupOpen(true)}>Open Login</button> 
            <Popupgoogle 
                isOpen={isPopupOpen} 
                onClose={() => setIsPopupOpen(false)} 
                onGoogleLogin={handleGoogleLogin}
                onGitHubLogin={handleGitHubLogin}
                onLinkedInLogin={handleLinkedInLogin}
            />
            <Popupphone 
                isOpen={isPhonePopupOpen} 
                onClose={() => setIsPhonePopupOpen(false)} 
            />
        </div>
    );
};

export default LoginPage;
