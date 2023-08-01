import React from 'react'
import locatinomap from './Images/locatinomap.png';

const ContactUs = () => {
    const focusInput = (e)=>{
        e.target.previousSibling.focus();
    }
    return (
        <div className='mt-16 mb-24'>
            <h1 className='text-4xl font-semibold text-center my-16'>Contact Us</h1>
            <div className='flex justify-center flex-col md:flex-row'>
                {/* right side  */}
                <div className='flex-1  flex justify-center'>
                <div className='w-4/5 p-4  contactus border-2 border-black rounded-lg '>
                    <h1 className='text-4xl font-semibold text-center '>Contact Us</h1>
                    <form >
                        <div className='flex sm:flex-row flex-col sm:m-5'>
                            <div className='inputbox flex-1 '>
                                <input type="text" required="required" className='cursor-pointer' />
                                <span className='cursor-pointer' onClick={(event)=>focusInput(event)}>First Name</span>
                            </div>
                            <div className='inputbox flex-1'>
                                <input type="text" required="required" className='cursor-pointer' />
                                <span className='cursor-pointer' onClick={(event)=>focusInput(event)} >Last Name</span>
                            </div>
                        </div>
                        <div className='sm:m-5'>
                            <div className='inputbox'>
                                <input type="text" required="required" className='cursor-pointer' />
                                <span className='cursor-pointer' onClick={(event)=>focusInput(event)} >Mobile Phone</span>
                            </div>
                        </div>
                        <div className='sm:m-5'>
                            <div className='inputbox'>
                                <input type="text" required="required" className='cursor-pointer' />
                                <span className='cursor-pointer' onClick={(event)=>focusInput(event)} >Class</span>
                            </div>

                        </div>
                        <div className='sm:m-5'>
                            <div className='inputbox'>
                                <input type="text" required="required" className='cursor-pointer' />
                                <span className='cursor-pointer' onClick={(event)=>focusInput(event)}>Message</span>
                            </div>
                        </div>

                        <div className='submit m-5'>
                            <input type="submit" className='btn-grad' />
                        </div>
                    </form >
                </div >
                </div>
                {/* left side  */}
                <div className='flex-1 relative sm:block mt-24'>
                    <div className='shadowFixed__c  w-4/5 overflow-hidden mx-auto md:absolute md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2'>
                        <img src={locatinomap.src} alt="" />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default ContactUs