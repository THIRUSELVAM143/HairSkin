import React from 'react'
import img1 from '../../images/i-1 9.png'
import img2 from '../../images/i-1 11.png'
import img3 from '../../images/i-1 12.png'
import img4 from '../../images/i-1 13.png';
import img5 from '../../images/i-1 14.png';
import img6 from '../../images/i-1 15.png';
import img7 from '../../images/i-1 16.png';
import img8 from '../../images/bl-1 6.png';



import { FaInstagram } from "react-icons/fa6";
import './home.css';

export default function Meha() {
    return (
        <div className='mt-5'>
            <div  className='text-center'>
                <h3 id='meha'>@mahak_17</h3>
                <h3>From Instagram</h3>
            </div>
            <div className='container mt-5'>
            <div className='row' >
              <div className='col-sm-3 p-0' id='imgs'>
               
                <img src={img1}></img>

              </div>
              <div className='col-sm-3 p-0' id='imgs'>
              <img src={img2}></img>
              </div>
              <div className='col-sm-3 p-0' id='imgs' >
              <img src={img3}></img>

              </div>
              <div className='col-sm-3 p-0' id='imgs' >
              <img src={img4}></img>
              </div>
              <div className='col-sm-3 p-0' id='imgs' >
              <img src={img5}></img>
              </div>
              <div className='col-sm-3 p-0' id='imgs' >
              <img src={img6}></img>
              </div>
              <div className='col-sm-3 p-0' id='imgs' >
              <img src={img7}></img>
              </div>
              <div className='col-sm-3 p-0' id='imgs' >
              <img src={img8}></img>
              </div>


                
                 
                </div>             


            </div>

        </div>
    )
}
