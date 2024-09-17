'use client'
import React, { useEffect, useRef } from 'react';

const LearnerComponent = () => {
    const carouselRefs = useRef([]);
    const leftButtonRefs = useRef([]);
    const rightButtonRefs = useRef([]);

    useEffect(() => {
        // Function to update button visibility based on scroll position
        function updateButtonVisibility(carousel, leftButton, rightButton) {
            const scrollLeft = carousel.scrollLeft;
            const scrollWidth = carousel.scrollWidth;
            const clientWidth = carousel.clientWidth;

            if (scrollLeft <= 0) {
                leftButton.style.opacity = '0';
                leftButton.style.pointerEvents = 'none';
            } else {
                leftButton.style.opacity = '1';
                leftButton.style.pointerEvents = 'auto';
            }

            if (scrollLeft + clientWidth >= scrollWidth) {
                rightButton.style.opacity = '0';
                rightButton.style.pointerEvents = 'none';
            } else {
                rightButton.style.opacity = '1';
                rightButton.style.pointerEvents = 'auto';
            }
        }

        carouselRefs.current.forEach((carousel, index) => {
            const leftButton = leftButtonRefs.current[index];
            const rightButton = rightButtonRefs.current[index];

            if (leftButton && rightButton) {
                // Initial visibility of buttons
                updateButtonVisibility(carousel, leftButton, rightButton);

                // Add click event listeners for scrolling
                leftButton.addEventListener('click', () => {
                    carousel.scrollBy({ left: -220, behavior: 'smooth' });
                    setTimeout(() => updateButtonVisibility(carousel, leftButton, rightButton), 500);
                });

                rightButton.addEventListener('click', () => {
                    carousel.scrollBy({ left: 220, behavior: 'smooth' });
                    setTimeout(() => updateButtonVisibility(carousel, leftButton, rightButton), 500);
                });

                // Update visibility when scrolling
                carousel.addEventListener('scroll', () => {
                    updateButtonVisibility(carousel, leftButton, rightButton);
                });
            }
        });
    }, []);

    return (
        <div className="bg-gray-100 py-10 w-full mt-5">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="w-1/2">
                    <h2 className="text-lg lg:text-4xl md:text-2xl font-semibold text-gray-700">
                        Over <span className="text-blue-500">40 million learners</span> have used Alison to empower themselves
                    </h2>
                </div>

                {/* Carousel Section */}
                <div className="w-full lg:w-1/2 md:w-1/2 flex items-center overflow-hidden">
                    {/* Left Arrow */}
                    <button
                        ref={(el) => (leftButtonRefs.current[0] = el)}
                        className="bg-white rounded-full p-4 shadow-md hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Cards */}
                    <div
                        ref={(el) => (carouselRefs.current[0] = el)}
                        className="flex w-full overflow-x-auto space-x-4 mx-4 scrollbar-hide"
                    >
                        {/* Card 1 */}
                        <div className="min-w-52 bg-white rounded-lg shadow-lg p-4 sm:p-6 max-sm:min-w-64 max-w-xs mx-auto">
                            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-promounit-images.s3.amazonaws.com/41/11588a1c164d0b84ba70f0853a768f/BC-2992-GwG-AI-Campaign_PromoUnit_344x480-2.png?auto=format%2Ccompress&dpr=1&w=172" alt="Testimonial Image" className="w-full h-32 object-cover rounded-t-lg" />
                            <p className="text-blue-600 font-semibold mt-2">I got my dream job with Alison.</p>
                            <p className="text-gray-500 text-sm">- Ikechukwu Odiaka</p>
                            <p className="text-gray-400 text-xs mt-1">Assistant Nurse</p>
                        </div>

                        {/* Card 2 */}
                        <div className="min-w-52 bg-white rounded-lg shadow-lg p-4">
                            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-promounit-images.s3.amazonaws.com/41/11588a1c164d0b84ba70f0853a768f/BC-2992-GwG-AI-Campaign_PromoUnit_344x480-2.png?auto=format%2Ccompress&dpr=1&w=172" alt="Testimonial Image" className="w-full h-32 object-cover rounded-t-lg" />
                            <p className="text-blue-600 font-semibold mt-2">Alison has improved me.</p>
                            <p className="text-gray-500 text-sm">- Esther Anurika</p>
                            <p className="text-gray-400 text-xs mt-1">Alison Graduate</p>
                        </div>

                        {/* Card 3 */}
                        <div className="min-w-52 bg-white rounded-lg shadow-lg p-4">
                            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-promounit-images.s3.amazonaws.com/41/11588a1c164d0b84ba70f0853a768f/BC-2992-GwG-AI-Campaign_PromoUnit_344x480-2.png?auto=format%2Ccompress&dpr=1&w=172" alt="Testimonial Image" className="w-full h-32 object-cover rounded-t-lg" />
                            <p className="text-blue-600 font-semibold mt-2">Alison has improved me.</p>
                            <p className="text-gray-500 text-sm">- Esther Anurika</p>
                            <p className="text-gray-400 text-xs mt-1">Alison Graduate</p>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        ref={(el) => (rightButtonRefs.current[0] = el)}
                        className="bg-white rounded-full p-4 shadow-md hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LearnerComponent;
