import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdLocalGroceryStore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import './home.css'; // Import the external stylesheet
import { addTOCart, addToLiked, removeToLiked } from '../../Action/action';
import BestSeller from './BestSeller';
import liked from '../../images/heart.jpg';

const Caurosal = () => {
  const products = useSelector((state) => state.additionalProducts);
  // console.log(products);
  const likedItems = useSelector((state) => state.likedItems);

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

  const handleLikeclick = (item) => {
    if (likedItems.some((likedItem) => likedItem.id === item.id)) {

      dispatch(removeToLiked(item.id));
      alert('remove');
    } else {

      dispatch(addToLiked(item));
      alert('add');
    }
  };


  return (
    <div className="container">

      <Carousel responsive={responsive} className="mt-4" autoPlay={true} infinite={false}>
        {products.map((item) => (
          <div key={item.id} className="p-4">
            <div className="card">
              <div className="card-overlay">
                <div className='d-flex justify-content-around' >
                  <p className='fs-6 text-white fw-bold ' id='btn1'>{item.offer}%</p>

                  <button
                    onClick={() => handleLikeclick(item)}
                    id='btn2'
                    style={{
                      backgroundColor: likedItems.includes(item.id) ? 'white' : 'pink',
                      // Add any other inline styles as needed
                    }}
                    className='btn rounded-circle'
                  >
                    <FaRegHeart />
                  </button>



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
      <div className='text-center'>
        <button className='px-3 py-2 btn border border-dark'>Explore More<BsArrowRight className='ms-2' /></button>
      </div>
      <hr className='mt-5'></hr>
      <BestSeller />
    </div>
  );
};

export default Caurosal;