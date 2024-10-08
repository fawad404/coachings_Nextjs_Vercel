import React from 'react';

const Popupeg = ({ onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
            <div className="bg-white rounded-lg p-6 max-w-lg shadow-lg relative">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                >
                    &times;
                </button>

                <h2 className="text-xl font-semibold mb-4">Popup Title</h2>
                <p>This is the popup content. The background page is disabled while this is visible.</p>
                
                {/* Popup Action Buttons */}
                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={onClose}
                >
                    Close Popup
                </button>
            </div>
        </div>
    );
};

export default Popupeg;
