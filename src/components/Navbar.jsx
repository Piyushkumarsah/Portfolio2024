import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
import theme from './theme';
import {Link} from 'react-scroll'
export default function Navbar() {

    return (
        <div className='sticky top-0 z-10 top-0 border-b border-[#343434] text-white'style={{backgroundColor:theme.secondaryBackground}}>
            <div className='flex justify-around '>
                <div className=''>
                    <h1 className='my-3 text-bold text-3xl flex' style={{fontFamily: "Great Vibes"}}>Kumar <h1  className="border-b-2 ml-2 border-dashed "style={{borderColor:theme.vibrant}}>Piyush</h1></h1>
                    {/* <img src={Logo}  className="h-[40px] w-[40px] border"alt="" /> */}
                </div>
                <div className='justify-between '>
                    <ul className='flex justify-evenly'>
                        <li className='mx-4 my-3 hidden lg:block'><Link className='hover:scale-110' to='home' smooth duration={1500}>Home</Link></li>
                        <li className='mx-4 my-3 hidden lg:block'><Link className='hover:scale-110' to='about' smooth duration={1500}>About</Link></li>
                        <li className='mx-4 my-3 hidden lg:block'><Link className='hover:scale-110' to='projects' smooth duration={1500}>Projects</Link></li>
                        <li className='mx-4 my-3 hidden lg:block'><Link className='hover:scale-110' to='contact' smooth duration={1500}>Contact</Link></li>
                        <div className='mx-4 my-3'>
                            <button className='flex items-center text-black justify-center h-8 w-24 font-bold rounded-md' onClick={()=>{
                                const subject = 'Regarding your Hiring';
                                const body = 'Hello,\n\nI would like to get in touch with you.';
                                const emailAddress = 'pk.piyush901@gmail.com'
                                const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                                window.open(mailtoLink);

                            }} style={{backgroundColor:theme.vibrant}}>
                                <FaEnvelope className='mx-1'></FaEnvelope>
                               <h4>Hire me</h4>
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
