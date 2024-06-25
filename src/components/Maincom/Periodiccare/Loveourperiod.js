import React from 'react';
import './periodic.css';
import img1 from '../../images/b-3 5.png'
import Disclimer from './Disclimer';

export default function Loveourperiod() {
    return (
        <div>
        <div className='container-fluid mt-5' id='loveperiod'>
            <div className='container'>
                <h3 className='text-center pt-5' style={{ fontFamily: 'jost' }}>
                    Why you would love our Period Care Napkins
                </h3>
                <div className='container mt-5 pb-5'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <img src={img1} className=' ' id='loveour'></img>

                        </div>
                        <div className='col-sm-8'>
                            <div className='container list mt-5' >
                                <ul>
                                    <li className=''><span className='fw-bold'>01</span> :Infused with black seed oil extract that has potent antioxidant and antimicrobial properties which helps to boost blood circulation in the scalp and improve hair health.</li>
                                    <li className='mt-4'><span className='fw-bold'>02</span>  : It can also be used as a pre-wash haircare product to help improve the quality of hair.</li>
                                    <li className='mt-4'><span className='fw-bold'>03</span> : Our onion oil is made with 100% pure cold pressed oils.</li>
                                    <li className='mt-4'><span className='fw-bold'>04</span> : 100% free of hexane, mineral oil, and silicone for holistic hair care.</li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
           
          

        </div>
          <Disclimer/>
          </div>

    )
}
