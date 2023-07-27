import React from 'react'

const ContactUs = () => {
    return (
        <div className='mt-16 mb-24'>
            <h1 className='text-4xl font-semibold text-center my-16'>Contact Us</h1>
            <div className='flex justify-center flex-col sm:flex-row'>
                {/* right side  */}
                <div className='flex-1  flex justify-center'>
                <div className='w-4/5 p-4  contactus border-2 border-black rounded-lg '>
                    <h1 className='text-4xl font-semibold text-center '>Contact Us</h1>
                    <form >
                        <div className='flex sm:flex-row flex-col sm:m-5'>
                            <div className='inputbox flex-1 '>
                                <input type="text" required="required" />
                                <span>First Name</span>
                            </div>
                            <div className='inputbox flex-1'>
                                <input type="text" required="required" />
                                <span>Last Name</span>
                            </div>
                        </div>
                        <div className='sm:m-5'>
                            <div className='inputbox'>
                                <input type="text" required="required" />
                                <span>Mobile Phone</span>
                            </div>
                        </div>
                        <div className='sm:m-5'>
                            <div className='inputbox'>
                                <input type="text" required="required" />
                                <span>Class</span>
                            </div>

                        </div>
                        <div className='sm:m-5'>
                            <div className='inputbox'>
                                <input type="text" required="required" />
                                <span>Message</span>
                            </div>
                        </div>

                        <div className='submit m-5'>
                            <input type="submit" className='btn-grad' />
                        </div>
                    </form >
                </div >
                </div>
                {/* left side  */}
                <div className='flex-1 hidden sm:block'>
                    {/* <h1>lef tside </h1>  */}
                </div>

            </div>
        </div >
    )
}

export default ContactUs