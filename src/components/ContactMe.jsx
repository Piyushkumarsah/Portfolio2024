import React from 'react'
import theme from '../components/theme'
function Contact() {
    return (
        <div name="contact" className="w-full" style={{backgroundColor:theme.primaryBackground}}>
            <div className='text-white  p-4 flex flex-col justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8  flex flex-col items-center justify-center'>
                    <p className='text-4xl  font-bold border-b-4 inline border-[#6b6b6b] p-2'>Contact Me</p>
                    <p className='pt-6'>Fill the form below to get in touch with me.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/2bc56748-6a57-4e5d-b674-3fb723f62765" method="POST" className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' style={{color:theme.vibrant}} placeholder='Name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none
                    ' />
                        <input type="text" name='email' placeholder='Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none
                    ' />
                        <textarea name="message" placeholder ="Type a message" id="" rows="10" className='p-2 bg-transparent text-white border-2 focus:outline-none rounded-md'></textarea>
                        <button className='text-black font-bold px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300' style={{backgroundColor:theme.vibrant}}> Send Me</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact