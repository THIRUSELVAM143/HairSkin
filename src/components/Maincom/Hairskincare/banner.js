import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoGrid } from 'react-icons/io5';
import { BsGrid3X2GapFill } from 'react-icons/bs';
import { FaRegHeart } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import { addTOCart } from '../../Action/action';
import { BsArrowCounterclockwise } from "react-icons/bs";
import { LiaStoreAltSolid } from "react-icons/lia";
import  bucket from '../../images/icons8-shopping-basket-30 1.png';
import  bucket1 from '../../images/icons8-shopping-basket-30 2.png';
import  bucket2 from '../../images/icons8-shopping-basket-30 3.png';
import  bucket3 from '../../images/icons8-shopping-basket-30 4.png';
import './hairskin.css';

const Banner = () => {
  const dispatch=useDispatch();
  const products = useSelector((state) => state.products);
  const [sortType, setSortType] = useState('default');
  const [displayCount, setDisplayCount] = useState(4);

  const handleSortClick = (type) => {
    console.log('Sorting clicked:', type);
    setSortType(type);
  };
  const handleclick = (item) => {
    dispatch(addTOCart(item));
    
  }

  const handleLoadMore = () => {
    setDisplayCount( products.length);// Increase the count by 4 when Load More is clicked
  };

  const getGridClass = () => {
    // Return the appropriate grid class based on the sortType
    if (sortType === 'grid') {
      return 'col-md-3'; // 2x2 grid
    } else if (sortType === 'custom') {
      return 'col-md-4'; // 3x3 grid
    }
    // Add other sorting conditions as needed
    return 'col-md-3'; // Default or other sorting logic
  };

  return (
    <div>
      <div id='banner' className=''>
        <div className='container' id='bannercon'>
          <p className='mt-1'>Winter Collection</p>
          <h3>New Winter<br />Collection 2024</h3>
          <p className='mt-3'><i style={{ color: 'hsla(225, 26%, 27%, 1)' }}>There's nothing like trend </i></p>
          <button className='px-5  btn border border-black mt-3 '>Shop Now<IoIosArrowRoundForward /></button>
        </div>
      </div>

      <div className='container mt-4'>
        <p>
          Default Sorting  <IoGrid onClick={() => handleSortClick('grid')} className='ms-3' />
          <BsGrid3X2GapFill onClick={() => handleSortClick('custom')} className='ms-3' />
        </p>
      </div>

      <div className='container'>
        <div className='row'>
        {products.slice(0, displayCount).map((item) => (
          <div key={item.id} className={getGridClass()}>
            <div className="card">
              <div className="card-overlay">
                <div className='d-flex justify-content-around' >
                  <p className='fs-6 text-white fw-bold ' id='btn1'>{item.offer}%</p>

                  <button id='btn3' className='btn rounded-circle'><FaRegHeart  /></button>
                </div>

                <img src={item.image} alt={item.content} className="w-100 rounded-to h-100" />
                <button className=' w-100 bg-black text-white' onClick={() => handleclick(item)}><MdLocalGroceryStore className='me-2' />Add Cart</button>

              </div>

            </div>
            <div className='text-center'>
              <p className='mt-2'>{item.title}</p>
              <p className='fw-bold'><MdCurrencyRupee />{item.price}.00</p>

            </div>

          </div>
        ))}
        </div>
        {displayCount < products.length && (
        // Show the "Load More" button only if there are more items to display
        <div className='container mt-4 text-center'>
          <button className='py-1 px-2  ' onClick={handleLoadMore}>
          <BsArrowCounterclockwise className='me-2' />
            Load More
          </button>
        </div>
      )}
      </div>
      <div className='mt-5 mb-2'>
        <hr></hr>

      </div>
      <div className='container' id='delivery'>
        <div className='row'>
          <div className='col-sm-3'>
            <div style={{float:'left'}}>
              <img src={bucket} className='me-3'></img>
            </div>
            <div style={{float:'left',fontSize:'12px'}}>
              <span className='fw-bold' >FREE SHIPPING</span>
              <p>Capped at Rs. 10 per order</p>
            </div>
          </div>
          <div className='col-sm-3'>
          <div style={{float:'left'}}>
              <img src={bucket1} className='me-3'></img>
            </div>
            <div style={{float:'left',fontSize:'12px'}}>
              <span className='fw-bold' >SECURE PAYMENTS</span>
              <p>Up to 6 months installments</p>
            </div>
          </div>
          <div className='col-sm-3'>
          <div style={{float:'left'}}>
              <img src={bucket2} className='me-3'></img>
            </div>
            <div style={{float:'left',fontSize:'12px'}}>
              <span className='fw-bold' >15-DAYS RETURNS</span>
              <p>Shop with fully confidence</p>
            </div>
          </div>
          <div className='col-sm-3'>
          <div style={{float:'left'}}>
              <img src={bucket3} className='me-3'></img>
            </div>
            <div style={{float:'left',fontSize:'12px'}}>
              <span className='fw-bold' >24X7 FULLY SUPPORT</span>
              <p>Get friendly support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
