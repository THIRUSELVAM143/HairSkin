import React from 'react';
import './home.css';
import img1 from '../../images/bl-1 4.png';
import img2 from '../../images/bl-1 5.png';
import img3 from '../../images/bl-1 6.png';
import Meha from './meha';
const blogData = [
  {
    image:img1,
    date: '26 Jan 2021',
    title: "Let's start bring sale on this summer vacation.",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
  },
  {
    image:img2,
    date: '26 Jan 2021',
    title: "Let's start bring sale on this summer vacation.",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
  },
  {
    image:img3,
    date: '26 Jan 2021',
    title: "Let's start bring sale on this summer vacation.",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
  },
  // Add more blog entries as needed
];

export default function OurBlog() {
  return (
    <div className='mt-5 mb-3'>
      <h2 className='text-center pt-4 mb-5'>Our Blog</h2>
    
      
      <div className='row'>
        {blogData.map((entry, index) => (
          <div className='col-sm-4' key={index}>
            <div className='card'>
                <img src={entry.image}></img>

              <div className='card-body'>
              <p >{entry.date}</p>
                <h5 id='size' className='card-title fs-6'>{entry.title}</h5>
              
                <p className='card-text'>{entry.content .substring(0, 75)} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Meha/>
    </div>
  );
}
