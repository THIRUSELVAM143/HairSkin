import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import card from '../../images/card 1.png'


import './home.css';
import logo from '../../images/logo-removebg-preview 1 (1).png'
export default function Footer() {
    return (
        <div className='mt-5' id='footer'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col-sm-3'>
                        <div className='row'>
                            <div className='col-sm-4 '><img src={logo} alt='logo' className='mt-2'></img></div>
                            <div className='col-sm-8'>
                                <h4 id='paragraphStyle' className='text-white'>
                                    Womens Dayz<br />
                                    <span style={{ fontWeight: 'bold', fontFamily: 'jost', color: 'hsla(279, 85%, 69%, 1)', fontSize: '15px' }}>Freedom of Life</span>
                                </h4>

                            </div>
                            <p className='mt-5'>No: 15, Krishna Kandha Building,, SA Garden,Saravanampatti, Coimbatore, Tamil Nadu 641026</p>
                            <p className='mt-5'>1-202-555-0106<br/>
                                help@shopper.com
                            </p>
                           
                                <div className='col-sm-3'>
                                    <FaFacebookF className=' text-white' />

                                </div>
                                <div className='col-sm-2'>
                                    <FaTwitter className='  text-white'/>

                                </div>
                                <div className='col-sm-2'>
                                    <FaYoutube className='text-white'/>
                                </div>
                                <div className='col-sm-3'>
                                    <FaInstagram className='insta'/>
                                </div>
                                <div className='col-sm-2'>
                                    <CiLinkedin className='text-white'/>
                                </div>

                           


                        </div>

                    </div>
                    <div className='col-sm-2 text-white ' >
                        <h3 className='pb-5 pt-1'>SUPPORTS</h3>
                        <ul className='mt-4'>
                            <li>Contact Us</li>
                            <li>About </li>
                            <li>Size Guide</li>
                            <li>Shipping & Returns</li>
                            <li>FAQ</li>
                            <li>Privacy</li>

                        </ul>
                    </div>
                    <div className='col-sm-2'>
                    <h3 className='pb-5 pt-1 text-white' >Shop</h3>
                        <ul className='mt-4'>
                            <li>Men's Shopping</li>
                            <li>Women's Shopping </li>
                            <li>Kid's Shopping</li>
                            <li>Furniture</li>
                            <li>Discount</li>
                          

                        </ul>
                    </div>
                    <div className='col-sm-2'>
                    <h3 className='pb-5 pt-1 text-white' >COMPANY</h3>
                        <ul className='mt-4'>
                            <li>About</li>
                            <li>Blog </li>
                            <li>Affiliate</li>
                            <li>Login</li>
                          
                          

                        </ul>
                    </div>
                    <div className='col-sm-3'>
                    <h3 className='pb-5 pt-1 text-white' >SECURE PAYMENTS</h3>
                    <img src={card}></img>
                    

                    </div>
                </div>
             

            </div>
            <hr className='mb-4 text-white border'></hr>
            <p className='text-center fw-bold pb-3'>© 2022 Women’s Dayz. All Rights Reserved.</p>

        </div>
    )
}
