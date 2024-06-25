import React from 'react'
import {Link} from 'react-router-dom'
import './signup.css'

export default function Login() {
    return (
        <div className='container-fluid'>
            <h5 className='text-center mt-5 ' id='h3'>Login</h5>
            <hr />
            <div className='container w-50 p-2 border mt-5'>
                <div className='container '>
                    <lable className='fs-4 '>Mobile Number *</lable>
                    <input type='text' className='w-100 mt-3 custom-placeholder' placeholder='Enter Mobile Number'/>

                    <div class="form-check mt-3">
                        <input class="form-check-input" type="checkbox" id="rememberMeCheckbox"></input>
                            <label class="form-check-label" for="rememberMeCheckbox">
                              Remember me
                            </label>
                    </div>
                    <button className='text-center mt-3 w-100 py-3 fw-bold'>Login with OTP</button>
                    <p className='text-center mt-4 fs-5'>Don’t have an Account. <Link to={'/signup'}>Sign up</Link> here</p>

                </div>

            </div>
            <></>

        </div>
    )
}
