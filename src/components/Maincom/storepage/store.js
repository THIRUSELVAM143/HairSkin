import React from 'react';
import { useSelector } from 'react-redux';
import Sptrue from './sptrue';

export default function Store() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div>
      <div className='container'>
      
      </div>
      <h4 className='text-center'><i>Welcome To Store</i></h4>
      {cart.length === 0 ? (
        <p>Please select a product</p>
      ) : <Sptrue/>}
    </div>
  );
}
