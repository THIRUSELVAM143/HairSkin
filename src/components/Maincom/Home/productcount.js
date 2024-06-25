import React, { useState, useEffect } from 'react';
import './home.css';
import CartComponent from './productlist';
import Caurosal from './productlist';
import DoctorSpecialist from './Docter';

const Title = () => {
  // Set the Pongal offer end date and time
  const pongalOfferEndDate = new Date('2026-01-15T23:59:59');

  // Initialize state for the countdown values
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Update the countdown values every second
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = pongalOfferEndDate - now;

      if (timeDifference > 0) {
        const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
        setSeconds(secondsRemaining);
      } else {
        // Pongal offer has ended, set countdown values to zero
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);

        // Clear the interval
        clearInterval(interval);
        // alert('The Pongal offer has ended. Better luck next time!');

      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [pongalOfferEndDate]);

  return (
 
    <div >
      <h3 className='pongal text-center mt-5'>Pongal Offer </h3>
      <div className="w-50 text-center container mt-5">
       
        <div className="row">
          <div className="col-sm-3">
            <div id='numbg'>
                <h3 className='  ' id='num'>-{days}</h3>
                <p><span className='fs-6'>days</span></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div id='numbg'>
                <h3 className='  ' id='num'>-{hours}</h3>
                <p><span className='fs-6'>hours</span></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div id='numbg'>
                <h3 className='  ' id='num'>-{minutes}</h3>
                <p><span className='fs-6'>minutes</span></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div id='numbg'>
                <h3 className='  ' id='num'>-{seconds}</h3>
                <p><span className='fs-6'>seconds</span></p>
            </div>
          </div>
        </div>
      </div>
      <Caurosal/>
     
    </div>
 
   
  );
};

export default Title;
