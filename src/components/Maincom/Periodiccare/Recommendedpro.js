import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdLocalGroceryStore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
// import './home.css'; // Import the external stylesheet
import { addTOCart } from '../../Action/action';
// import { IoIosMailOpen } from "react-icons/io";
import Icon from '../../images/icons8-shopping-basket-30 6.png';
import Icon1 from '../../images/icons8-shopping-basket-30 7.png';


const Recomended = () => {
  const periodcare = useSelector((state) => state.periodcare);
  const dispatch = useDispatch();

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const handleclick = (item) => {
    dispatch(addTOCart(item));
  }

  return (
    <div>
      <div className="container mt-5">
        <div className='text-center'>
          <h3 className='fw-bold'>Recomended Products</h3>

        </div>
        <Carousel responsive={responsive} className="mt-3" autoPlay={false}>
          {periodcare.map((item) => (
            <div key={item.id} className="p-4">
              <div className="card">
                <div className="card-overlay">
                  <div className='d-flex justify-content-around' >

                    <p className='fs-6 text-white fw-bold ' id='btn1'>{item.offer}%</p>

                    <button id='btn2' className='btn rounded-circle'><FaRegHeart /></button>
                  </div>

                  <img src={item.image} alt={item.content} className="w-100 rounded-top" />
                  <button className=' w-100 bg-black text-white' onClick={() => handleclick(item)}><MdLocalGroceryStore className='me-2' />Add Cart</button>

                </div>

              </div>
              <div className='text-center'>
                <p className='mt-2'>{item.title}</p>
                <p className='fw-bold'><MdCurrencyRupee />{item.price}.00</p>
                

              </div>

            </div>
          ))}
        </Carousel>
      
       

      </div>
      <hr className='mt-5'></hr>

      <div className='container text-center w-50 pt-4'>
        <div className='row'>
            <div className='col-sm-6'>
                <div className='row'>
                <div className='col-sm-2'>
                    <img src={Icon}></img>
                </div>
                <div className='col-sm-10 list'>
                    <ul>
                    <li className='fw-bold'>admin@womensdays.com</li>
                    <li> Have query? Mail us.</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className='col-sm-6'>
                <img src={Icon1} style={{float:'left'}}></img>
                <div style={{float:'left'}} className='list'>
                    <ul>
                        <li>+91 79000 85000 </li>
                        <li>24/7 available</li>
                    </ul>
                  

                </div>

            </div>
        </div>
      </div>
       
    </div>
  );
};

export default Recomended;
