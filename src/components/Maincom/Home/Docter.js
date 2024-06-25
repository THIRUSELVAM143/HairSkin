import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../images/i-1 14.png';
import img2 from '../../images/i-1 9.png';
import './home.css';
import YouTubePlayer from 'react-player/youtube';
import YouTubeReviews from './youtube';

export default function DoctorSpecialist() {

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };
    // Placeholder data for doctors
    const doctors = [
        { id: 1,image:img1, name: 'Dr. John Doe', specialty: 'CEO of Womens Dayz', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
        { id: 2,image:img2, name: 'Dr. Jane Smith', specialty: 'CEO of Womens Dayz',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
        // Add more doctor data as needed
    ];

    return (
        <div>
        <div className='container-fluid mt-5' id='doc'>
            <div className='container w-75'>


            <h2 className='text-center pt-4'>Doctor Specialists</h2>
            <Carousel responsive={responsive}>
                {doctors.map((doctor) => (
                    // <div className='text-center'>
                    <div key={doctor.id} className='container mt-5 text-center'>
                       <img src={doctor.image} className='w-25 rounded-circle my-2' id='docimg'></img>
                       <p>{doctor.content}</p>
                       <p className='fw-bold'>{doctor.name}</p>
                        <p>{doctor.specialty}</p>
                        {/* Add more information or components as needed */}
                    {/* </div> */}
                    </div>
                ))}
            </Carousel>
           
            </div>
            </div>
            <YouTubeReviews/>
           
          
        </div>
    );
}
