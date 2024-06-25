import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import { BsArrowRight } from "react-icons/bs";
import 'react-multi-carousel/lib/styles.css';

import ReactPlayer from 'react-player';
import Ourblog from './ourblog';

export default function YouTubeReviews() {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    const [hoveredVideo, setHoveredVideo] = useState(null);

    // Example data for YouTube reviews
    const reviews = [
        {
            id: 1,
            videoUrl: 'https://www.youtube.com/shorts/wtLN97OHny4',
        },
        {
            id: 2,
            videoUrl: 'https://www.youtube.com/shorts/rPpv2Che3bM',
        },
        {
            id: 3,
            videoUrl: 'https://www.youtube.com/shorts/8GCzD869xbA',
        },
        {
            id: 4,
            videoUrl: 'https://www.youtube.com/shorts/dynCekYsxrc',
        },
        {
            id: 5,
            videoUrl: 'https://www.youtube.com/shorts/8GCzD869xbA',
        },
    ];

    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">YouTube Reviews</h3>
            <Carousel responsive={responsive}>
                {reviews.map((review) => (
                    <div key={review.id}
                        onMouseEnter={() => setHoveredVideo(review.id)}
                        onMouseLeave={() => setHoveredVideo(null)}
                    >
                        <div className={`card m-3 ${hoveredVideo === review.id ? 'hovered' : ''}`}>
                            <ReactPlayer
                                url={review.videoUrl}
                                controls={hoveredVideo === review.id}
                                width="100%"
                                height="200px"
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
            <div className='text-center mt-3'>
                <button className='px-3 py-2 btn border border-dark'>Explore More<BsArrowRight className='ms-2' /></button>
            </div>
            <Ourblog/>
        </div>
    );
}
