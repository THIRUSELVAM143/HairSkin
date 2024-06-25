import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Import your CSS file for styling

const Enterotp = () => {
    const [otp, setOtp] = useState('');
    const [verificationMessage, setVerificationMessage] = useState('');
    const [resendTimer, setResendTimer] = useState(60);
    const [isResendDisabled, setIsResendDisabled] = useState(false);

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post('http://localhost:3200/user/all', { Otp: otp });



            if (response.data.isExpired) {
                setVerificationMessage('OTP is expired. Please request a new one.');
            } else {
                const response = await axios.get('http://localhost:3200/user/getall');
                console.log(response);
                console.log(response.data.data);
                // console.log('ji');

                setVerificationMessage('OTP verified successfully. Welcome!');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setVerificationMessage('Error verifying OTP. Please try again.');
        }
    };

    const handleResendOtp = async () => {
        try {
            setIsResendDisabled(true);
            setResendTimer(60);

            // Simulate API call to resend OTP
            await axios.post('http://localhost:3200/user/resend');

            setTimeout(() => {
                setIsResendDisabled(false);
            }, 60000);
        } catch (error) {
            console.error('Error resending OTP:', error);
            setVerificationMessage('Error resending OTP. Please try again.');
        }
    };

    useEffect(() => {
        let interval;
        if (resendTimer > 0 && isResendDisabled) {
            interval = setInterval(() => {
                setResendTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [resendTimer, isResendDisabled]);

    return (
        <div className='container-fluid'>
            <h5 className='text-center mt-5' id='h3'>
                Enter OTP
            </h5>
            <hr />
            <div className='container w-50 p-2 border mt-5'>
                <div className='container'>
                    <label className='fs-5'>Enter OTP *</label>
                    <input
                        type='text'
                        className='w-100 mt-3 custom-placeholder'
                        placeholder='Enter OTP'
                        value={otp}
                        onChange={handleOtpChange}
                    />
                    <button className='text-center mt-3 w-100 py-3 fw-bold' onClick={handleVerifyOtp}>
                        Verify OTP
                    </button>

                    <p>
                        <button className='mt-3' onClick={handleResendOtp} disabled={isResendDisabled}>
                            Resend OTP
                        </button>
                        {isResendDisabled && ` (${Math.floor(resendTimer / 60)}:${resendTimer % 60})`}
                    </p>
                    <p className='text-center mt-3 fs-5'>{verificationMessage}</p>
                </div>
            </div>
        </div>
    );
};

export default Enterotp;
