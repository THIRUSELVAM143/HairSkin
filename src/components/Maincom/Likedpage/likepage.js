import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GiCancel } from "react-icons/gi";
import { addTOCart, removeToLiked } from '../../Action/action';
import './likepage.css';
import { MdCurrencyRupee } from "react-icons/md";

export default function Likepage() {
  const likedItems = useSelector((state) => state.likedItems);
  const cart = useSelector((state) => state.cart); // Assuming you have a cart slice in your Redux state
  const dispatch = useDispatch();

  const handleremove = (item) => {
    dispatch(removeToLiked(item.id));
    alert('Item removed');
  };

  const handleAddAllToCart = (item) => {
    likedItems.forEach((item) => {
      dispatch(addTOCart(item));
    });
    alert("Item added to cart successfully");
  };

  return (
    <div>
      <div className='text-center'>
        <h4 className='das'>Liked Images</h4>
      </div>
      {likedItems.length === 0 ? (
        <p>Please like some items</p>
      ) : (
        <div className='container'>
          <div className='row'>
            {likedItems.map((item) => (
              <div key={item.id} className='col-sm-3'>
                <div className='card mt-5'>
                  <GiCancel id='cancel' className='' onClick={() => handleremove(item)} />
                  <img src={item.image} alt={item.title} className='img-fluid' />
                </div>
                <div className='text-center'>
                  <p className='mt-2'>{item.title}</p>
                  <p className='fw-bold'><MdCurrencyRupee />{item.price}.00</p>
                </div>

              </div>
            ))}
          </div>
        </div>
 
    
      
        



      )}
         {likedItems.length > 0 && (
      <div className='container'>
        <button onClick={handleAddAllToCart}>Add All to Cart</button>
      </div>
    )}
     

    </div>
  );
}
