import React from 'react';
import './periodic.css';
import img1 from  '../../images/1 28.png'
import img2 from  '../../images/1 52.png'
import img3 from  '../../images/1 59.png'
import img4 from  '../../images/1 59.png'
import img5 from  '../../images/1 90.png'
import Keyingredients from './keyingredients';

const benefitsData = [
  {
    id: 1,
    image: img1,
    title: 'Period Care Napkins',
    content: 'Stimulates free moving',
    details: 'Napkins are good absorbable and Easy wearable with Low cost.',
  },
  {
    id: 2,
    image: img2,
    title: 'Period Care Napkins',
    content: 'Stimulates free moving',
    details: 'Napkins are good absorbable and Easy wearable with Low cost.',
  },
  {
    id: 3,
    image: img3,
    title: 'Period Care Napkins',
    content: 'Stimulates free moving',
    details: 'Napkins are good absorbable and Easy wearable with Low cost.',
  },
  {
    id: 4,
    image: img4,
    title: 'Period Care Napkins',
    content: 'Stimulates free moving',
    details: 'Napkins are good absorbable and Easy wearable with Low cost.',
  },
  {
    id: 5,
    image: img5,
    title: 'Period Care Napkins',
    content: 'Stimulates free moving',
    details: 'Napkins are good absorbable and Easy wearable with Low cost.',
  },
  {
    id: 6,
    image: img1,
    title: 'Period Care Napkins',
    content: 'Stimulates free moving',
    details: 'Napkins are good absorbable and Easy wearable with Low cost.',
  },
  // Add more objects for additional benefits
];

export default function Benifits() {
  return (
    <div>
    <div className='mt-5'>
          <div className='container'>
      <h3 className='text-center' id='Benipara1'>
        Benefits of Napkins
      </h3>

      <div className='container mt-3'>
        <div className='row'>
          {benefitsData.map((benefit) => (
            <div className='col-sm-4 mt-5' key={benefit.id}>
              <div className='card'>
                <div className='row mt-2'>

                <div className='col-sm-4'>
                    <div className='container px-0 '>
                    <img src={benefit.image} className='w-50 h-50  rounded-circle ms-3 '></img>
                    </div>
                </div>
                    <div className='col-sm-8'>
                    <h5 className='card-title'>{benefit.title}</h5>
                    <p className='card-text'>{benefit.content}</p>
                        

                    </div>
                    </div>
                    <div className='card-body'>

                        <p className='cardpara'>  {benefit.details}</p>
                    </div>

              
                {/* <img
                  src={benefit.image}
                  className='card-img-top'
                  alt={`Benefit ${benefit.id} Image`}
                />
                <div className='card-body'>
                 
                 
                  <a href='#' className='btn btn-primary'>
                  
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <hr className='mt-5 pt-3' />
    </div>
    <Keyingredients/>
    </div>

  );
}
