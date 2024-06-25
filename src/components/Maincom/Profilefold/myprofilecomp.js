import React, { useState } from 'react';
import './profile.css';

export default function Myprofilecom() {
    // State for storing form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        mobileNumber: '',
        alterMobileNumber: '',
        email: '',
        displayName: '',
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleUpdateProfile = () => {
        if (!formData.displayName) {
            alert('Please fill in all the display details');
        } else {
            console.log('Updated Profile:', formData);
            // Clear all form data
            setFormData({
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                mobileNumber: '',
                alterMobileNumber: '',
                email: '',
                displayName: '',
            });
            alert('Profile updated successfully!');
        }
    };
    


    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 mb-3'>
                        <label className='fs-4'>First Name*</label>
                        <input
                            type='text'
                            className='form-control h-75'
                            placeholder='First Name'
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='col-sm-6 mb-3'>
                        <label className='fs-4'>Last Name*</label>
                        <input
                            type='text'
                            className='form-control h-75'
                            placeholder='Last Name'
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='col-12 mt-4 mb-3'>
                        <label className='fs-4'>Date of Birth</label>
                        <input
                            type='date'
                            className='form-control h-75'
                            placeholder='Date of Birth'
                            name='dateOfBirth'
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='col-12 mt-4 mb-3'>
                        <label className='fs-4'>Mobile Number *</label>
                        <input
                            type='text'
                            className='form-control h-75'
                            placeholder='Enter Mobile Number'
                            name='mobileNumber'
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='col-12 mt-4 mb-3'>
                        <label className='fs-4'>Alter Mobile Number</label>
                        <input
                            type='text'
                            className='form-control h-75'
                            placeholder='Enter Alter Mobile Number'
                            name='alterMobileNumber'
                            value={formData.alterMobileNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='col-12 mt-4 mb-3'>
                        <label className='fs-4'>Email</label>
                        <input
                            type='text'
                            className='form-control h-75'
                            placeholder='Email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='col-12 mt-4 mb-3'>
                        <label className='fs-4'>Display Name*</label>
                        <input
                            type='text'
                            className='form-control h-75'
                            placeholder='Display Name'
                            name='displayName'
                            value={formData.displayName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='col-12 mt-4'>
                        <button className='btn btn-dark mt-5' onClick={handleUpdateProfile}>
                            Update Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
