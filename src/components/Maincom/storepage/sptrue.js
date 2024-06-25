import React, { useState } from 'react';
import './sptrue.css';
import { useSelector } from 'react-redux';
import { MdCurrencyRupee } from 'react-icons/md';
import { IoArrowUndo } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Sptrue() {
    const [quantityMap, setQuantityMap] = useState({});
    const [yourcardItem, setYourcardItem] = useState(true);
    const [checkout, setCheckout] = useState(true);
    const cart = useSelector((state) => state.cart);
    // const history = useHistory();

    const totalQuantity = cart.reduce((total, item) => total + (item.quantity || 1), 0);

    // Calculate total amount
    const totalAmount = cart.reduce((total, item) => {
        const quantity = quantityMap[item.id] || item.quantity || 1;
        return total + item.price * quantity;
    }, 0);

    // State to track quantity changes
    const handlestate = () => {
        alert('ji');
        setYourcardItem(false);
        setCheckout(false);
    }


    // const handlepush = () => {
    //     // alert('');
    //     history.push('/');
    // }

    // Handle quantity change
    const handleQuantityChange = (itemId, event) => {
        const newQuantityMap = { ...quantityMap, [itemId]: parseInt(event.target.value, 10) };
        // console.log(newQuantityMap);
        setQuantityMap(newQuantityMap);
    };

    return (
        <div className='container-fluid'>

            <div className='' style={{ display: yourcardItem ? 'block' : 'none' }}>
                {/* Your content goes here */}
                <div>
                    <p className='para text-center'>Your Cart Items</p>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='row'>
                                {cart.map((item) => (
                                    <div key={item.id} className='col-sm-6 mt-2'>
                                        <div className='card'>
                                            <img src={item.image} alt={item.title} className='card-img-top' />
                                            <div className='card-body'>
                                                <h5 className='card-title'>{item.title}</h5>
                                                <p className='card-text'>
                                                    Price: <MdCurrencyRupee /> {item.price}.00
                                                </p>
                                                {item.size && (
                                                    <p className='card-text'>
                                                        Size: {item.size}
                                                    </p>
                                                )}
                                                <label htmlFor={`quantity-${item.id}`} className=''>
                                                    Quantity:
                                                </label>
                                                <input
                                                    type='number'
                                                    id={`quantity-${item.id}`}
                                                    value={quantityMap[item.id] || item.quantity || 1}
                                                    onChange={(e) => handleQuantityChange(item.id, e)}
                                                    min={1}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='total-amount'>
                                <p>Total Amount: <MdCurrencyRupee /> {totalAmount.toFixed(2)}</p>
                            </div>
                            <button className='bg-dark text-white fw-bold' onClick={handlestate}>Proceed To Checkout</button> <br />
                            <Link to={'/hairskin'} className='btn  mt-1 fw-bold'>
                                <IoArrowUndo /> Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: checkout ? 'none' : 'block' }} >
                <div className='container fluid'>
                    <p className='text-center fs-4 fw-bold'>Checkout</p>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <p>Some content it no changes </p>
                        </div>
                        <div className='col-sm-6'>
                            <p className='fw-bold fs-4'>Order items {totalQuantity}</p>
                            <div className='row'>
                                <div className='col-sm-4'>
                                    <div className='container p-3'>
                                        {cart.map((item) => (
                                            <div>
                                                <img key={item.id} src={item.image} alt={item.title} className='w-100' />
                                                <p>Title:{item.title}</p>
                                                <p>Price:{item.price}</p>
                                            </div>

                                        ))}
                                    </div>



                                </div>
                            </div>

                        </div>

                    </div>
                    <div>

                    </div>
                </div>


            </div>
        </div>
    );
}
