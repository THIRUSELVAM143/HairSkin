import React, { useState } from 'react';
import './periodic.css'; // Import your CSS file for styling
import Benifits from './Benifits';
import Loveourperiod from './Loveourperiod';

const ReviewCarousel = () => {
    const [activeTab, setActiveTab] = useState('reviews');
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setCurrentIndex(0); // Reset the index when switching tabs
    };

    const reviews = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']; // Add more reviews as needed
    const additionalReviews = [' Add Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']; // Add more reviews as needed
     // Add more additional reviews as needed

    const currentContent = activeTab === 'reviews' ? reviews : additionalReviews;



    return (
        <div className='container-fluid'>
        <div className='container pt-5 mt-2'>
            <div className='container w-50'>
                <div className='row'>
                    <div className='col-sm-6' id='h2'>
                        <p
                            className={activeTab === 'reviews' ? 'active' : ''}
                            onClick={() => handleTabClick('reviews')}
                        >
                            Reviews
                        </p>
                    </div>
                    <div className='col-sm-6' id='h2'>
                        <p
                            className={activeTab === 'additionalReviews' ? 'active' : ''}
                            onClick={() => handleTabClick('additionalReviews')}
                        >
                            Additional Reviews
                        </p>
                    </div>
                </div>
            </div>

            <div className='carousel-container'>
                <div className='carousel-content'>
                    {currentContent.map((review, index) => (
                        <div
                            key={index}
                            className={index === currentIndex ? 'carousel-slide active' : 'carousel-slide'}
                        >
                            <div className='container mt-5'>
                            <p>{review}</p>

                            <p>{review}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            <Benifits/>
          
        </div>
        <Loveourperiod/>
    
        </div>
    );
};

export default ReviewCarousel;
