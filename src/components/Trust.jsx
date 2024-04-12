import React from 'react'
import theme from './theme'

export default function Trust() {
    return (
        <div className='' name='about' >
            <div className='flex py-5 text-white ' style={{ backgroundColor: theme.primaryBackground }}>
                <div className='m-auto flex-col md:flex md:flex-row p-2'>
                    <div className='p-3'>
                        <button className='flex justify-center items-center h-8 w-28 my-4 text-black  rounded-md' style={{ backgroundColor: theme.vibrant }}>
                            <p className='font-bold'>My History</p>
                        </button>
                        <p className='text-3xl font-bold mb-5'>Say Hello Brother, I'm Developer & <p className='text-3xl' style={{ color: theme.vibrant }}>Designer.</p></p>
                        <p className='text-xl mb-5' style={{ color: theme.primaryText }}>Full stack Developer</p>
                        <p className='mb-9' style={{ color: theme.primaryText }}>Hey there, brother! With a blend of development prowess and design <br />finesse, I'm here to craft digital wonders that captivate and inspire. Let's <br /> collaborate and turn your vision into reality!</p>
                        <p className='text-xl' style={{ color: theme.primaryText }}>Piyush Kumar</p>
                        <p className='text-xl' style={{ color: theme.secondaryText }}>Developer</p>
                    </div>
                    <div className='p-3'>
                        <div className='flex  items-center justify-start'>
                            <div className='m-2' style={{ fontFamily: "Londrina Outline", fontWeight: "bold", fontSize: "60px", color: theme.vibrant }}>01</div>
                            <div>
                                <div className='text-xl' style={{ color: theme.primaryText }}>QUALITY OF WORK</div>
                                <div className='text-sm' style={{ color: theme.secondaryText }}>Consistently producing work of exceptional quality,<br /> meeting or exceeding standards and expectations.</div>
                            </div>
                        </div>
                        <div className='flex items-center justify-start'>
                            <div className='m-2' style={{ fontFamily: "Londrina Outline", fontWeight: "bold", fontSize: "60px", color: theme.vibrant }}>02</div>
                            <div>
                                <div className='text-xl' style={{ color: theme.primaryText }}>INTEGRITY OF VALUE</div>
                                <div className='text-sm' style={{ color: theme.secondaryText }}>Integrity of value underscores the unwavering <br /> commitment to upholding ethical standards and principles <br />
                                    in every endeavor.</div>
                            </div>
                        </div>
                        <div className='flex items-center justify-start'>
                            <div className='m-2' style={{ fontFamily: "Londrina Outline", fontWeight: "bold", fontSize: "60px", color: theme.vibrant }}>03</div>
                            <div>
                                <div className='text-xl' style={{ color: theme.primaryText }}>VALUE OF RESULT</div>
                                <div className='text-sm' style={{ color: theme.secondaryText }}>Dedicated to delivering impactful results that reflect the <br /> highest value standards.</div>
                            </div>
                        </div>
                        <div className='flex items-center justify-start'>
                            <div className='m-2' style={{ fontFamily: "Londrina Outline", fontWeight: "bold", fontSize: "60px", color: theme.vibrant }}>04</div>
                            <div>
                                <div className='text-xl' style={{ color: theme.primaryText }}>CLIENT EXPERIENCE</div>
                                <div className='text-sm' style={{ color: theme.secondaryText }}>Prioritizing exceptional client experiences through<br /> attentive service, clear communication, and exceeding <br /> expectations.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
