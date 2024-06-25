import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { MdCurrencyRupee } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import ReviewCarousel from './additionalreviews';

import { addTOCart } from '../../Action/action';

const Periodic = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const periodcare = useSelector((state) => state.periodcare);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    if (!selectedSize) {
      alert('Please select a size before adding to the cart.');
      return;
    }

    // Dispatch an action to add the item to the cart
    dispatch(addTOCart({ item, quantity, size: selectedSize }));
    // You need to define the addToCart action in your Redux actions
    // It should typically update the cart state in your Redux store
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    alert(`Selected size: ${size}`);
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        {periodcare.map((item) => (
          <div key={item.id}>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className='container ms-5 w-75' id='img'>
                    <img src={item.image} alt={`Product ${item.id}`} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className='para1'>
                    <p className='w-25 ps-2 py-1' >Woman's Suit</p>
                  </div>
                  <p id='para2'>Womans Period Care Napkins</p>
                  <div className='row'>
                    <div className='col-sm-2'>
                      <p id='rate' className='mt-1'><MdCurrencyRupee />{item.price}.00</p>
                    </div>
                    <div className='col-sm-4'>
                      <p id='para3' className='text-white  fw-bold px-2 py-1'>{item.quantity} Left in stock</p>
                    </div>
                  </div>
                  <p id='rate'>{item.content}</p>
                  <p><TbTruckDelivery />: Products are usually delivered in 3-7 days </p>
                  <p><FaEye />:</p>
                  <div className="row">
                    {item.sizes.map((size) => (
                      <div key={size} className='col-sm-2'>
                        <button
                          className={`btn ${size === selectedSize ? 'selected' : ''}`}
                          onClick={() => handleSizeClick(size)}
                          style={{
                            backgroundColor: size === selectedSize ? 'hsla(0, 0%, 7%, 1)' : '',
                            color: size === selectedSize ? 'white' : '',
                          }}
                        >
                          {size}
                        </button>
                      </div>
                    ))}

                    <div className='mt-5'>
                      <div className='row'>
                        <div className='col-sm-3'>
                          <input
                            className='w-100'
                            type='number'
                            placeholder='Quantity'
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                        </div>
                        <div className='col-sm-5'>
                          <button
                            className='btn'
                            id='btn'
                            onClick={() => handleAddToCart(item)}
                          >
                            <MdLocalGroceryStore className='me-2' /> Add to Cart
                          </button>
                        </div>
                        <div className='col-sm-4'>
                          <button className='btn'><FaRegHeart /> Whislist</button>
                        </div>
                      </div>
                      <div className='mt-2'>
                        <button className='w-100 btn border text-white bg-dark'><MdLocalGroceryStore /> Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div>
        <ReviewCarousel />
      </div>
    </div>
  );
};

export default Periodic;
