import React from 'react'

import { IoIosArrowRoundForward } from "react-icons/io";
import Title from './productcount';
import DoctorSpecialist from './Docter';


export default function Banner() {
    return (
      <div>
        <div>
            <div id='banner' className=''>
                <div className='container' id='bannercon'>
                    <p className='mt-1'>Winter Collection</p>
                  
                    <h3>New Winter<br></br>Collection 2024</h3>
                    <p className='mt-3'><i style={{ color: 'hsla(225, 26%, 27%, 1)' }}>There's nothing like trend </i></p>

                    <button className='px-5  btn border border-black mt-3 '>Shop Now<IoIosArrowRoundForward /></button>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container mt-4' id='smallbg'>
                    <div className='row'>
                        <div className='col-sm-4' >
                            <div id='smallbg1'>
                              <div className='container pt-5 pb-2'>
                                <h3>Period Care</h3>
                                <p >8685 Items</p>
                                <button className='btn border border-black'> Browse Items<IoIosArrowRoundForward/></button>

                              </div>

                            </div>
                        </div>
                        <div className='col-sm-4' >
                            <div id='smallbg2'>
                              <div className='container pt-5 pb-2'>
                                <h3>Skin Care</h3>
                                <p >8685 Items</p>
                                <button className='btn border border-black'> Browse Items<IoIosArrowRoundForward/></button>

                              </div>

                            </div>
                        </div>
                        <div className='col-sm-4' >
                            <div id='smallbg3'>
                              <div className='container pt-5 pb-2'>
                                <h3>Health Care</h3>
                                <p >8685 Items</p>
                                <button className='btn border border-black'> Browse Items<IoIosArrowRoundForward/></button>

                              </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
         
          
        </div>
        <Title/>
        
        </div>

    )
}
