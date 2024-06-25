import React from 'react';
import './profile.css';

export default function Address() {
    return (
        <div className='container-fluid'>
            <div className='container'>
                <lable className='fs-5 das'>Address Type</lable>
                <input type='text' className='w-100 height' placeholder='Enter The Address'></input>
                <p id='para1' className='mt-2'>Eg: Office Address, Home Address Etc</p>
                <div className='row mt-3'>
                    <div className='col-sm-6'>
                        <label className='fs-5'>First Name</label>
                        <input type='text' className='w-100 height' placeholder='Enter The First Name'></input>
                    </div>
                    <div className='col-sm-6'>
                        <label className='fs-5'>Second Name</label>
                        <input type='text' className='w-100 height' placeholder='Enter The Second Name'></input>

                    </div>
                    <div className='mt-3'>
                    <label className='fs-5'>Email*</label>
                    <input type='text' className='w-100 height' placeholder='Enter The First Name'></input>
                    </div>
                    <div className='mt-3'>
                    <label className='fs-5'>Company</label>
                    <input type='text' className='w-100 height' placeholder='Enter The Company'></input>
                    </div>
                     <div className='mt-3'>
                    <label className='fs-5'>Address 1*</label>
                    <input type='text' className='w-100 height' placeholder='Enter The First Name'></input>
                    </div>
                    <div className='mt-3'>
                    <label className='fs-5'>Address 2*</label>
                    <input type='text' className='w-100 height' placeholder='Enter The First Name'></input>
                    </div>
                    <div className='mt-3'>
                    <label className='fs-5'>Country*</label>
                    <input type='text' className='w-100 height' placeholder='Enter The Country'></input>
                    </div>
                    <div className='mt-3'>
                    <label className='fs-5'>State</label>
                    <input type='text' className='w-100 height' placeholder='Enter The State'></input>
                    </div>
                    <div className='mt-3 row'>
                    <div className='col-sm-6'>
                        <label className='fs-5'>City/Town*</label>
                        <input type='text' className='w-100 height' placeholder='City/Town'></input>
                    </div>
                    <div className='col-sm-6'>
                        <label className='fs-5'>ZIP/Postcode*</label>
                        <input type='text' className='w-100 height' placeholder='ZIP/Postcode'></input>

                    </div>
                    </div>
                    <div className='mt-3'>
                    <label className='fs-5'>Mobile Number*</label>
                    <input type='text' className='w-100 height' placeholder='Mobile Number'></input>
                    </div>
                    <div className='mt-3'>
                    <label className='fs-5'>Alternate Mobile Number</label>
                    <input type='text' className='w-100 height' placeholder='Alternate Mobile Number'></input>
                    </div>
                    <div className='mt-3'>
                    <label className='fs-5'>Landmark</label>
                    <input type='textarea' className=' w-100' placeholder='Enter The State'></input>
                    </div>



                    
                </div>
            </div>


        </div>
    )
}
