import React from 'react';
import './periodic.css';
import img1 from  '../../images/1 28.png'
import img2 from  '../../images/1 52.png'
import img3 from  '../../images/1 51.png'
import img4 from  '../../images/1 90.png'


const benefitsData = [
  {
    id: 1,
    image: img1,
    title: 'Period Care Napkins',
   
    details: ' It Contains vitamins e and  essential fatty acids; helps to nourish the scalp, improve hair condition, and soothe dry, irritated scalp.',
  },
  {
    id: 2,
    image: img2,
    title: 'Period Care Napkins',
   
    details: ' It Contains vitamins e and  essential fatty acids; helps to nourish the scalp, improve hair condition, and soothe dry, irritated scalp.',
  },
  {
    id: 3,
    image: img3,
    title: 'Period Care Napkins',
    
    details: ' It Contains vitamins e and  essential fatty acids; helps to nourish the scalp, improve hair condition, and soothe dry, irritated scalp.',
  },
  {
    id: 4,
    image: img4,
    title: 'Period Care Napkins',
   
    details: ' It Contains vitamins e and  essential fatty acids; helps to nourish the scalp, improve hair condition, and soothe dry, irritated scalp.',
  },

  // Add more objects for additional benefits
];

export default function Keyingredients() {
  return (
    <div>
    <div className='mt-5'>
          <div className='container'>
      <h3 className='text-center' id='Benipara1'>
        Key Ingredients
      </h3>

      <div className='container mt-3'>
        <div className='row'>
          {benefitsData.map((benefit) => (
            <div className='col-sm-6 mt-5' key={benefit.id}>
              <div className='container'>
                <div className='row'>
                    <div className='col-sm-6'>
                    <div className='container px-0 '>
                    <img src={benefit.image} className='w-100 h-100 '></img>
                    </div>

                    </div>
                    <div className='col-sm-6'>
                         
                    <h5 className='card-title pt-3'>{benefit.title}</h5>
                   
                    <div className=''>

                        <p className='cardpara mt-5'>  {benefit.details}</p>
                    </div>

                    </div>
                </div>
                

               

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   
    </div>
    </div>

  );
}
