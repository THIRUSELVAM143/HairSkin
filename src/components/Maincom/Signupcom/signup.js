import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    // const [para,setPara]=useState('');

    const handlesend = async () => {


        try {

            const response = await axios.post('http://localhost:3200/user/signup', {
                first_name: firstName,
                email,
                mobile_number: mobileNumber,
            });

            const res = await axios.get('http://localhost:3200/user/getall');
            console.log('ji');


            console.log('User signed up successfully.');


            console.log('Response from server:', response.data);


        } catch (error) {
            console.error('Error making API call:', error);

            // Assuming you have a state to handle error message
            // You can show an error message to the user
        }
    };

    return (
        <div className='container-fluid'>
            <h5 className='text-center mt-5' id='h3'>
                Sign Up
            </h5>
            <hr />
            <div className='container w-50 p-2 border mt-5'>
                <div className='container mt-4'>
                    <label className='fs-5 mt-5'>First Name*</label>
                    <input
                        type='text'
                        className='w-100 mt-3 custom-placeholder'
                        placeholder='Enter First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label className='fs-5'>Email</label>
                    <input
                        type='text'
                        className='w-100 mt-3 custom-placeholder'
                        placeholder='Enter Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className='fs-5'>Mobile Number*</label>
                    <input
                        type='text'
                        className='w-100 mt-3 custom-placeholder'
                        placeholder='Enter Mobile Number'
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                    <button
                        className='text-center mt-3 w-100 py-3 fw-bold'
                        onClick={handlesend}
                    >
                        Sign Up
                    </button>
                    <p className='text-center mt-3 fs-5'>
                        <Link id='link' to={'/backtolog'}>
                            Back to Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
