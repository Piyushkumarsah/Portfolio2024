import React from 'react'
import theme from './theme'
import leetcodeImg from '../assets/leetcode.png'
import gfgImg from '../assets/gfg.png'
export default function ProfessionalSkills() {

    return (
        <div>
            <div className='flex pb-12' style={{ backgroundColor: theme.primaryBackground }}>
                <div className='m-auto  flex-col md:flex md:flex-row p-2'>
                    <div className='pt-12 text-white' >
                        <div className='m-auto'>
                            <div className='flex items-center justify-start'>
                                <button className='flex text-black justify-center items-center h-8 w-36 my-4 rounded-md' style={{ backgroundColor: theme.vibrant }}>
                                    <p className='font-bold'>Experience</p>
                                </button>
                            </div>
                            <p className='text-2xl font-bold mt-2'>My Experience in <p className='inline text-center text-2xl mx-1 ' style={{ color: theme.vibrant }}>Work</p></p>
                            <p className='text-[#c1c1c1] mt-3'>Versatile Expertise, Exceptional Results</p>
                            <p className="mt-3" style={{ color: theme.secondaryText }}>With a robust background spanning diverse industries and technologies,<br /> my experience embodies versatility and adaptability. From spearheading <br /> innovative projects to fostering collaborative environments, I excel in <br /> driving results and exceeding expectations. Embracing challenges as <br />opportunities for growth, I bring a wealth of expertise to every endeavor,<br /> ensuring success and advancement at every turn.</p>
                        </div>
                    </div>
                    <div className='flex items-center ml-4'>
                        <div className=''>
                            <div className="m-auto">
                                <div className=' text-white' >
                                    <div className='m-auto'>
                                        <div className='flex items-center justify-center'>
                                            <button className='flex text-black justify-center items-center h-8 w-36 my-4 rounded-md' style={{ backgroundColor: theme.vibrant }}>
                                                <p className='font-bold'>Coding Profiles</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 sm:grid-cols-3 grid-cols-2  gap-4">
                                    <div className="border m-2 flex flex-col items-center justify-center border-[#343434] h-[120px]  w-[120px] md:h-[150px] md:w-[150px]  p-8 rounded-md text-center" style={{ backgroundColor: theme.secondaryBackground, color: theme.secondaryText }}>
                                        <img src={leetcodeImg} key='' className='' />
                                        <a href='https://leetcode.com/Piyush_kumar_21/' target='blank' className='mt-2'>Profile</a>
                                    </div>
                                    <div className="border m-2 flex flex-col items-center justify-center border-[#343434] h-[120px]  w-[120px] md:h-[150px] md:w-[150px]  p-8 rounded-md text-center" style={{ backgroundColor: theme.secondaryBackground, color: theme.secondaryText }}>
                                        <img src={gfgImg} key='' className='' />
                                        <a href='https://www.geeksforgeeks.org/user/pkpiyush901/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user' target='blank' className='mt-2'>Profile</a>
                                    </div>

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
