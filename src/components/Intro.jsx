import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
// import authorVector from '../assets/authorvector.png'
// import authorVector2 from '../assets/authorVector2.png'
import CreatorImg from '../assets/creatorImg.png'
import theme from './theme';
export default function Intro() {
    return (
        <div name='home'>
            <div className='flex p-5 text-white' style={{ backgroundColor: theme.primaryBackground }}>
                <div className='m-auto flex-col items-center flex md:flex-row'>
                    <div className='mb-2 sm:mr-5'>
                        <div>
                            <img src={CreatorImg} className='w-[350px] rounded-lg' alt="" />
                        </div>
                    </div>
                    <div className=' m-auto '>
                        <div>
                            <div className='flex flex-col sm:flex-row items-start '>
                                <h1 className='font-bold flex text-3xl mb-3'>Hello, I'm </h1>
                                <h1 className='sm:mx-2 text-3xl' style={{ color: theme.vibrant }}>Piyush Kumar</h1>
                            </div>
                            <h3 className='text-[#d5d5d5] mb-3 text-xl' >Full Stack Developer</h3>
                            <p className='mb-3'>Get top-notch full-stack development services tailored to your <br />needs. Lets bring your ideas to life, hassle-free.</p>
                            <div>
                                <div className='flex py-1'>
                                    <h1 className='' style={{ color: theme.secondaryText }}>AGE: </h1>
                                    <h1 className='mx-2' style={{ color: theme.primaryText }}>21 YEARS</h1>
                                </div>
                                <hr />
                                <div className='flex py-1'>
                                    <h1 className='' style={{ color: theme.secondaryText }}>ADDRESS: </h1>
                                    <h1 className='mx-2' style={{ color: theme.primaryText }}>GRAND TRUNK ROAD, NIT-JALANDHAR, PUNJAB 144001</h1>
                                </div>
                                <hr />
                                <div className='flex py-1'>
                                    <h1 className='' style={{ color: theme.secondaryText }}>PHONE:</h1>
                                    <h1 className='mx-2' style={{ color: theme.primaryText }}>+91 6206015169</h1>
                                </div>
                                <hr />
                                <div className='flex py-1'>
                                    <h1 className='' style={{ color: theme.secondaryText }}>EMAIL:</h1>
                                    <h1 className='mx-2' style={{ color: theme.primaryText }}>pk.piyush901@gmail.com</h1>
                                </div>
                                <hr />
                            </div>
                            <div className='flex flex-col sm:flex-row mt-5 pt-2'>
                                <div className='flex'>
                                    <a href='https://www.linkedin.com/in/piyush-kumar-397928231/' className='mr-1 p-1 hover:scale-110  rounded-md' style={{ backgroundColor: theme.secondaryBackground }}><FaLinkedin size={32}></FaLinkedin></a>
                                    <a href='https://github.com/Piyushkumarsah' className='mx-1 p-1 hover:scale-110  rounded-md' style={{ backgroundColor: theme.secondaryBackground }}><FaGithub size={32}></FaGithub></a>
                                    <a href='https://twitter.com/Kumar_Piyush_21' className='mx-1 p-1 hover:scale-110  rounded-md' style={{ backgroundColor: theme.secondaryBackground }}><FaTwitter size={32}></FaTwitter></a>
                                    <a href='www.facebook.com' className='mx-1 p-1 hover:scale-110  rounded-md' style={{ backgroundColor: theme.secondaryBackground }}><FaFacebook size={32}></FaFacebook></a>
                                    <a href='www.youtube.com' className='mx-1 p-1 hover:scale-110  rounded-md' style={{ backgroundColor: theme.secondaryBackground }}><FaYoutube size={32}></FaYoutube></a>
                                    <a href='https://www.instagram.com/____kumar_piyush____/' className='mx-1 p-1 hover:scale-110  rounded-md' style={{ backgroundColor: theme.secondaryBackground }}><FaInstagram size={32}></FaInstagram></a>
                                </div>
                                <div className='flex items-end'>
                                    <a href='https://app.joinsuperset.com/students/jobprofiles?currentJobId=98fd7669-01d6-4c04-af18-0a135c8e05f9' className='mx-1   underline hover:scale-110  rounded-md'>Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
