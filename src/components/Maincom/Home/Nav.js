import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoIosContact } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav,  Button } from 'react-bootstrap';
import { FaSearch, FaHeart, FaStore } from 'react-icons/fa';

import img from '../../images/logo-removebg-preview 1 (1).png';
import './home.css';



const NavigationBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearchBox, setShowSearchBox] = useState(false);
    const cart=useSelector((state)=>state.cart);
    const likedItems=useSelector((state)=>state.likedItems);
    console.log(cart);


    const handleSearchButtonClick = () => {
        setShowSearchBox(!showSearchBox);
    };

    return (
        <div className="container-fluid bg-light " >
        <Navbar bg="body" expand="lg"   >
           
                <Navbar.Brand href="#">
                    <div className='row'>
                        <div className='col-sm-4 '><img src={img} alt='logo' className='mt-2'></img></div>
                        <div className='col-sm-8'>
                            <h4 id='paragraphStyle'>
                                Womens Dayz<br />
                                <span style={{ fontWeight: 'bold', fontFamily: 'jost', color: 'hsla(279, 85%, 69%, 1)', fontSize: '15px' }}>Freedom of Life</span>
                            </h4>

                        </div>


                    </div>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive"  />
                <Navbar.Collapse id="navbarResponsive">
                    <Nav className="mx-auto">
                        <Nav.Link ><Link className='btn' to={'/'}>Home</Link></Nav.Link>
                        <Nav.Link><Link className='btn'>Shop</Link></Nav.Link>
                        <Nav.Link><Link className='btn' to={'/Periodic'}>Period Care</Link></Nav.Link>
                        <Nav.Link><Link className='btn' to={'/hairskin'}>Hair Skin Care</Link></Nav.Link>
                        <Nav.Link><Link className='btn'>Health Care Twines</Link></Nav.Link>
                        <Nav.Link><Link className='btn'>Contact</Link></Nav.Link>
                        
                        
                        
                    </Nav>
                    <Button variant="outline-success" onClick={handleSearchButtonClick}>
                        <FaSearch />
                    </Button>
                    <Nav>
                        <Nav.Link  className='mx-2'>
                  
                            <Link to={'/likedpage'} >
                            <div className='position-relative' ><div class="position-absolute top-0 start-0 translate-middle"> {likedItems.length > 0 && <div className="badge bg-danger">{likedItems.length}</div>}</div> <FaHeart /> </div></Link>

                              
                            
                        </Nav.Link>
                        <Nav.Link href="#" className='mx-2'>
                            <Link to={'/store'}>
                                <div className='position-relative' ><div class="position-absolute top-0 start-0 translate-middle"> {cart.length > 0 && <div className="badge bg-danger">{cart.length}</div>}</div> <FaStore /> </div></Link>
                           
                        </Nav.Link>
                        <Nav.Link href="#" className='me-3'>
                            <Link to={'/login'}> <IoIosContact /></Link>
                       
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                
               
            </div>
           
       
        

        
    );
};

export default NavigationBar;
