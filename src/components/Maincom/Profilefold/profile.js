import React, { useState } from 'react';
import bucket from '../../images/storebucket.png';
import location from '../../images/locationprofile.png';
import heart from '../../images/heartprofile.png';
import profile from '../../images/profilepic.png';
import logout from '../../images/logout.png';

import './profile.css';
import Myprofilecom from './myprofilecomp';
import Likepage from '../Likedpage/likepage';
import Address from './Address';

export default function Profile() {
    const [selectedContent, setSelectedContent] = useState('profile'); // Default content is 'profile'

    const handleContentChange = (content) => {
        setSelectedContent(content);
    };

    return (
        <div >
            <div className='container-fluid'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-sm-4 '>
                            <div className='container-fluid '>
                                <div className='container border mt-2'>
                                    <h4 className='p-5 text-center das'>Name</h4>

                           
                            <p className='das fw-bold fs-6 ' >Dashboard Navigation</p>

                            <button id=''
                                className={`w-100 btn das ${selectedContent === 'order' ? 'active' : ''}`}
                                onClick={() => handleContentChange('order')}
                            >
                                <img className=' btn1 me-3 das' src={bucket} alt='My Order'></img>My Order
                            </button>
                            <hr />
                            <button
                                className={`w-100 btn das ${selectedContent === 'wishlist' ? 'active' : ''}`}
                                onClick={() => handleContentChange('wishlist')}
                            >
                                <img className=' btn1 me-3 das' src={heart} alt='Wishlist'></img>Wishlist
                            </button>
                            <hr />
                            <button
                                className={`w-100 btn das ${selectedContent === 'address' ? 'active' : ''}`}
                                onClick={() => handleContentChange('address')}
                            >
                                <img className=' btn1 me-3' src={location} alt='Address'></img>Address
                            </button>
                            <hr />
                            <button
                                className={`w-100 btn das ${selectedContent === 'profile' ? 'active' : ''}`}
                                onClick={() => handleContentChange('profile')}
                            >
                                <img className=' btn1 me-3' src={profile} alt='Profile Info'></img>Profile Info
                            </button>
                            <hr />
                            <button
                                className={`w-100 btn das ${selectedContent === 'logout' ? 'active' : ''}`}
                                onClick={() => handleContentChange('logout')}
                            >
                                <img className=' btn1 me-3' src={logout} alt='Logout'></img>Logout
                            </button>
                            <hr />
                        </div>
                        </div>
                            </div>
                        <div className='col-sm-8'>
                            {/* Render content based on selectedContent */}
                            {selectedContent === 'order' && <p className='fw-bold'>My Order Content</p>}
                            {selectedContent === 'wishlist' && <Likepage/>}
                            {selectedContent === 'address' && <Address/>}
                            {selectedContent === 'profile' && <Myprofilecom />}
                            {selectedContent === 'logout' && <p>Logout Content</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
